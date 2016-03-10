
Meteor.methods({
  addForm: function(form){
  	Forms.insert({
    	name: ,
       	subtitle: "Testing",
       	insertionDate: new Date(),
    });
  },
  deleteForm: function(id){
  	Forms.remove(id);
  },
  updateForm: function(id, form){

  }
});
