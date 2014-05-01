// Models
DS.RESTAdapter.reopen({
    host: 'http://localhost:3000/restaurant'
});

// notice we extend the RESTSerializer, not Serializer!
App.ApplicationSerializer = DS.RESTSerializer.extend({
    primaryKey: '_id' // you get it...
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
/*
App.Table.FIXTURES = [{
  id: 1,
  tab: 1
}, {
  id: 2,
  tab: 2
}, {
  id: 3,
  tab: 3
}, {
  id: 4,
  tab: 4
}, {
  id: 5,
  tab: 5
}, {
  id: 6,
  tab: 6
}];

App.Tab.FIXTURES = [{
  id: 1,
  tabItems: []
}, {
  id: 2,
  tabItems: []
}, {
  id: 3,
  tabItems: []
}, {
  id: 4,
  tabItems: [400, 401, 402, 403, 404]
}, {
  id: 5,
  tabItems: []
}, {
  id: 6,
  tabItems: []
}];

App.TabItem.FIXTURES = [{
  id: 400,
  cents: 1500,
  food: 1
}, {
  id: 401,
  cents: 300,
  food: 2
}, {
  id: 402,
  cents: 700,
  food: 3
}, {
  id: 403,
  cents: 950,
  food: 4
}, {
  id: 404,
  cents: 2000,
  food: 5
}];

App.Food.FIXTURES = [{
  id: 1,
  name: 'Pizza',
  imageUrl: 'images/pizza.png',
  cents: 1500
}, {
  id: 2,
  name: 'Pancakes',
  imageUrl: 'images/pancakes.png',
  cents: 300
}, {
  id: 3,
  name: 'Fries',
  imageUrl: 'images/fries.png',
  cents: 700
}, {
  id: 4,
  name: 'Hot Dog',
  imageUrl: 'images/hotdog.png',
  cents: 950
}, {
  id: 5,
  name: 'Birthday Cake',
  imageUrl: 'images/birthdaycake.png',
  cents: 2000
}];
*/