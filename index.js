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
  //Preciodeproducto=0; lo saco porque no es necesario ahora
  ProdoctName.push(Producto.value);
  arregloCantidad.push(Cantidad.value);
  let miItem = document.createElement("li");
 
 if (ProdoctName[ProdoctName.length-1] == "Elige tu Producto...") 
  {
    alert("Harta wea po! pero si seara Weon!. Elija un Producto po al tiro");
    ProdoctName.pop();
    arregloCantidad.pop();
  }
  else{
    /*Aca me tengo que ir a una base de dato en realidad pero pongo este Switch*/
    switch(ProdoctName[ProdoctName.length-1]){
      case "Nano---33B":
        Preciodeproducto= 10;
      break;

      case "NanoRP2040":
        Preciodeproducto= 15;
      break;

      case "Nano-Motor":
        Preciodeproducto= 20;
      break;

      case "UNO----R3":
        Preciodeproducto= 40;
      break;

      case "UNOR-WiFi":
        Preciodeproducto= 45;
      break;

      case "UNO--MINI":
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

    miItem.innerHTML =  "<b>Cantidad: </b>" + Cantidad.value + "&nbsp &nbsp &nbsp <b>Producto: </b>" + Producto.value + "&nbsp &nbsp &nbsp <b>Precio:</b> $" + Preciodeproducto + "&nbsp &nbsp &nbsp <b>Sub-Total: </b> $" + Subtotal;
    Lista.appendChild(miItem);
    Producto.selectedIndex=0;
    document.getElementById("btnbuy").innerHTML="Comprar por &nbsp<b>$" + total + "</b>";
    document.getElementById("btnpay").innerHTML="Pagar &nbsp<b>$"  + total + "</b>";
    document.getElementById("btnbuy").disabled=false;
    document.getElementById("btnremove").disabled=false;
  }
}

let DeletList = () => {
Lista.innerHTML='';
total=0;
document.getElementById("btnbuy").innerHTML="Comprar";
document.getElementById("btnpay").innerHTML="Pagar";
document.getElementById("btnremove").disabled=true;
}


let Deletlastitem=()=> {
Lista.removeChild(Lista.lastChild);
Preciodeproducto= 0;
/*Aca me tengo que ir a una base de dato en realidad pero pongo este Switch*/
switch(ProdoctName.pop()){
  case "Nano---33B":
    Preciodeproducto= 10;
  break;

  case "NanoRP2040":
    Preciodeproducto= 15;
  break;

  case "Nano-Motor":
    Preciodeproducto= 20;
  break;

  case "UNO----R3":
    Preciodeproducto= 40;
  break;

  case "UNOR-WiFi":
    Preciodeproducto= 45;
  break;

  case "UNO--MINI":
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

/*Pongo esta linea para destuirlo del array cantidad, arriba Swith tb para el Array de ProductName */
Subtotal= parseInt(arregloCantidad.pop(),10) * Preciodeproducto;

total-=Subtotal;
  if (total<=0) 
    {
      document.getElementById("btnbuy").disabled=true;
      document.getElementById("btnbuy").innerHTML="Comprar";
      document.getElementById("btnremove").disabled=true;
    } else {
    document.getElementById("btnbuy").innerHTML="Comprar por &nbsp<b>$" + total + "</b>";
    document.getElementById("btnpay").innerHTML="Pagar &nbsp<b>$"  + total + "</b>";
    document.getElementById("btnbuy").disabled=false;
    document.getElementById("btnremove").disabled=false;
    }
}

let bottonCard1=()=> {
 Producto.selectedIndex=7;
 Cantidad.selectedIndex=0;
AddList();
}

let bottonCard2=()=> {
  Producto.selectedIndex=8;
  Cantidad.selectedIndex=0;
 AddList();
 }
let bottonCard3=()=> {
  Producto.selectedIndex=3;
  Cantidad.selectedIndex=0;
 AddList();
 }
let bottonCard4=()=> {
  Producto.selectedIndex=1;
  Cantidad.selectedIndex=0;
 AddList();
 }
 let bottonCard5=()=> {
  Producto.selectedIndex=2;
  Cantidad.selectedIndex=0;
 AddList();
 }
 let bottonCard6=()=> {
  Producto.selectedIndex=4;
  Cantidad.selectedIndex=0;
 AddList();
 }

let botonAgregar = document.querySelector(".addBtn")
botonAgregar.addEventListener("click", AddList);
 
let boronelimiarall = document.querySelector(".removeallBtn");
boronelimiarall.addEventListener("click", DeletList);

let botonEliminarUlt = document.querySelector(".removeBtn");
botonEliminarUlt.addEventListener("click", Deletlastitem);

let boton1= document.querySelector(".btn1");
boton1.addEventListener("click", bottonCard1);

let boton2= document.querySelector(".btn2");
boton2.addEventListener("click", bottonCard2);

let boton3= document.querySelector(".btn3");
boton3.addEventListener("click", bottonCard3);

let boton4= document.querySelector(".btn4");
boton4.addEventListener("click", bottonCard4);

let boton5= document.querySelector(".btn5");
boton5.addEventListener("click", bottonCard5);

let boton6= document.querySelector(".btn6");
boton6.addEventListener("click", bottonCard6);
