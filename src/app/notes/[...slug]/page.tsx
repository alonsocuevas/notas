import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { getAllNoteSlugs } from '../../../lib/notes';
import { createElement } from 'react';

// Import specific languages for rehype-highlight
import js from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import dockerfile from 'highlight.js/lib/languages/dockerfile';

type Props = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs();
  console.log("Generated slugs for generateStaticParams:", slugs.map(s => {
    console.log("Current slug object in map:", s);
    return s.slug;
  }));
  const generatedParams = slugs.map(s => ({ slug: s.slug }));
  console.log("Generated params for generateStaticParams:", generatedParams);
  return generatedParams;
}

async function getNoteContent(slug: string[]) {
  const filePath = path.join(process.cwd(), 'notes', ...slug);
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return content;
  } catch (error) {
    return null;
  }
}

export default async function NotePage({ params }: Props) {
  const { slug } = params;
  const content = await getNoteContent(slug);

  if (!content) {
    return <div className="text-center">Selecciona una nota del menú para empezar.</div>;
  }

  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [rehypeHighlight, {
            languages: { js, python, dockerfile }
          }],
          rehypeRaw
        ]}
        components={{
                              blockquote({ node, children, ...props }) {
                                let text = '';
                                // Attempt to extract text from the first child directly
                                if (Array.isArray(children) && children.length > 0) {
                                  const firstChild = children[0];
                                  if (typeof firstChild === 'string') {
                                    text = firstChild;
                                  } else if (typeof firstChild === 'object' && firstChild !== null && 'props' in firstChild && 'children' in firstChild.props) {
                                    // If the first child is an element with children, try to get text from its children
                                    const grandChildren = firstChild.props.children;
                                    if (typeof grandChildren === 'string') {
                                      text = grandChildren;
                                    } else if (Array.isArray(grandChildren) && grandChildren.length > 0 && typeof grandChildren[0] === 'string') {
                                      text = grandChildren[0];
                                    }
                                  }
                                } else if (typeof children === 'string') {
                                  text = children;
                                }
                    
                                text = text.trim();
                    
                                let className = '';
                                if (text.startsWith('ℹ️')) {
                                  className = 'info-callout';
                                } else if (text.startsWith('⚠️')) {
                                  className = 'warning-callout';
                                } else if (text.startsWith('🔥')) {
                                  className = 'danger-callout';
                                }
                                return createElement('blockquote', { className, ...props }, children);
                              },
                            }}      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
