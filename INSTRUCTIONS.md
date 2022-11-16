## Create database and table

Create a new database called `foresight` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Git Branching Cheatsheet

- `git checkout main` - make sure you're on the main branch
- `git pull origin main` - make sure you're up to date
- `git branch FEATURE-NAME` - create a branch (replace FEATURE-NAME with your feature)
- `git branch` - display the branch you're currently on
- `git checkout FEATURE-NAME` - switch to the branch (e.g. `git checkout main` to switch to main branch)

- commit as many times as you need as you build your feature
- `git add .`
- `git commit -m "message"`

- push your feature when you are ready for review
- `git push origin FEATURE-NAME`
- navigate to repo on GitHub and create pull request
- base: main <- compare: FEATURE-NAME
- click `create pull request`

- notify team so somebody can review and merge!