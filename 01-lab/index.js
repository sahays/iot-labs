var awsIot = require('aws-iot-device-sdk');
var device = awsIot.device({
  "host": "A2AKOYC5UU155B.iot.eu-west-1.amazonaws.com",
  "port": 8883,
  "clientId": "demo-iot",
  "thingName": "demo-iot",
  "caCert": "rootCA.pem",
  "clientCert": "65deea1442-certificate.pem.crt",
  "privateKey": "65deea1442-private.pem.key",
  "region": "eu-west-1"
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
    device.publish('demo-iot', JSON.stringify(message));
    console.log('Pushed message to Topic...');
    console.log('Success!');
    process.exit();
  }, 2500);
});
