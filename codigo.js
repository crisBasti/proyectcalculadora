
const btn_Numeros = ["num__0", "num__1", "num__2", "num__3", "num__4", "num__5", "num__6", "num__7", "num__8", "num__9", "num__c", "num__delete"];

const btn_Operadores = ["num__/", "num__x", "num__-", "num__+", "num__="];

const pantalla = document.querySelector('.pantalla');
pantalla.value = "";

let btn_0 = document.querySelector('.num__0');
btn_0.addEventListener('click', ()=>{
    let mensaje = 'hiciste click en el numero 0';
    console.log(mensaje);
    pantalla.value = 0;
});

let btn_1 = document.querySelector('.num__1');
btn_1.addEventListener('click', ()=>{
    let mensaje = 'hiciste click en el numero 1';
    console.log(mensaje);
    pantalla.value = 1;
});

let btn_2 = document.querySelector('.num__2');
btn_2.addEventListener('click', ()=>{
    let mensaje = 'hiciste click en el numero 2';
    console.log(mensaje);
    pantalla.value = 2;
});

let btn_3 = document.querySelector('.num__3');
btn_3.addEventListener('click', ()=>{
    let mensaje = 'hiciste click en el numero 3';
    console.log(mensaje);
    pantalla.value = 3;
});


function agregarItem() {

}



function suma(a, b) {
    var a = a;
    var b = b;
    resultado = a + b;
    return resultado
}

function resta(a, b) {
    var a = a;
    var b = b;
    resultado = a - b;
    return resultado
}

function multiplicar(a, b) {
    var a = a;
    var b = b;
    resultado = a * b;
    return resultado
}

console.log(suma(10, 15));


console.log(resta(10, 7));


console.log(multiplicar(7, 10));

for (let i = 0; i < btn_Numeros.length; i++) {
    const element = btn_Numeros[i];
    console.log(btn_Numeros[i])
}