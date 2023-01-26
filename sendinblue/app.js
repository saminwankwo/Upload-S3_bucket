const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';

let apiInstance = new SibApiV3Sdk.TransactionalSMSApi();

let sendTransacSms = new SibApiV3Sdk.SendTransacSms();

sendTransacSms = {
    "sender":"credib",
    "recipient":"+2348058643829",
    "content":"You dy whine me ooo",
};

apiInstance.sendTransacSms(sendTransacSms).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, function(error) {
  console.error(error);
});