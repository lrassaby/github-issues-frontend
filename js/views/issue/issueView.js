/* issuesListView.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/issueModel',
  'collections/issuesCollection',
  'text!templates/issue/issueTemplate.html'

], function($, _, Backbone, issueModel, issuesCollection, issueTemplate){
  return Backbone.View.extend({
    el: $("#issues-list"),
    render: function(){
      this.collection.fetch();
      var data = {
        issues: this.collection.models,
        _: _
      };

      var compiledTemplate = _.template(projectsListTemplate, data);
      $("#projects-list").html(compiledTemplate);
    }
  });
});