declare module "@as207111/whois" {
  class Client {
    constructor(apiKey: string);
    public lookup(ip: string): Promise<APIResponse>;
  }

  interface ASN {
    asn: number;
    name: string;
    isp: string;
    network: string;
  }

  interface Company {
    name: string;
  }

  interface Privacy {
    proxy: boolean;
    hosting: boolean;
    mobile: boolean;
  }

  export interface APIResponse {
    ip: string;
    city: string;
    postal: string;
    region: string;
    country: string;
    lat: number;
    long: number;
    timezone: string;
    asn: ASN;
    company: Company;
    privacy: Privacy;
  }
}
