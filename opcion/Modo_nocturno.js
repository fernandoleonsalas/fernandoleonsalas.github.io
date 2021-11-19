const btn = document.getElementById("switch");
let span = document.getElementById("icono");
let nav = document.getElementById("nav");

btn.addEventListener("click",function(){
  btn.classList.toggle("activo");  
  document.body.classList.toggle("fondo_oscuro");
  span.classList.toggle("span_activo");
  nav.classList.toggle("nav_activo");
});


