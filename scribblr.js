this.Documents = new Mongo.Collection("document");
if (Meteor.isClient) {
  Template.editor.helpers({
      docid: function(){
          return Documents.findOne()._id;
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
      if(!Documents.findOne()){//no documents yet!
          Documents.insert({title:"my new document"});
      }
  });
}
