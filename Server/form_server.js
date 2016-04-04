  Meteor.publish("Forms", function(){
    return Forms.find();
  });

//Methods relating to manipulation of Form Objects
Meteor.methods({
  //Create new form. Simple method, just pass in the form object. 
  addForm: function(form){
    Forms.insert(form);
  },
  //Delete existing form. Again, simple, just pass in the id to delete
  deleteForm: function(id){
    Forms.remove(id);
  },
  /*Partial update of form object. The idea here is that
  a javascript object representing the changes to the form
  is passed in, along with the form ID. The changed fields are
  then merged with the existing object, and the new object is 
  updated in the database. This can be used to add new fields,
  or update existing ones.*/
  partialUpdateForm: function(id, formChanges){
    var existingForm = Forms.findOne(id);
    
    for (property of Object.keys(formChanges))
      tempForm[property] = formChanges[property];
    
    Forms.update(tempForm);
    },
  /*Complete update of an existing form object. Very simple method,
   simply replaces the existing form object in the database with a new
   form object. NOTE: This method DOES NOT UPSERT. It is specifically 
   used to update an existing form. If the form does not exist, an exception
   will be thrown.*/
  fullUpdateForm: function(id, form){
    Forms.update(id, form);
  }

});