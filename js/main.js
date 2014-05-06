require.config({

  paths: {
    'jquery' : 'libs/jquery-1.11.0.min',
    'underscore' : 'libs/underscore.js',
    'backbone' : 'libs/backbone.js',
    'bootstrap' : 'libs/bootstrap.js'
  },

  shim: {
    'underscore': {
        exports: '_'
    },

    'backbone' : {
      deps: [
        'underscore',
        'jquery'
      ],
      exports : 'Backbone'
    },

    'bootstrap': {
      deps: [
        'jquery'
      ]
    }
  }


});


require([
  'backbone'
], function (Backbone) {
  'use strict';

  console.log(Backbone);

});
