
App.FoodController = Ember.ArrayController.extend({
	actions: {
		addFood: function (food) {
			var table = this.controllerFor('table').get('model'),
				tabItems = table.get('tabs.tabItems');

			tabItems.pushObject(this.store.createRecord('tabitem',{
				foods: food,
				cents: food.get('cents')
			}));
		}
	}
});