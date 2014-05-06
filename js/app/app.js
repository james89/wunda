//module definitions

define([
  'jquery',
], function ($) {

  'use strict';

  var id = 'content';

  // getter function to access id
  var getId = function () {
    return id;
  }

  var initialize = function () {
    $('body').append('<div id="'+id+'"></div>');
  }

  return {
    initialize: initialize,
    getId: getId
  }

});
