/* issuesListPageView.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/issueModel',
  'collections/issuesCollection',
  'views/issues-list/issuesListView',
  'text!templates/issues-list/issuesListPageTemplate.html'
  ], function($, _, Backbone, issueModel, issuesCollection, issuesListView, issuesListPageTemplate){
    return Backbone.View.extend({
      el: $("#main"),
      initialize: function(options) {
        this.options = options;
      },
      render: function(){
        this.$el.html(issuesListPageTemplate);

        var issueList = new issuesCollection(this.options);
        var list = new issuesListView({collection: issueList});

        list.render();
      }
    });
  });