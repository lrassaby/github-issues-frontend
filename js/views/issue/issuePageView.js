/* issuePageView.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/issueModel',
  'views/issue/issueView',
  'text!templates/issue/issuePageTemplate.html'
  ], function($, _, Backbone, issueModel, issueView, issuePageTemplate){
    return Backbone.View.extend({
      el: $("#main"),
      initialize: function(options) {
        this.options = options;
      },
      render: function(){
        this.$el.html(issuePageTemplate);

        $("#page-left").click(function() {
          console.log("clicked left");
        });
        $("#page-right").click(function() {
          console.log("clicked right");
        });

        var model = new issueModel(this.options);
        var view = new issueView({model: model});

        view.render();
      }
    });
  });