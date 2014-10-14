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
        var basepath = this.options.dev + "/" + this.options.repo;
        var currpage = parseInt(this.options.page, 10);
        $("#page-left").click(function() {
          if (currpage > 1) {
            window.location = "/#/" + basepath + "?page=" + (currpage-1);
          }
        });
        $("#page-right").click(function() {
            window.location = "/#/" + basepath + "?page=" + (currpage+1);
        });
        $("#repo-input").val(this.options.dev + "/" + this.options.repo);
        $('#repo-input').keypress(function(e){
            if(e.which == 13) {
              $('#repo-load').click();//Trigger search button click event
            }
        });
        $("#repo-load").click(function () {
          var input_value = $("#repo-input").val();
          window.location = "/#/" + input_value;
        });

        var issueList = new issuesCollection(this.options);
        var list = new issuesListView({collection: issueList});

        list.render();
      }
    });
  });