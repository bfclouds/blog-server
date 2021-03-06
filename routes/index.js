// var express = require('express');
// var router = express.Router();
// const articleRouter = require('./article.router');
// const articleNumInfoRouter = require('./articleNumInfo.router');

var fs = require('fs');
var path = require('path');

function register(app, services) {
  let fnames = fs.readdirSync(__dirname);
  fnames.forEach(function (fname) {
    if (fname !== 'index.js' && fname.endsWith('.js')) {
      // var prefix = path.basename(fname, '.js');
      var realname = path.resolve(__dirname, fname);
      console.log(fname, realname)
      try {
        require(realname)(app, services);
        //`/${prefix}`,
      } catch (err) {
        console.error(`routes init: require('${fname}') failed with error:`, err);
      }
    }
  });
}

module.exports = register;
// 
// module.exports = {articleRouter, articleNumInfoRouter}