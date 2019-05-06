import { TellEvents } from 'meteor/igoandtell:tell-events-collection';

Meteor.methods({
  
  closeTellEvent(QrCode){    
    TellEvents.updateOne({code:QrCode},{status:2});
  }
});
