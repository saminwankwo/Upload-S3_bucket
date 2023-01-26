
// const sdk = require('api')('@smslive247api/v1.0#2vmizjp3blaut3hvq');

// sdk.sendSmsMessage(
//     '{"senderID":"thsin","messageText":"Message wey i won try","mobileNumber":"08058643829","route":"string"}', {accept: 'application/json'})
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));


const sdk = require('api')('@smslive247api/v1.0#2vmizjp3blaut3hvq');


sdk.sendSmsMessage('{"senderID":"Credib","messageText":"Your verification code is 98948","mobileNumber":"07085515609","route":"none"}', {accept: 'application/json'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
