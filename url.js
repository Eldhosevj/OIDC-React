const mkcert = require('mkcert');
const b=async()=>{
const ca = await mkcert.createCA({
    organization: 'Hello CA',
    countryCode: 'NP',
    state: 'Bagmati',
    locality: 'Kathmandu',
    validityDays: 365
  });
  
  // then create a tls certificate
  const cert = await mkcert.createCert({
    domains: ['127.0.0.1', 'localhost'],
    validityDays: 365,
    caKey: ca.key,
    caCert: ca.cert
  });
  
  console.log(cert.key, cert.cert); // certificate info
  console.log(`${cert.cert}\n${ca.cert}`);
}
b()