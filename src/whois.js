"use strict";

var axios = require("axios");
var defaults = require('./defaults');

class Client {
    constructor(defaultConfig) {
        this.config = Object.assign(defaults, defaultConfig);
    }

    lookup(params) {
        return axios.get('https://whois.as207111.net/api/lookup', {
            params, headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.config.accessToken}`,
            }
        });
    }
}

/**
 * Create an instance of Whois
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Client} A new instance of Whois
 */
function createInstance(defaultConfig) {
    return new Client(defaultConfig);
}

// Create the default instance to be exported
var whois = createInstance(defaults);

module.exports = whois;
module.exports.default = whois;