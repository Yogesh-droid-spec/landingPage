import React from 'react';
import { Tree } from 'react-d3-tree';

// Your JSON data
const jsonData = {
  name: "flipkart.com",
  children: [
   { name:"domainForwardingResult", children:[
    {name:"isForwarding",children:[
       { name:"Website not responding!"}
    ]},{
        name:"asfa",children:[
           { name:"fsafdsf" }
        ]
    }
   ]}
   ,{
    name:"mxRecords", children:[
        {name:` [
            {
                "exchange": "eu-smtp-inbound-2.mimecast.com",
                "priority": 1
            },
            {
                "exchange": "eu-smtp-inbound-1.mimecast.com",
                "priority": 1
            }
        ] ` }
    ]
   },
   {
    name:"spfRecords",children:[
    {name:` [
        "v=spf1 include:eu._netblocks.mimecast.com include:zoho.flipkart.com include:_spf.google.com include:spf.protection.outlook.com include:spf.flipkart.com ip4:64.56.194.128/25 ip4:74.117.200.0/21 ip4:129.91.5.0/24 ip4:129.152.0.0/17 ip4:141.145.85.0/24 ip4:1",
        "60.34.0.0/16 ip4:199.167.173.0/24 ip4:205.223.80.0/20 ip4:208.72.88.0/21 ip4:216.136.162.64/26 ip4:216.136.168.32/28 ip4:216.136.168.64/27 ip4:216.136.229.0/24 ip4:103.4.255.64/26 ip4:103.4.254.64/26 ip4:103.4.253.64/26 ip6:2405:ba00:8800::/48 ip6:2405:ba",
        "00:8808::/48 ip6:2606:b400::/32 ip6:2801:1:8800::/48 ip6:2a02:6900:8804::/48 ip6:2a02:6900:8810::/48 ip6:2a02:6900:8814::/48 include:spf.mandrillapp.com ~all"
    ]`}
    ]
   }
  ],
};

const TreeComponent = () => (
    <div style={{ width: '100%', height: '100vh' }}>
      <Tree data={jsonData} />
    </div>
  );

export default TreeComponent;