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
 
 if (ProdoctName[ProdoctName.length-1] == "Elige tu Producto...") alert("Harta wea po! pero si seara Weon!. Elija un Producto po al tiro");
 
  else{
    /*Aca me tengo que ir a una base de dato en realidad pero pongo este Switch*/
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

    miItem.innerHTML =  "<b>Cantidad: </b>" + Cantidad.value + "&nbsp &nbsp &nbsp <b>Producto: </b>" + Producto.value + "&nbsp &nbsp &nbsp <b>Precio:</b> $" + Preciodeproducto + "&nbsp &nbsp &nbsp <b>Sub-Total: </b> $" + Subtotal;
    Lista.appendChild(miItem);
    Producto.selectedIndex=0;
    document.getElementById("btnbuy").innerHTML="Comprar por &nbsp<b>$" + total + "</b>";
    document.getElementById("btnpay").innerHTML="Pagar &nbsp<b>$"  + total + "</b>";
  }
}

let DeletList = () => {
Lista.innerHTML='';
total=0;
document.getElementById("btnbuy").innerHTML="Comprar";
document.getElementById("btnpay").innerHTML="Pagar";
}

let Deletlastitem=()=> {
Lista.removeChild(Lista.lastChild);
Preciodeproducto= 0;

/*Aca me tengo que ir a una base de dato en realidad pero pongo este Switch*/
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

/*Pongo esta linea para destuirlo del array cantidad, arriba Swith tb para el Array de ProductName */
Subtotal= parseInt(arregloCantidad.pop(),10) * Preciodeproducto;

total-=Subtotal;
document.getElementById("btnbuy").innerHTML="Compara por &nbsp<b>$" + total + "</b>";
document.getElementById("btnpay").innerHTML="Pagar &nbsp<b>$"  + total + "</b>";
}

let botonAgregar = document.querySelector(".addBtn")
botonAgregar.addEventListener("click", AddList);
 
let boronelimiarall = document.querySelector(".removeallBtn");
boronelimiarall.addEventListener("click", DeletList);

let botonEliminarUlt = document.querySelector(".removeBtn");
botonEliminarUlt.addEventListener("click", Deletlastitem);


