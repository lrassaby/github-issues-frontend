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
      render: function(){
        this.$el.html(issuesListPageTemplate);

        var issuesOnPage = new issuesCollection();
        var list = new issuesListView({ collection: projectsCollection});

        list.render();
      }
    });
  });