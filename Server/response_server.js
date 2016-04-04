//Methods relating to manipulation of Response Objects
Meteor.methods({
  //Create new response. Simple method, just pass in the response object. 
  addResponse: function(response){
    Responses.insert(response);
  },
  //Delete existing response. Again, simple, just pass in the id to delete
  deleteResponse: function(id){
    Responses.remove(id);
  },
  /*Partial update of response object. The idea here is that
  a javascript object representing the changes to the response
  is passed in, along with the response ID. The changed fields are
  then merged with the existing object, and the new object is 
  updated in the database. This can be used to add new fields,
  or update existing ones.*/
  partialUpdateResponse: function(id, responseChanges){
    var existingResponse = responseChanges.findOne(id);
    
    for (property of Object.keys(responseChanges))
      tempResponse[property] = responseChanges[property];
    
    Responses.update(tempResponse);
    },
  /*Complete update of an existing response object. Very simple method,
   simply replaces the existing response object in the database with a new
   response object. NOTE: This method DOES NOT UPSERT. It is specifically 
   used to update an existing response. If the response does not exist, an exception
   will be thrown.*/
  fullUpdateResponse: function(id, response){
    Responses.update(id, response);
  }

});