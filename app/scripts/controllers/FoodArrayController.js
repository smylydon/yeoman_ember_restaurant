
App.FoodController = Ember.ArrayController.extend({
	needs: ['table'],

	actions: {
		addFood: function (food) {
			var model = this.get('controllers.table').get('model'),
				tabItems = model.get('tabs').get('tabitems');
			tabItems.pushObject(this.store.createRecord('tabitem',{
				foods: food,
				cents: food.get('cents')
			}));
		}
	}
});