App.TablesRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('table');
	}
});
/*
App.TableRoute = Ember.Route.extend({
	
	model: function (params) {
		return this.store.find('table', params.table_id);
	}
	
});
*/