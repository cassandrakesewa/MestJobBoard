AutoForm.hooks({
  insertJobForm: {
    formToDoc: function(doc, result, docId) {
      doc.jobId = Router.current().params._id
      return doc
    }
  }
});