import{B as t}from"./index.js";import"./vendor.js";class s{constructor(t){this.requestIdCounter=0,this.baseUrl=t}request(s){const e=new URL(this.baseUrl);return e.search=window.location.search,new Promise(((r,n)=>{const a=this.requestIdCounter;var i;fetch(e.toString(),{method:"POST",headers:{"Content-Type":"application/json"},body:(i={requestId:a,channel:s.channel,action:s.action,payload:s.payload},JSON.stringify(i,((s,e)=>"bigint"==typeof e?"PrismaBigInt::"+e:"Buffer"===(null==e?void 0:e.type)&&Array.isArray(null==e?void 0:e.data)?"PrismaBytes::"+t.from(e.data).toString("base64"):e)))}).then((async t=>{if(200===t.status){const s=function(t){return JSON.parse(t,((t,s)=>"string"==typeof s&&s.startsWith("PrismaBigInt::")?BigInt(s.substr("PrismaBigInt::".length)):"string"==typeof s&&s.startsWith("PrismaBytes::")?s.substr("PrismaBytes::".length):s))}(await t.text());return r(s.payload)}return console.error("Non-200 Status Code in HTTPTransport.send. Body:",t.body),n({message:`Error in HTTP Request (Status: ${t.status})`,stack:JSON.stringify(t.body,null,2)})})).catch((t=>(console.error("Unable to communicate with backend: ",t),n({message:"Unable to communicate with Prisma Client. Is Studio still running? You may need to restart it using `npx prisma studio`",stack:t})))),this.requestIdCounter++}))}}export{s as HTTPBrowserTransport};
