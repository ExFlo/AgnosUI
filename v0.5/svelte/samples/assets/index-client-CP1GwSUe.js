import{j as f,aj as c,a6 as o,g as l,$ as b,a7 as g,ak as m,Q as v}from"./AppCommon-Cm-6NtnE.js";function _(e){f(e,e.v+1)}function d(e){let r;return c(e,t=>r=t)(),r}function p(e){let r,t=m(0),n=0,s=v;function i(){return o()?(l(t),b(()=>{if(n===0){let u=!1;s=e.subscribe(a=>{r=a,u&&_(t)}),u=!0}return n+=1,()=>{n-=1,g().then(()=>{n===0&&s()})}}),r):d(e)}return"set"in e?{get current(){return i()},set current(u){e.set(u)}}:{get current(){return i()}}}export{p as f};
