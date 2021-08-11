//JSON OBJETOS
window.addEventListener("load", () => {
    var guitarra = {
        tipo: "española",
        costo: 5000,
        color: "cafe"
    }
    var instumentos = {

        tipo: "piano",
        año: 174,
        tamaño: "g",
        precio: 10000,
        guitarra
    }
    
    instumentos.guitarra.color="negro";
    console.log(instumentos);


// ========= LOCAL STORAGE================
//PRACTICAMENTE ME SIRVE PARA GUARDAR VARIABLES EN MI NAVEGADOR, SON VARIABLES LOCALES

if(typeof(localStorage) != undefined){
    console.log("El navegador si es compatible");
}else{
    console.log("El navegador NO es compatible");

}

var numero=57964037;

localStorage.setItem("nu",numero);
//ASIGNACION DE UN OBJETO JSON PARA GUARDARLA COMO LOCALSTORAGE
localStorage.setItem("gui",JSON.stringify(guitarra));
//OBTENER DE UN OBEJETO JSON DIRACTAMENTE DEL LOCALSTORAGE
var guitar=JSON.parse(localStorage.getItem("gui"))
for (let index = localStorage.getItem("nu"); index < 57964047;index++){
    console.log(index);
    }
    console.log(guitar.color);

});