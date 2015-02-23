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

Router.route('/insertJobForm/:_id', function(){
  this.render('insertJobForm');
}, {
  name: 'insertJobForm',
  data: function(){
    return {thing: Things.findOne(this.params._id)}
  }


});