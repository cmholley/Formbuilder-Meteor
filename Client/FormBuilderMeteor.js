var id = "rBiSbpK59wC6736vJ";
Meteor.subscribe("Forms");

  //For testing purposes
  Template.body.helpers({
    Forms: function(){
      return Forms.find();
    }
  })

  Template.hello.events({
    'click button': function() {
      console.log("Hello 1 caught");
      Meteor.call("addForm",{
        title: "test1",
        subtitle: "test1",
        insertionDate: new Date()
       });
      console.log("Hello1 finished")
     }
  })

  Template.hello2.events({
    'click button': function() {
       console.log("Hello 2 caught");
       Meteor.apply("partialUpdateForm", [id, {
        title: "test2"
       }]);
       console.log("Hello 2 finished")
    }
})


