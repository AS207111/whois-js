# AS207111 Whois for JavaScript

<a href="https://www.npmjs.com/package/@as207111/whois"><img src="https://img.shields.io/npm/dt/@as207111/whois" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/@as207111/whois"><img src="https://img.shields.io/npm/v/@as207111/whois" alt="Latest Stable Version"></a>
<a href="https://www.npmjs.com/package/@as207111/whois"><img src="https://img.shields.io/npm/l/@as207111/whois" alt="License"></a>
<a href="https://ghostzero.dev/discord"><img src="https://discordapp.com/api/guilds/590942233126240261/embed.png?style=shield" alt="Discord"></a>

Geolocation, Proxy, VPN or Tor exit address detection, for free.

AS207111 provides a free Whois service for content customization, advertising, digital rights management, compliance, fraud & proxy detection, security and more.

You will always have the most accurate location data available for every API request, without having to worry about maintaining a local database. For Proxy, VPN or Tor exit address detection, we use machine learning & probability theory techniques using large datasets from different sources with 11,500+ networks from 2,200+ privacy providers.

## Installation

The recommended way to install AS207111 Whois is through NPM.

```bash
npm install @as207111/whois --save
```

## Getting Started

First, request a free api access token from https://whois.as207111.net to get access to all api features, including all premium features, like privacy lookups.

Then initialize a new client with your API Access Token and call the `lookup` method to lookup any IPv4 or IPv6 address.

> We recommend using the client only server-side, so that your API access token is not exposed.

```javascript
import {Client} from "@as207111/whois";

// instantiate a new api client with your api acces token
const client = new Client("xxx|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

// lookup a given ipv4 or ipv6 address
const response = await client.lookup("2001:67c:770::");

// display the response
console.log(response);
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

## Contributors

I would like to thank the following contributors who are working on the active development of whois-js.

[@ghostzero] (https://github.com/ghostzero)
[@officialpiyush] (https://github.com/officialpiyush)

## AS207111 Sponsors

I would like to extend my thanks to the following sponsors for funding AS207111.
If you are interested in becoming a sponsor, please visit my [Ko-fi](https://ko-fi.com/ene) page.

### Premium Partners

- [Be the first](https://ko-fi.com/ene)
