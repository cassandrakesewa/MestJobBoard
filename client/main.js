
Template.registerHelper('things',function(){
  // Array is 'naturally' returned by date created. Now the order's reversed.
  return Things.find().fetch().reverse();
})

Template.form.events({
  'submit form': function (e,t) {

    //Prevent page from reloading
    e.preventDefault();

    thing = {
      email: $("[name='email']").val(),
      jobtitle: $("[name='title']").val(),
      jobtype: $("[name='jobtype']").val(),
      jobsummary: $("[name='summary']").val(),
      joblocation: $("[name='location']").val(),
      contactdetails: $("[name='details']").val(),
      userId: Meteor.userId()
    }

    //Check that 'name' is not an empty string

    $('button').click(function(){
      Things.insert(thing);

    });
    // if (thing.name){

    //   //Insert new doc into 'Things' collection
    //   Things.insert(thing);
    // }

    //reset form
    $('input[type=text]').val('');
  }
});

Template.registerHelper('isOwner',function(){
    return Meteor.userId();
})
