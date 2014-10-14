define([
  'jquery',
  'underscore',
  'backbone',
  'models/issueModel'
  ], function($, _, Backbone, issueModel){
    return Backbone.Collection.extend({
      model: issueModel,
      initialize: function(options) {
        this.options = options;
      },
      url: function () {
        return 'https://api.github.com/repos/' + this.options.dev + '/' + this.options.repo + '/issues?page=' + this.options.page + '&per_page=' + this.options.perpage;
      },
      parse: function(resp, xhr) {
        return resp;
      }
    });
  }
);