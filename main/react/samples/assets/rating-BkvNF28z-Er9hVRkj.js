import{j as e,R as c}from"./App-D2FAakDZ.js";import{u as o,S as d}from"./config-87LujZOd.js";import{a as x,u as l}from"./directive-Kqp31pwt-o0igtPiy.js";import{c as m}from"./rating-CNQcp5pm-Cy2CxCIj.js";import{c as p}from"./directive-3-8yr-ZK-C5h7Dwqe.js";const u=m;function g({star:i,state:t,directive:s}){const n={index:i.index};return e.jsxs(c.Fragment,{children:[e.jsxs("span",{className:"visually-hidden",children:["(",i.index<t.visibleRating?"*":" ",")"]}),e.jsx("span",{...l(s,n),children:e.jsx(d,{slotContent:t.slotStar,props:i})})]},i.index)}function D(i){const[t,s]=o(u,i,"rating"),{directives:{containerDirective:n,starDirective:a}}=s;return e.jsx("div",{...x([p,"d-inline-flex"],n),children:t.stars.map(r=>e.jsx(g,{star:r,state:t,directive:a},r.index))})}export{D as R,u as c};