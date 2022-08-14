'use strict'

let Producto = document.querySelector(".myInput");
let Cantidad = document.querySelector(".myQ");
let Lista = document.querySelector(".myol");
 
let ProdoctName = [];
let arregloCantidad= [];
let Subtotal=0;
let total=0;
let Preciodeproducto=0;

let AddList = () => {
  Preciodeproducto=0;
  ProdoctName.push(Producto.value);
  arregloCantidad.push(Cantidad.value);
  let miItem = document.createElement("li");
  
 switch(ProdoctName[ProdoctName.length-1]){
  case "Nano33":
    Preciodeproducto= 10;
  break;

  case "NanoRP2040":
    Preciodeproducto= 15;
  break;

  case "NanoMotor":
    Preciodeproducto= 20;
  break;

  case "UNOR3":
    Preciodeproducto= 40;
  break;

  case "UNORWIFI":
    Preciodeproducto= 45;
  break;

  case "UNOMINI":
    Preciodeproducto= 35;
  break;

  case "PortentaH7":
    Preciodeproducto= 50;
  break;

  case "PortentaX8":
    Preciodeproducto= 80;
  break;

  case "PortentaM":
    Preciodeproducto= 90;
  break;
 } 
  


  Subtotal= Preciodeproducto * parseInt(arregloCantidad[arregloCantidad.length-1]);
  total+=Subtotal;

  miItem.innerHTML =  "<b>Cantidad: </b>" + Cantidad.value + "&nbsp &nbsp &nbsp <b>Producto: </b>" + Producto.value + "&nbsp &nbsp &nbsp <b>Precio:</b> $" + Preciodeproducto + "&nbsp &nbsp &nbsp <b>Sub-Total: </b> $" + Subtotal + "&nbsp <b> Total: </b> $" +  total;
  Lista.appendChild(miItem);
  Producto.selectedIndex=0;

}

let DeletList = () => {
Lista.innerHTML='';
total=0;
}

let Deletlastitem=()=> {
Lista.removeChild(Lista.lastChild);
Preciodeproducto= 1
switch(ProdoctName.pop()){
  case "Nano33":
    Preciodeproducto= 10;
  break;

  case "NanoRP2040":
    Preciodeproducto= 15;
  break;

  case "NanoMotor":
    Preciodeproducto= 20;
  break;

  case "UNOR3":
    Preciodeproducto= 40;
  break;

  case "UNORWIFI":
    Preciodeproducto= 45;
  break;

  case "UNOMINI":
    Preciodeproducto= 35;
  break;

  case "PortentaH7":
    Preciodeproducto= 50;
  break;

  case "PortentaX8":
    Preciodeproducto= 80;
  break;

  case "PortentaM":
    Preciodeproducto= 90;
  break;
} 
Subtotal= parseInt(arregloCantidad.pop(),10) * Preciodeproducto;
total-=Subtotal;
}

let botonAgregar = document.querySelector(".addBtn")
botonAgregar.addEventListener("click", AddList);
 
let boronelimiarall = document.querySelector(".removeallBtn");
boronelimiarall.addEventListener("click", DeletList);

let botonEliminarUlt = document.querySelector(".removeBtn");
botonEliminarUlt.addEventListener("click", Deletlastitem);


