# Git Push Guide (origin vs personal)

This repo has two remotes:

- `origin` -> `git@gh-narratologies:Narratologies-PC/octopus-website.git`
- `personal` -> `git@gh-natasha:natasha-papathoma/octopus-website.git`

Use this guide to push to the correct destination every time.
The personal is the one that automatically builds in Vercel.
The origin is the one that updates the Narratologies Organisatin github repo so it is there mostly for company repo purposes.

## Quick commands

Push current branch to personal:

```bash
git push personal HEAD
```

Push current branch to origin:

```bash
git push origin HEAD
```

Push a specific local branch (example: main):

```bash
git push personal main
git push origin main
```

## Set a default upstream once (recommended)

If you usually push to personal from your current branch:

```bash
git push -u personal HEAD
```

After that, plain `git push` will go to `personal` for that branch.

If you want to switch upstream later:

```bash
git branch --set-upstream-to=origin/main main
# or
git branch --set-upstream-to=personal/main main
```

## Verify where your branch pushes

Show branch tracking info:

```bash
git branch -vv
```

Show remotes:

```bash
git remote -v
```

## SSH identity checks

Because this setup uses two SSH aliases, test both:

```bash
ssh -T git@gh-natasha
ssh -T git@gh-narratologies
```

Expected success pattern:

- `Hi <username>! You've successfully authenticated...`

If you see `Permission denied (publickey)`, the public key is not added to that GitHub account yet.

## Common workflows

Feature branch to personal only:

```bash
git checkout -b feature/my-change
git push -u personal HEAD
```

Feature branch to both remotes:

```bash
git checkout -b feature/my-change
git push -u personal HEAD
git push -u origin HEAD
```

Update existing branch on both remotes:

```bash
git push personal HEAD
git push origin HEAD
```
