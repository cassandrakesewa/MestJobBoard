AutoForm.hooks({
  jobEdit: {
    onSuccess: function(operation, result, template) {
      Router.go('jobs');
    }
  }
});