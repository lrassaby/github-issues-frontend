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
      var compiledTemplate = _.template(issueTemplate);
      $("#issue-root").html(compiledTemplate(data));
    },
    fetchError: function (model, response) {
      var data = {
        error: "Couldn't pull that repository. Check that you put in the right one."
      };
      var compiledTemplate = _.template(issueTemplate);
      $("#issue-root").html(compiledTemplate(data));
    }
  });
});