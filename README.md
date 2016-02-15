# nodegit-heroku

Example of problem getting nodegit installed on Heroku

- `git clone https://github.com/webjay/nodegit-heroku.git && cd nodegit-heroku`
- `brew install heroku-toolbelt`
- `heroku apps:create --buildpack https://github.com/heroku/heroku-buildpack-nodejs.git`
- `git push heroku master`
- `heroku logs`
