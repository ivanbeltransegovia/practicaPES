const array1=[];
for(let i=1;i<=100;i++){
    let dato=i
    array1.push(dato)
}

const array2=[];
for(let i=101;i<=200;i++){
    let dato2=i
    array2.push(dato2)
}

function mediaarray(array){
    const suma=array.reduce((acumulador,valoratual)=>acumulador+valoratual,0)
    return media=suma/array1.length
}


let total1=mediaarray(array1)
let total2=mediaarray(array2)
let mediatotal=(total1+total2)/2

alert(`la media del array 1 es ${total1}`)
alert(`la media del array 2 es ${total2}`)
alert(`la media de la suma de ambos arrays es ${mediatotal}`)







