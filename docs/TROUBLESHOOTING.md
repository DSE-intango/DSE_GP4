# Troubleshooting
- npm not recognised: install Node.js, reopen the terminal, check node --version and npm --version.
- git not recognised: install Git and reopen the terminal.
- not a git repository: open the extracted project directory and initialise it, or use the clone directory.
- Author identity unknown: set local user.name and user.email after git init.
- Nothing to commit: save your editor file and inspect git status.
- Remote origin already exists: inspect git remote -v; do not add it twice. Only change the URL intentionally.
- Push rejected: fetch and inspect history; do not force-push. Use an empty remote for the initial upload.
- Authentication failed: use GitHub's supported credential/SSH setup. A normal account password is not a Git HTTPS credential.
- Conflict markers: resolve every marked block, save, stage the resolved file and finish the operation.
- Git editor open: save the commit message and close the editor; configure your preferred editor if necessary.
- npm test fails after a change: read the expected versus actual values, compare git diff and fix the behavior before merging.
- Actions absent: push the .github/workflows/test.yml file and check the repository's Actions permissions. Hosted CI is only validated after pushing.

Official references:
- https://git-scm.com/docs
- https://docs.github.com/en/get-started
- https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs
