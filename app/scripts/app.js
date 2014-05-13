
var App = window.App = Ember.Application.create();

/* Order and include as you please. */
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');    
require('scripts/views/*');   

App.Router.map(function () {
  this.resource('tables',function(){
  	this.resource('table',{ path:':table_id'});
  });
});



