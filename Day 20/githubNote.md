<!-- Git and GitHub -->

# -------------------------------
# 1. Git Setup / Repository
# -------------------------------

git init
# Initializes Git in the current project folder


git status
# Shows the current status of your files


git config --global user.name "Your Name"
# Sets your Git username


git config --global user.email "you@example.com"
# Sets your Git email


# -------------------------------
# 2. Add and Commit
# -------------------------------

git add .
# Adds all changed/new files to the staging area


git add filename.html
# Adds only a specific file


git commit -m "Initial commit"
# Saves the staged changes with a message


git log
# Shows commit history


git log --oneline
# Shows a short version of commit history


# -------------------------------
# 3. Branch Commands
# -------------------------------

git branch
# Shows all local branches


git branch main
# Creates a new branch called main


git branch -M main
# Renames the current branch to main


git checkout main
# Switches to the main branch


git checkout -b feature
# Creates and switches to a new branch


git switch main
# Switches to the main branch


git switch -c feature
# Creates and switches to a new branch


# -------------------------------
# 4. GitHub Remote Commands
# -------------------------------

git remote -v
# Shows the GitHub repository connected to your project


git remote add origin https://github.com/USERNAME/REPOSITORY.git
# Connects your local project to a GitHub repository


git remote remove origin
# Removes the existing GitHub connection


git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
# Changes the GitHub repository URL


# -------------------------------
# 5. Push to GitHub
# -------------------------------

git push -u origin main
# Uploads the main branch to GitHub
# -u connects your local main branch with GitHub main


git push
# Pushes future commits to GitHub


git push origin main
# Pushes the main branch to GitHub


# -------------------------------
# 6. Pull / Fetch
# -------------------------------

git pull
# Downloads changes from GitHub and merges them


git pull origin main
# Gets changes from GitHub's main branch


git fetch
# Downloads information from GitHub without merging


git fetch origin
# Fetches updates from the origin repository


# -------------------------------
# 7. Clone a GitHub Repository
# -------------------------------

git clone https://github.com/USERNAME/REPOSITORY.git
# Downloads/clones a GitHub repository to your computer


# -------------------------------
# 8. Undo / Remove Changes
# -------------------------------

git restore filename.html
# Discards changes made to a file
# ⚠️ The changes will be lost


git restore --staged filename.html
# Removes a file from staging
# The file itself is not deleted


git reset
# Unstages all staged files


git reset --hard
# Discards all uncommitted changes
# ⚠️ Use carefully


# -------------------------------
# 9. Branch Merge
# -------------------------------

git merge feature
# Merges the feature branch into the current branch


# -------------------------------
# 10. Delete Branch
# -------------------------------

git branch -d feature
# Deletes a local branch


git push origin --delete feature
# Deletes a branch from GitHub


# -------------------------------
# 11. Complete Normal Workflow
# -------------------------------

git status
# 1. Check your changes

git add .
# 2. Stage all changes

git commit -m "Updated project"
# 3. Save changes in Git

git push
# 4. Upload changes to GitHub