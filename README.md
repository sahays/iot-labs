# iot-labs
```
git clone https://github.com/sahays/iot-labs.git
```

after cloning run the following in labs folder to get the node modules
```
npm install
```

## reset to stock Yokto Linux
https://software.intel.com/en-us/flashing-firmware-on-your-intel-edison-board-mac-os-x


## upgrade node
### opkg commands
```
opkg install nodejs (doesn’t work; says latest is installed)
opkg upgrade (not relevant)
```

### by force
```
wget https://nodejs.org/dist/v0.12.5/node-v0.12.5.tar.gz --no-check-certificate 
tar xvf node-v0.12.5.tar.gz  
cd node-v0.12.5  
./configure  
make  
make install  
```

## get root CA certificate
```
curl https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem > ~/aws_certs/rootCA.pem
```

## install aws-sdk
```
npm install aws-sdk
npm install aws-iot-device-sdk
```

## create client certificates for AWS IoT
http://docs.aws.amazon.com/iot/latest/developerguide/secure-communication.html


## Intel Edison
### drivers
https://software.intel.com/en-us/iot/hardware/edison/downloads


### code samples
https://software.intel.com/en-us/blogs/2015/11/04/announcing-18-new-how-to-intel-iot-code-samples

### prepare for AWS IoT
```
$ curl https://bootstrap.pypa.io/ez_setup.py -o - | python
$ easy_install pip
$ pip install awscli
```
then
```
aws configure 
```

