var nav=document.getElementById("nav");
var cl=document.getElementById("cl");
var bar=document.getElementById("bar");
function opn(){
nav.style.visibility="visible";
nav.style.width="100%";
nav.style.height="100%";
bar.style.visibility="hidden";
}
function cls(){
nav.style.visibility="hidden";
nav.style.width="0";
nav.style.height="0";
bar.style.visibility="visible";
}