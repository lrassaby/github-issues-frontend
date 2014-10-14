/* router.js */
define([
  'jquery',
  'underscore',
  'backbone',
  'views/issues-list/issuesListPageView',
  'views/issue/issuePageView'
  ], function($, _, Backbone, issuesListPageView, issuePageView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        ":dev/:repo/:id": "getIssue",
        ":dev/:repo?page=:page": "getPage",
        ":dev/:repo": "getPage",
        "*actions": "defaultRoute" // Backbone will try match the route above first
      }
    });
    return {
      initialize: function() {
        var app_router = new AppRouter();
        app_router.on('route:getPage', function (dev, repo, page) {
          page = page || 1;
          perpage = 25;

          var listView = new issuesListPageView({dev: dev, repo: repo, page: page, perpage: perpage});
          listView.render();
        });
        app_router.on('route:getIssue', function (dev, repo, id) {
          alert("Get issue number " + id + " from " + repo);
        });
        app_router.on('route:defaultRoute', function (actions) {
          window.location = "/#/rails/rails";
        });
        // Start Backbone history for bookmarkable URL's
        Backbone.history.start();
      }
    };
  }
);