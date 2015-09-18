define([
  'app',
  'backbone'
],
function(app, bb) {

  var Router = Backbone.Router.extend({
    routes: {
      '':               'index',
      'test':           'test',
      'entry':          'entry',
      'dashboard':      'dashboard',
      'form-1':         'form1',
      'form-2':         'form2',
      'logout':         'logout'

      //example of capturing args in routes
      //'issues/:number':     'issueDetail'
    },

    loadModule: function(module){
      app.loadModule(module); 
    },

    index: function() {
      require(['pages/index'], this.loadModule);
    },

    test: function() {
      require(['pages/test'], this.loadModule);
    },

    entry: function() {
      require(['pages/entry'], this.loadModule);
    },

    dashboard: function() {
      require(['pages/dashboard'], this.loadModule);
    },

    form1: function() {
      require(['pages/form-1'], this.loadModule);
    },

    form2: function() {
      require(['pages/form-2'], this.loadModule);
    },

    logout: function(){
      require(['pages/logged-out'], this.loadModule);
    }
  });

  return Router;
});
