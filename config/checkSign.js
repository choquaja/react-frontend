const spawnSync = require('child_process').spawnSync

const git = spawnSync('git', ['verify-commit', '--raw', 'HEAD'])

if (git.output && git.output.toString().includes('GOODSIG')) {
  process.exit(0)
}

console.log(`
The most recent commit for this push doesn't have a valid GPG signature. To add
your GPG signature to the most recent commit, run the following command:

    "git commit --amend -S".

In the future, sign each commit by including the "-S" flag. More information
is available in this project's contributor guide:

    https://github.com/3Blades/react-frontend/blob/master/CONTRIBUTING.md#sign-your-work
`)

process.exit(1)
