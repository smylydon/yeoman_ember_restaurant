App.TablesRoute = Ember.Route.extend({
	model: function () {
		return App.Table.find();
	}
});