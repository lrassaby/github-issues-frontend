/* issueView.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'models/issueModel',
  'text!templates/issue/issueTemplate.html',
  'utility'
], function($, _, Backbone, issueModel, issueTemplate, utility){
  return Backbone.View.extend({
    el: $("#issue-root"),
    render: function(){
      this.model.fetch({success: this.fetchSuccess, error: this.fetchError});
    },
    fetchSuccess: function(model, response) {
      var data = {
        model: model,
        _: _,
        utility: utility
      };
      $.when(
        $.getJSON(model.get("comments_url").replace(/\{.*\}/, ""), function(comments) {
          data.comments = comments;
        }),
        $.getJSON(model.get("labels_url").replace(/\{.*\}/, ""), function(labels) {
          data.labels= labels;
        })
      ).then(function() {
        var compiledTemplate = _.template(issueTemplate);
        $("#issue-root").html(compiledTemplate(data));
      });
    },
    fetchError: function (model, response) {
      var error;
      if (response.status == 404) {
        error = "Couldn't find that repository. Check that you put in the right one.";
      } else if (response.status == 403) {
        error = "Access denied. You've probably hit the Github API limit.";
      }
      var compiledTemplate = _.template(issueTemplate);
      $("#issue-root").html(compiledTemplate({error: error}));
    }
  });
});