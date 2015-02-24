Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function(){
  this.render('index');
}, {
  name: 'index'

});

Router.route('/aboutme', function(){
  this.render('aboutme');
}, {
  name: 'aboutme'

});

Router.route('/jobs', function(){
  this.render('jobs');
}, {
  name: 'jobs',
  data: function(){
    return {thing: Things.find().fetch()}
  }

});

Router.route('/insertJobForm/:_id', function(){
  this.render('insertJobForm');
}, {
  name: 'insertJobForm',
  data: function(){
    return {thing: Things.findOne(this.params._id)}
  }


});

Router.route('/jobs/:_id', function(){
  this.render('jobs');
}, {
  name: 'myJobs',
  data: function(){
    console.log(Things.find({userId: this.params._id}).fetch());
    return {thing: Things.find({userId: this.params._id}).fetch()}
  }

});