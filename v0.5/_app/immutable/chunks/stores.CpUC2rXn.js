import{s as t}from"./entry.LhS15AiT.js";const r=()=>{const s=t;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},o={subscribe(s){return r().page.subscribe(s)}},b={subscribe(s){return r().navigating.subscribe(s)}},c={subscribe(s){const e=r().updated;return c.check=e.check,e.subscribe(s)},check:()=>{throw new Error("Cannot check updated store before subscribing")}};export{b as n,o as p,c as u};
