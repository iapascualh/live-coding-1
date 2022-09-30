const myArray = ["insecto", "bootcamp", "mango", "reptil", "mosca", "escritorio"];
let arraypalabras=bigWords("bocina", myArray);
palabra=document.getElementById("listado");
output(arraypalabras);
    function output(arreglo2){
        // (inicializacion;      condicion;              in/decremento)
    for (let contador = 0; contador < arreglo2.length; contador++) {
        const element = arreglo2[contador];
        palabra.innerHTML+=`<li id="lista">${arreglo2[contador]}</li>`
    };//for    
    };//imprimali
    function bigWords(np,arreglo1){
    palabra=[];
        // (inicializacion;      condicion;              in/decremento)
    for (let contador = 0; contador < arreglo1.length; contador++) {
        const element = arreglo1[contador];
        if(np.length<arreglo1[contador].length)
        {
            palabra.push(arreglo1[contador]);
        }//if
    }//for
    return palabra;
    };

