Meteor.publish("Forms", function(){
    return Forms.find();
  });

Meteor.publish("Responses", function(){
    return Responses.find();
  });