/**
 * Models
 */

DS.RESTAdapter.reopen({
    host: 'http://localhost:3000/restaurant'
});

// notice we extend the RESTSerializer, not Serializer!
App.ApplicationSerializer = DS.RESTSerializer.extend({
    primaryKey: '_id' 
});

App.Table = DS.Model.extend({
  table: DS.attr('number'),
  tabs: DS.belongsTo('tab', { async: true})
});

App.Tab = DS.Model.extend({
  tab: DS.attr('number'),
  tabItems: DS.hasMany('tabitem', { async: true}),
  cents: function() {
    return this.get('tabItems').getEach('cents').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('tabItems.@each.cents')
});

App.Tabitem = DS.Model.extend({
  tabitem: DS.attr('number'),
  cents: DS.attr('number'),
  foods: DS.belongsTo('food', { async: true})
});

App.Food = DS.Model.extend({
  food: DS.attr('number'),
  name: DS.attr('string'),
  image_url: DS.attr('string'),
  cents: DS.attr('number')
});
