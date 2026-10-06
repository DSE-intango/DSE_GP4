# Git and GitHub practical labs
Trainer: Fidèle NDAYISHIMIYE. Run commands in a terminal inside the extracted project.
Commands work in Git Bash on Windows, macOS Terminal or a Linux shell. File edits can be made in VS Code. Replace instructional values such as YOUR-USERNAME with your own values. This ZIP has no .git directory: students create their own history.

## 1. Create a repository and inspect the three areas
Check Git with `git --version`, then initialise before setting repository-local identity:
```sh
git init -b main
git config --local user.name "Your name"
git config --local user.email "Your GitHub commit email"
git status
npm test
git add .
git diff --cached
git commit -m "chore: initialise DSE marks project"
git log --oneline
```
Working tree = edited files. Index = staged snapshot. Commit = saved snapshot in repository history. Local configuration affects this repository only. Use your GitHub noreply email if you prefer not to publish your personal email.

## 2. Make a focused commit
Edit practice/release-note.txt to explain what the programme does.
```sh
git diff
git add practice/release-note.txt
git diff --cached
git commit -m "docs: explain the first classroom release"
git status
```
Evidence: show the difference between unstaged, staged and committed content.

## 3. Branch and merge
```sh
git switch -c feature/threshold-example
```
Add a passMark 60 example in src/demo.js. Run npm start and npm test.
```sh
git add src/demo.js
git commit -m "feat: demonstrate a pass mark of 60"
git switch main
git merge --no-ff feature/threshold-example
git log --graph --oneline --all
```
Explain why the feature branch isolates work and what the merge commit records.

## 4. Deliberately create and resolve a conflict
Begin on clean main. Both branches change the SAME first line of practice/team-message.txt.
```sh
git switch -c lab/message-a
```
Change the line to `Welcome developers: practise small commits.` Save, stage the file and commit it.
```sh
git switch main
git switch -c lab/message-b
```
Change the line to `Welcome developers: review each other's code.` Save, stage and commit it.
```sh
git switch main
git merge --no-ff lab/message-a
git merge lab/message-b
git status
```
The second merge should conflict. Inspect the <<<<<<<, ======= and >>>>>>> markers. Replace the entire conflict with one agreed sentence including both ideas; remove all markers. Then:
```sh
git add practice/team-message.txt
git commit -m "merge: combine classroom collaboration messages"
npm test
```
To abandon an unresolved merge before resolution: `git merge --abort`. Explain both contributors' changes before deciding what to keep.

## 5. Restore, unstage and revert
On clean main, edit practice/release-note.txt temporarily.
```sh
git add practice/release-note.txt
git restore --staged practice/release-note.txt
git diff
```
Unstaging keeps your edit. `git restore practice/release-note.txt` discards this uncommitted practice edit; use it only if you intend to lose that edit.
Now make an intentionally incorrect committed change in that same file and commit it. Immediately undo it:
```sh
git revert HEAD
git log --oneline -3
```
Save and close the editor if prompted. Revert creates a new inverse commit; it is suitable for shared history.

## 6. Stash unfinished work
With a clean working tree, edit an existing practice file without committing.
```sh
git stash push -m "unfinished classroom note"
git switch -c lab/stash-visit
git switch main
git stash list
git stash pop
```
Inspect your restored edit; commit it or intentionally discard it before the next lab. Default stash does not include untracked files; use `-u` if you deliberately want to include them.

## 7. GitHub remote, issue and pull request
On GitHub create an EMPTY repository named dse-marks-git-practice. Do not add a README, licence or .gitignore there, because they would create a separate initial history. Copy YOUR repository HTTPS URL, then:
```sh
git remote add origin https://github.com/YOUR-USERNAME/dse-marks-git-practice.git
git remote -v
git push -u origin main
```
Use GitHub's supported sign-in/credential manager or SSH setup. Do not put tokens in files, commits or remote URLs.
Create an issue: 'Add a threshold-75 demo'. Create feature/threshold-75, add the demo, test, commit and push it. Open a PR targeting main, link the issue, request a classmate's review and inspect Actions. Merge after feedback and passing checks.
```sh
git switch main
git pull --ff-only
git fetch --prune
git branch -vv
```
Fetch downloads remote information; pull integrates it into your current branch. If ff-only refuses, inspect the graph and resolve divergent history deliberately.

## 8. Pair collaboration
The owner invites a partner as collaborator. The partner accepts, clones the repository into a DIFFERENT directory, runs npm test, creates a feature branch, makes a small documentation improvement and opens a PR. The owner reviews it. Alternatively, use fork + PR if no collaborator access is provided. Cloning creates a local repository with origin already set; do not run remote add origin again.

## 9. Advanced: cherry-pick, rebase and investigation
On clean main create lab/pick-source; edit practice/release-note.txt and commit. Copy that commit hash from git log. Switch to main, create lab/pick-target, then run `git cherry-pick COMMIT-HASH`. Inspect how one change is replayed. Use `git cherry-pick --abort` if an unresolved conflict needs abandoning.
For rebase, use a NEW unpublished branch lab/rebase-demo from main. Commit an edit in practice/release-note.txt. Return to main and commit an edit to docs/LEARNING_LOG.md. Return to lab/rebase-demo and run `git rebase main`; inspect the graph. If a conflict occurs, resolve, stage and use `git rebase --continue`, or `git rebase --abort`. Do not rebase already shared branches or force-push during these exercises.
Inspect a line's origin with `git blame src/analyseMarks.js` and a commit with `git show HEAD`. For a trainer-led bisect, first introduce a deliberate failing commit and then a later unrelated commit on a disposable lab branch. Identify a known passing and failing hash, run `git bisect start BAD-HASH GOOD-HASH`, then `git bisect run npm test`; finish with `git bisect reset`. Never invent the endpoint hashes.

## 10. Tag a release
On passing main:
```sh
npm test
git tag -a v1.0.0 -m "DSE classroom baseline"
git show v1.0.0
git push origin v1.0.0
```
Only push the tag after a remote exists. View or create its release on GitHub. A tag marks a particular commit, not an automatically updated branch.

## Assessment evidence
Submit repository URL; one linked issue and reviewed PR; a screenshot of the history graph; conflict explanation; passing test output; one revert commit; release tag; completed learning log. Assess Git skills separately from the earlier programming diagnostic.
