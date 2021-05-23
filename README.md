# AS207111 Whois for JavaScript

## Installation

The recommended way to install AS207111 Whois is through NPM.

```bash
npm install @as207111/whois --save
```

## Getting Started

First, request a free api access token from https://whois.as207111.net to get access to all api features, including all premium features, like privacy lookups.

Then initialize a new `Client` with your API Access Token and call the `lookup` method to lookup any IPv4 or IPv6 address.

```javascript
const whois = require('@as207111/whois');

// You can specify config defaults that will be applied to every request.
// whois.defaults.accessToken = 'your-api-access-token';

whois
    .lookup({ip_address: '2001:67c:770::'}, {
        // You can override defaults in the options parameter (optional)
        accessToken: 'your-api-access-token',
    })
    .then(response => console.log(response.data));
```

## API Response Reference

```json
{
  "ip": "2001:67c:770::1",
  "city": "Cologne",
  "postal": "50733",
  "region": "NW",
  "country": "DE",
  "lat": 50.9655,
  "lon": 6.95378,
  "timezone": "Europe/Berlin",
  "asn": {
    "asn": 207111,
    "name": "PREUSS-AS",
    "isp": "Rene Preuss",
    "network": "2001:67c:770::/48"
  },
  "company": {
    "name": "Rene Preuss"
  },
  "privacy": {
    "proxy": false,
    "hosting": false,
    "mobile": false
  }
}
```