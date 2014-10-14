/* main.js */
/* require.js configuration */
require.config({
    baseUrl: 'js',
    paths: {
        bootstrap: 'vendor/bootstrap.min',
        backbone: 'vendor/backbone-min',
        underscore: 'vendor/underscore-min',
        jquery: 'vendor/jquery.min',
        text: 'vendor/text',
        router: 'router',
        templates: '../templates'
    }
});

require([
    'app',
], function(App){
    App.initialize();
});
