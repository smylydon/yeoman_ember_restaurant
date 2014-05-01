App.ApplicationRoute = Ember.Route.extend({
	setupController: function() {
		this.controllerFor("food").set("model", this.store.find('food'));
	}
});