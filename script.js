
//creamos un array vacio.
let listadePrecios =[];

//ingresamos los elementos del Array mediante el método push.
function crearLista(){
    
    let cantProductos = parseInt(prompt("ingresa la cantidad de productos a agregar (Hasta 5 productos)."));
    for(i = 1; i < cantProductos; i++){
       let precio = parseInt(prompt("ingresa el precio del producto nro: " + i  + "."));
       
        listadePrecios.push(precio);
        console.log(listadePrecios);
    }
    

    //Ordenamos los elementos del Array con el método sort + función comparativa.
    listadePrecios.sort((a, b)=>{
       if (a == b){
           return 0;
       }
       if (a < b){
           return -1;
       }
       return 1;
   });
    

    //Escribimos en el documento los elementos del array de menor a mayor
    document.write(lista);
    
    
}
crearLista();






var nombres = ["juan", "pepe", "Uma", "Valen", "Marti"];

