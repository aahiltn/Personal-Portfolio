import"https://unpkg.com/taos@1.0.5/dist/taos.js";const o=document.getElementById("form"),m="https://api.web3forms.com/submit";o?.addEventListener("submit",r=>{r.preventDefault();const e=new FormData(o);fetch(m,{method:"POST",body:e}).then(async t=>{await t.json(),t.status==200?alert("Form submitted successfully!"):(alert("Error submitting form!"),console.log(t))}).catch(t=>{console.error("Error submitting form:",t)})});
