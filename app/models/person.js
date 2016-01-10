import DS from 'ember-data';

var p = DS.Model.extend({
  name: DS.attr('string'),
  todos: DS.hasMany('todos', { async: true })
});



export default p;