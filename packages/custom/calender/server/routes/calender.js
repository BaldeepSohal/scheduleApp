'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Calender, app, auth, database) {

  app.get('/calender/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/calender/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/calender/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/calender/example/render', function(req, res, next) {
    Calender.render('index', {
      package: 'calender'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
