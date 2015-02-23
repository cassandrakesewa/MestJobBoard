Things = new Mongo.Collection('things');
ApplyJobs = new Mongo.Collection("applyjobs");

ApplyJobs.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Fullname",
    max: 100
  },
  email: {
    type: String,
    label: "Email",
    autoform: {
      afFieldInput:{
        type:'email'
      }
    }
  },
  education: {
    type: String,
    label: "Education Level",
    max: 500
  },
  jobTitle: {
    type: String,
    label: "Job Title",
    max: 500
  },
  experience: {
    type: String,
    label: "Job Experience",
    max: 3000,
    autoform: {
      afFieldInput:{
        type:'textarea',
        col: 7
      }
    }
  },
  lastCheckedOut: {
    type: Date,
    label: "Date",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary about yourself",
    optional: true,
    max: 1000,
    autoform: {
      afFieldInput:{
        type:'textarea',
        col: 7
      }
    }
  }
}));