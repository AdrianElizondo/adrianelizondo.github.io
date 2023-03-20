//Menu lateral//
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
         menu.style.display = "block";
         menu_visible = true;
    }
    else{
         menu.style.display = "none";
         menu_visible = false;
    }
}
//ocultar menu una vez seleccionada la opcion
let links = document.querySelectorAll("nav a")
for(var x = 0; x<links.length;x++){
    links [x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creacion de las barritas a partir de una barra en particular
function crearBarra(id_barra){
    for(i=0;i<=17;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//seleccion y manipulacion de barras generales
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);
let solidworks = document.getElementById("solidworks");
crearBarra(solidworks);

//Cantidad de barras
let contadores = [-1,-1,-1,-1,-1,-1]
let entro = false;
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades")
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 9, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 8, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 12, 4, intervalIlustrator);
        },100);
        const intervalSolidworks = setInterval(function(){
            pintarBarra(solidworks, 13, 5, intervalSolidworks);
        },100);
    }
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e")
        elementos[x].style.backgroundColor = "#ff0000";
    }else{
        clearInterval(interval)
    }
}

//animacion de barra
window.onscroll = function(){
    efectoHabilidades();
}
