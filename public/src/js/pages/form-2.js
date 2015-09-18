/* FORM 2 */

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

        
        
      },

      templates: {
        main: "#template-form2" 
      }
    });

    view = new viewClass();

  
    return {
      view: view,
      name: 'form-2' 
    };
  }
);