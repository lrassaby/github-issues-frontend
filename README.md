#Github Issue Frontend
This viewer of Github issues uses the Backbone.js framework to create an entirely client-side web app with paths and history. Though I'm usually a server side guy, it appealed to me to create a client-side web app that looks like a server side one. 

`rails/rails` is the defualt repo, but others can also be used by entering them at the top of the app.

To run, simply run 
	
	python -m SimpleHTTPServer
	
when you're in the root directory (or start a web server any other way you like. A live demo will be available at 
	
	http://lrassaby.github.io/github-issues-frontend
	
	
Technologies
---
- Backbone for routing, views, etc.
- Underscore.js for templates
- Bootstrap
- JQuery
- Require.js and the Text.js plugin
- FontAwesome

Still In Progress
---
- Better styling for the columned layout, ideally using Less or Sass
- Better rendering of markdown-esque github syntax
- Improving front page layout

Tests are in the "Test" directory. 

Licensed under GNU GPL.