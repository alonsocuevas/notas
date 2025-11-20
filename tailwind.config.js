module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'synth-black': '#1f242d',
        'synth-purple': '#261447',
        'synth-pink': '#ff3864',
        'synth-cyan': '#00f5d4',
        'synth-light': '#f0f0f0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dev-image': "url('/img/dev2.webp')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'synth-black': '#1f242d',
        'synth-purple': '#261447',
        'synth-pink': '#ff3864',
        'synth-cyan': '#00f5d4',
        'synth-light': '#f0f0f0',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dev-image': "url('/img/dev2.webp')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
module.exports = config
