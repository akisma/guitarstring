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

        /* UTTER BULLSHIT TO KEEP BACKEND GOING, DON'T DO THIS HACKY STUFF */
        function showResults(stuff){
          $('.js-results').empty();
          $('.js-results').html(stuff);
        }

        /* REALLY LAME QUICK AND DIRTY LINK INIT */

        $('.js-test-login').on('click', function(e){
          e.preventDefault();

          $.ajax({
            type: 'POST',
            url: '/api/login', //url
            data: {
              username:   'yermom',
              pw:     'yerdad'
            }, 
            dataType: 'json' //self-explanatory
          }).success(function(resp){
            showResults('successfully logged in');
          })
          .fail(function(){
            showResults('login did not work');
          });
        });

        $('.js-test-logout').on('click', function(e){
          e.preventDefault();

          $.get('/api/logout')
            .success(function(resp){
              showResults('successfully logged out');
            })
            .fail(function(){
              showResults('logout did not work');
            });
        });

        $('.js-test-form1-submit').on('click', function(e){
          e.preventDefault();

          $.ajax({
            type: 'POST',
            url: '/api/form1/submit', //url
            data: {
              cats: 33,
              dog: 'rottweiler'
            }, //data
            dataType: 'json' //self-explanatory
          }).success(function(resp){
            showResults('form1 successfully submitted');
          })
          .fail(function(resp){
            showResults('form1 submit did not work, check console');
          });
        });

        $('.js-test-form2-submit').on('click', function(e){
          e.preventDefault();

          $.ajax({
            type: 'POST',
            url: '/api/form2/submit', //url
            data: {
              cats: 1,
              dog: 'golden retriever'
            }, //data
            dataType: 'json' //self-explanatory
          }).success(function(resp){
            showResults('form2 successfully submitted');
          })
          .fail(function(resp){
            showResults('form2 submit did not work, check console');
          });
        });

        $('.js-test-form1-get').on('click', function(e){
          e.preventDefault();

          $.get('/api/form1')
            .success(function(resp){
              showResults('form1 GET worked!');
              console.log(resp);
            })
            .fail(function(){
              showResults('form1 GET did not work, see console');
            });
        });

        $('.js-test-form2-get').on('click', function(e){
          e.preventDefault();

          $.get('/api/form2')
            .success(function(resp){
              showResults('form2 GET worked!');
              console.log(resp);
            })
            .fail(function(){
              showResults('form2 GET did not work, see console');
            });;
        });
        
      },

      templates: {
        main: "#template-index"
      }
    });

    view = new viewClass();

  
    return {
      view: view,
      name: 'index'
    };
  }
);