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

Router.route('/jobs/:_id/edit',function(){
  this.render('jobEdit');
},{
  name: 'jobEdit',
  data: function(){
    var _id = this.params._id;
    return {
      thing: Things.findOne(_id)
    }
  }
});

Router.route('/jobs/:_id/appliedjobs', function(){
  this.render('applicants');
}, {
  name: 'applicants',
  data: function(){
    var _id = this.params._id;
    console.log(ApplyJobs.find({id: _id}).fetch())
    return {
      applyjob: ApplyJobs.find({jobId: _id}).fetch()

    }
  }

});


// Router.route('/applyjobs', function(){
//   this.render('applicants');
// }, {
//   name: 'applicants',
//   data: function(){
//     return {applyjob: ApplyJobs.find().fetch()}
//   }

// });