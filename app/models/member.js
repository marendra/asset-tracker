import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  userEmail: DS.attr('string'),
  userId: DS.attr('string'),
  privilege:DS.attr('string'),
  group:DS.belongsTo('group')
});
