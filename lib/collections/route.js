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