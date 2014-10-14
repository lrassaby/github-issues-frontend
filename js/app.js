/* app.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function($, _, Backbone, Router){
  return {
    initialize: function(){
      Router.initialize();
    }
  };
});