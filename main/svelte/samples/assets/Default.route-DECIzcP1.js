import{S as y,i as h,s as q,k as C,c as p,f as l,q as D,g as P,m,v as c,n as S,t as f,a as $,h as k,d as i}from"./AppCommon-B0X1wpkD.js";import{P as g}from"./Progressbar-B9YpUWmh.js";import{a as W}from"./Slot-Bd9w0Lo-.js";import"./progressbar-CgdwPfQW-C5FnxuiU.js";import"./writables-DoU_XYTX-CvfZwyIc.js";import"./directive-CKEccryv-C4vN6gkB.js";import"./extendWidget-KHDCpIpg.js";import"./config-DMyLY0t7.js";function j(d){let e,r,v,n,_,a,b,s,w,o,u;return r=new g({props:{value:20}}),n=new g({props:{value:40,type:"success"}}),a=new g({props:{value:60,type:"info"}}),s=new g({props:{value:80,type:"warning"}}),o=new g({props:{value:100,type:"danger"}}),{c(){e=C("div"),p(r.$$.fragment),v=l(),p(n.$$.fragment),_=l(),p(a.$$.fragment),b=l(),p(s.$$.fragment),w=l(),p(o.$$.fragment),D(e,"class","d-flex flex-column gap-2")},m(t,x){P(t,e,x),m(r,e,null),c(e,v),m(n,e,null),c(e,_),m(a,e,null),c(e,b),m(s,e,null),c(e,w),m(o,e,null),u=!0},p:S,i(t){u||(f(r.$$.fragment,t),f(n.$$.fragment,t),f(a.$$.fragment,t),f(s.$$.fragment,t),f(o.$$.fragment,t),u=!0)},o(t){$(r.$$.fragment,t),$(n.$$.fragment,t),$(a.$$.fragment,t),$(s.$$.fragment,t),$(o.$$.fragment,t),u=!1},d(t){t&&k(e),i(r),i(n),i(a),i(s),i(o)}}}function z(d){return W().set({progressbar:{children:e=>`${e.state.percentage}%`}}),[]}class K extends y{constructor(e){super(),h(this,e,z,j,q,{})}}export{K as default};