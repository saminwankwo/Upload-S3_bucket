console.log('you like this')

var sid = "ACda088a5d6ee8a59c0907ee65d0d35807";
var auth_token = "3e9f6ba334d48041b5f76a97cca1fbbe";

var client = require("twilio")(sid, auth_token);

// twilio.messages
//   .create({
//     from: "+19453457349",
//     to: "+2347085515609",
//     body: "this is a testing message",
//   })
//   .then(function(res) {console.log("message has sent!"),  console.log(message => console.log(message.sid))})
//   .catch(function(err)  {
//     console.log(err);
//   });


client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19453457349',
     to: '+2348058643829'
   })
  .then(message => console.log(message.sid));
