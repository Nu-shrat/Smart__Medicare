import t from"querystring";var e=/https?|ftp|gopher|file/;function o(o){"string"==typeof o&&(o=g(o));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",h=t.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?c=r+t.host:a&&(c=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(c+=":"+t.port)),h&&"object"==typeof h&&(h=e.encode(h));var l=t.search||h&&"?"+h||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==c?(c="//"+(c||""),p&&"/"!==p[0]&&(p="/"+p)):c||(c=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:c,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(o,t,e);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var r="http://",a="w.w",s=r+a,p=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,n=/https?|ftp|gopher|file/;function h(t,e){var a="string"==typeof t?g(t):t;t="object"==typeof t?o(t):t;var h=g(e),c="";a.protocol&&!a.slashes&&(c=a.protocol,t=t.replace(a.protocol,""),c+="/"===e[0]||"/"===t[0]?"/":""),c&&h.protocol&&(c="",h.slashes||(c=h.protocol,e=e.replace(h.protocol,"")));var l=t.match(p);l&&!h.protocol&&(t=t.substr((c=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(c=c.slice(0,-1)));var i=new URL(t,s+"/"),u=new URL(e,i).toString().replace(s,""),f=h.protocol||a.protocol;return f+=a.slashes||h.slashes?"//":"",!c&&f?u=u.replace(r,f):c&&(u=u.replace(r,"")),n.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),c&&(u=c+("/"===u[0]?u.substr(1):u)),u}function c(t,e){return g(h(t,e))}function l(){}l.prototype.parse=g,l.prototype.format=o,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function g(e,r,p){if(void 0===r&&(r=!1),void 0===p&&(p=!1),e&&"object"==typeof e&&e instanceof l)return e;var n=(e=e.trim()).match(u);e=n?n[1].replace(/\\/g,"/")+n[2]:e.replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var h=!/(^javascript)/.test(e)&&e.match(f),c=m.test(e),g="";h&&(i.test(h[1])||(g=h[1].toLowerCase(),e=""+h[2]+h[3]),h[2]||(c=!1,i.test(h[1])?(g=h[1],e=""+h[3]):e="//"+h[3]),3!==h[2].length&&1!==h[2].length||(g=h[1],e="/"+h[3]));var d,y=(n?n[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",w="";try{d=new URL(e)}catch(t){U=t,g||p||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(w="/",e=e.substr(1));try{d=new URL(e,s)}catch(t){return C.protocol=g,C.href=g,C}}C.slashes=c&&!w,C.host=d.host===a?"":d.host,C.hostname=d.hostname===a?"":d.hostname.replace(/(\[|\])/g,""),C.protocol=U?g||null:d.protocol,C.search=d.search.replace(/\\/g,"%5C"),C.hash=d.hash.replace(/\\/g,"%5C");var j=e.split("#");!C.search&&~j[0].indexOf("?")&&(C.search="?"),C.hash||""!==j[1]||(C.hash="#"),C.query=r?t.decode(d.search.substr(1)):C.search.substr(1),C.pathname=w+(h?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(d.pathname):d.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==e[0]&&(C.pathname=C.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[d.username,d.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=d.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=w?""+C.pathname+C.search+C.hash:o(C);var R=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~R.indexOf(t)||(C[t]=C[t]||null)}),C}export{g as parse,o as format,h as resolve,c as resolveObject,l as Url};
//# sourceMappingURL=index.mjs.map