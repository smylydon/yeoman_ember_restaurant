Ember.Handlebars.registerBoundHelper('money' , function(value){
	return (value/100).toFixed(2);
});