const fs = require('fs')
const path = require('path')

const filesToRemove = ['tsconfig.json', 'next-env.d.ts']
const cwd = process.cwd()

function removeIfExists(file) {
  const p = path.join(cwd, file)
  try {
    if (fs.existsSync(p)) {
      fs.unlinkSync(p)
      console.log('[clean-ts-watch] removed', file)
    }
  } catch (e) {
    // ignore
  }
}

// Do an initial cleanup
filesToRemove.forEach(removeIfExists)

// Watch the repo root for changes and remove files if they appear
try {
  const watcher = fs.watch(cwd, { persistent: true }, (eventType, filename) => {
    if (!filename) return
    if (filesToRemove.includes(filename)) {
      removeIfExists(filename)
    }
  })

  // Also periodically check in case fs.watch misses something
  const interval = setInterval(() => filesToRemove.forEach(removeIfExists), 1000)

  // Keep process alive
  process.on('SIGINT', () => {
    watcher.close()
    clearInterval(interval)
    process.exit(0)
  })
} catch (e) {
  // fallback: just exit silently
}
