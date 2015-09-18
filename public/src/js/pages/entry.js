/* ENTRY */

define(
  [
    'app',
    'generics/generic-page-view',
    'jquery'
  ],
  function(app, gpV, $){
    var view,
        viewClass;

    viewClass = gpV.extend({
      render: function(){
        gpV.prototype.render.call(this);

        //need different ops here to change btwn signup and login
        
      },

      templates: {
        main: "#template-entry" 
      }
    });

    view = new viewClass();

  
    return {
      view: view,
      name: 'entry' 
    };
  }
);