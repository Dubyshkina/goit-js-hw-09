!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(e){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.disabled=!0}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.c71dd8ae.js.map
