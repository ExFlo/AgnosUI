import{w as a,D as n,C as c}from"./directive-DCYlDznf-D6Op6yAr.js";import{r as t}from"./App-CMLx6mqi.js";function l(e){const[r,s]=t.useState(()=>e());return t.useEffect(()=>e.subscribe(u=>{s(()=>u)}),[e]),r}const o=(e,r)=>!c(e,r),b=e=>{const r=t.useRef();return r.current||(r.current=a({...e},{equal:o})),t.useEffect(()=>{r.current.set({...e})},[e]),t.useMemo(()=>n(r.current),[r.current])};export{b as a,l as u};
