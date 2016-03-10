Meteor.publish("forms", function(){
  	return Resolutions.find();
  });