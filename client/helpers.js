
Template.registerHelper('things',function(){
  // Array is 'naturally' returned by date created. Now the order's reversed.
  return Things.find().fetch().reverse();
})



Template.registerHelper('isOwner',function(){
  return Meteor.userId();
})

Template.registerHelper('getImageUrl', function(_id){
  return Images.findOne(_id).url();
})