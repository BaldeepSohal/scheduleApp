'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Business, app, auth, database) {

  app.get('/business/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/business/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/business/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/business/example/render', function(req, res, next) {
    Business.render('index', {
      package: 'business'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
