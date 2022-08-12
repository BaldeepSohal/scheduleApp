'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(InitialSettings, app, auth, database) {

  app.get('/initialSettings/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/initialSettings/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/initialSettings/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/initialSettings/example/render', function(req, res, next) {
    InitialSettings.render('index', {
      package: 'initial-settings'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
