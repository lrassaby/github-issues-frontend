/* issuesListView.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/issueModel',
  'collections/issuesCollection',
  'text!templates/issues-list/issuesListTemplate.html',
  'utility'
], function($, _, Backbone, issueModel, issuesCollection, issuesListTemplate, utility){
  return Backbone.View.extend({
    el: $("#issues-list-root"),
    render: function(){
      this.collection.fetch({success: this.fetchSuccess, error: this.fetchError});
    },
    fetchSuccess: function(collection, response) {
      var data = {
        collection: collection,
        _: _,
        utility: utility
      };
      var compiledTemplate = _.template(issuesListTemplate);
      $("#issues-list").html(compiledTemplate(data));
    },
    fetchError: function (collection, response) {
      var data = {
        error: "Couldn't pull that repository. Check that you put in the right one."
      };
      var compiledTemplate = _.template(issuesListTemplate);
      $("#issues-list").html(compiledTemplate(data));
    }
  });
});