App.ApplicationRoute = Ember.Route.extend({
	setupController: function() {
		this.controllerFor("food").set("model",App.Food.find());
	}
});