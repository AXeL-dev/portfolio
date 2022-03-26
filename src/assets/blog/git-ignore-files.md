Most of developers nowadays know how to use git to track changes in their projects, still the most of their usage might be restricted to basic operations like **commit**, **push**, **pull** & **merge**.

Therefore, let's check today how to use git to ignore specific files repository-wide or just locally.

<blockquote><h4>The .gitignore way</h4></blockquote>

Adding a **.gitignore** file to the root of you repository & listing the files/directories that you want to ignore inside is one of the most know ways to ignore files in git. Still this is applied repository-wide & forces the same ignore rules on the other developers in your team.

Example of a .gitgnore file:

```
file1
file2
directory1
directory2/*.cache
*.env
!*.js
```

<blockquote><h4>The update-index command</h4></blockquote>

In case you want to ignore files only locally (just on your machine), this git command is a life saver:

```bash
git update-index --assume-unchanged <file>
```

**Note**: The **&lt;file&gt;** placeholder should be replaced with the file name.

The above will result into removing the specified file from your unstaged changes (like if the file wasn't modified, still its content remains intact).

To revert the file ignore, simply use the "**--no-assume-unchanged**" argument like so:

```bash
git update-index --no-assume-unchanged <file>
```

Furthermore, there is another variant/argument of the update-index command:

```bash
git update-index --skip-worktree <file>
```

Unlike **--assume-unchanged**, the **--skip-worktree** persists your ignored files over upstream changes, so even if the ignored file was changed on the upstream branch, your local file(s) won't be affected when you pull changes from that branch.

To revert the previous operation, simply use "**--no-skip-worktree**" instead.
