Things = new Mongo.Collection('things');
ApplyJobs = new Mongo.Collection("applyjobs");

Things.attachSchema(new SimpleSchema({
  jobtitle: {
    type: String,
    label: "Job Title",
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
  jobtype: {
    type: String,
    label: "Job Type",
    max: 200
  },
  
  jobsummary: {
    type: String,
    label: "Job Summary",
    max: 3000,
    autoform: {
      afFieldInput:{
        type:'textarea',
        col: 7
      }
    }
  },
  joblocation: {
    type: String,
    label: "Job Location",
    max: 200
  },
  
  contactdetails: {
    type: Number,
    label: "Contact"
  },
  userId: {
    type: String,
    autoValue: function() {
      if (this.isInsert && Meteor.user()) {
        return Meteor.userId();
      } else{
        this.unset();
      }
    },
    autoform: {
      omit: true
    }
  }

}));


ApplyJobs.attachSchema(new SimpleSchema({

  name: {
    type: String,
    label: "Fullname",
    max: 100
  },

  gender: {
    type: String,
    allowedValues: ['female', 'male'],
    autoform: {
      options: [
      {label: "Female", value: "female"},
      {label: "Male", value: "male"}
      ]
    }
  },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images'
      }
    },
    label: 'Choose Image'
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
  },

  jobId: {
    type: String,
    autoform:{
      omit: true
    }
  }

}));