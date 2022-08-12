'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Calender = new Module('calender');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Calender.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Calender.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Calender.menus.add({
    title: 'Calender',
    link: 'calender example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Calender.aggregateAsset('css', 'calender.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Calender.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Calender.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Calender.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Calender;
});
