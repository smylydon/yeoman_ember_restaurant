
App.FoodController = Ember.ArrayController.extend({
	actions: {
		addFood: function (food) {
			var table = this.controllerFor('table').get('model'),
				tabItems = table.get('tabs.tabItems');
				console.log('food:',table);
			tabItems.createRecord({
				food: food,
				cents: food.get('cents')
			});
		}
	}
});