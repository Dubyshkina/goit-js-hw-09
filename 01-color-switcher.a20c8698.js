const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=null;t.addEventListener("click",(function(e){n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0}),1e3)})),e.addEventListener("click",(()=>{clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.a20c8698.js.map
