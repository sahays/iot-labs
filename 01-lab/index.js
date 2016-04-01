var awsIot = require('aws-iot-device-sdk');
var device = awsIot.device({
  "host": "A2AKOYC5UU155B.iot.us-east-1.amazonaws.com",
  "port": 8883,
  "clientId": "heat-sensor",
  "thingName": "heat-sensor",
  "caCert": "./rootCA.pem",
  "clientCert": "./24f6d7c60e-certificate.pem.crt",
  "privateKey": "./24f6d7c60e-private.pem.key"
});
var message = {
  val1: "Value 1",
  val2: "Value 2",
  val3: "Value 3",
  message: "Test Message"
};
device.on('connect', function() {
  console.log('Connected!');
  setTimeout(function() {
    device.publish('PubSubToAnyTopic', JSON.stringify(message));
    console.log('Pushed message to Topic...');
    console.log('Success!');
    process.exit();
  }, 2500);
});
