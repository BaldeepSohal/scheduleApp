'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Staff, app, auth, database) {

  app.get('/staff/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/staff/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/staff/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/staff/example/render', function(req, res, next) {
    Staff.render('index', {
      package: 'staff'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
