# Classroom contribution workflow
1. Create a GitHub issue with a small, clear task and acceptance criteria.
2. Update local main: `git switch main`, then `git pull --ff-only`.
3. Create a task branch: `git switch -c feature/task-name`.
4. Change code and tests; run `npm test`.
5. Review `git diff`; stage specific files and make a focused commit.
6. Push with `git push -u origin feature/task-name`.
7. Open a pull request into main; request a classmate's review.
8. Respond to feedback and ensure the Actions check passes before merging.
9. Pull main locally; delete the merged local task branch with `git branch -d feature/task-name`.

Do not commit credentials or real student records. Use fictional training data.
Do not rewrite shared history. Use revert for a published mistake.
