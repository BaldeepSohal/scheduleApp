'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var InitialSettings = new Module('initial-settings');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
InitialSettings.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  InitialSettings.routes(app, auth, database);

  //// Set views path, template engine and default layout
  //app.set('views', __dirname + '/server/views');

  //We are adding a link to the main menu for all authenticated users
  //InitialSettings.menus.add({
  //  title: 'initialSettings example page',
  //  link: 'initialSettings example page',
  //  roles: ['authenticated'],
  //  menu: 'main'
  //});
  
  InitialSettings.aggregateAsset('css', 'initialSettings.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    InitialSettings.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    InitialSettings.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    InitialSettings.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return InitialSettings;
});
