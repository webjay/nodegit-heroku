# nodegit-heroku

Example of problem getting nodegit installed on Heroku:

Error: GLIBCXX_3.4.20 not found
Error: Cannot find module '../build/Debug/nodegit.node'

- `git clone https://github.com/webjay/nodegit-heroku.git && cd nodegit-heroku`
- `brew install heroku-toolbelt`
- `heroku apps:create --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git`
- `git push heroku master`
- `heroku logs`

## Solution

https://github.com/nodegit/nodegit/issues/845

The solution was to `heroku buildpacks:add --index 1 https://github.com/ddollar/heroku-buildpack-apt` and adding this file:
https://github.com/webjay/nodegit-heroku/blob/master/Aptfile

This helped on an existing app:
https://github.com/heroku/heroku-repo
