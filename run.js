var Git = require('nodegit');
var os = require('os');

Git.Clone('https://github.com/webjay/nodegit-heroku.git', os.tmpdir() + '/' + process.hrtime()[0])
.then(function (repo) {
  console.log(repo);
})
.catch(console.error);
