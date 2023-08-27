/*creamos la funcion que captrara los datos de nuestro array*/
function arreglo() {
    const miarray = [];

    alert("formara un array de indice 4, precione aceptar")

    for (let i = 0; i < 5; i++) {
        let datos =prompt(`Ingrese el valor del índice ${i}`).trim()

        /*creamos un bucle para que el usuario digite solo valores numericos*/
        while (datos === "" || isNaN(Number(datos))) {
            alert("comando no valido, ingresa un valor numerico")
            datos =prompt(`Ingrese el valor del índice ${i}`).trim()
        }
        /*se almacena cada valor en nuestro array*/
        miarray.push(datos)

    }
    return miarray

}

/*creamos una variable que almacene nuestra funcion*/
const mostrandoArray = arreglo()

/*para que el usuario sepa mostramos el array creado*/
alert(`su arreglo es [${mostrandoArray}]`)

/*creamos una variable donde por medio de una funcion ordenamos los elementos
de nuestro array de mayor valor a menor valor*/

const tercernumero = mostrandoArray.sort(function (a, b) {
    return b - a
})

alert(`el tercer numero mayor de su array es ${tercernumero[2]}`)










