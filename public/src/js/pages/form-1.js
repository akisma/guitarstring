/* FORM 1 */

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
        main: "#template-form1" 
      }
    });

    view = new viewClass();

  
    return {
      view: view,
      name: 'form-1' 
    };
  }
);