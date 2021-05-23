const whois = require('./whois.js');

whois
    .lookup({ip_address: '2001:67c:770::'})
    .then(response => console.log(response.data));