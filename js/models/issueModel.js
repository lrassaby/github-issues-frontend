/* issueModel.js */
define([
  'underscore',
  'backbone'
  ], function(_, Backbone) {
    return Backbone.Model.extend({
        initialize: function(options) {
            this.options = options;
        },
        url : function() {
            return 'https://api.github.com/repos/' + this.options.dev + '/' + this.options.repo + '/issues/' + this.options.number;
        },
        parse: function(resp, xhr) {
            return resp;
        }
    });
});
