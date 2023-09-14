//encontrar media,mediana y varianza

//1-)encontraremos la media la formula es: la suma de todos los numeros
// dividios entre la cantidad de numeros (5+5+5)/3=5

let datos=[4,1,5,2,3]

function media(datos){
    function sumatoria(serie){
        let suma=0
        serie.forEach(elemento => {
            suma=suma+elemento
            
        });
        return suma
    }
    let total=sumatoria(datos)/datos.length
    return total
}
console.log("media")
console.log(`la media es ${media(datos)}`)

//2-)encontraremos la mediana
//[1,2,3,4,5,]

function mediana(datos){
    let datosOrdenados=datos.sort((a,b)=>a-b) //1,2,3,4,5,6,7,8
    let contador=0
    let medianacentral=0
    for(let i=1;i<=datos.length;i++){
        contador=i
    }
    if(contador%2==0){
        let central1=contador/2
        let central2=central1+1
        medianacentral=`los datos son pares la mediana es ${(central1+central2)/2}`
    }
    else{
        let datomedio=contador/2
        let aprximacion=Math.round(datomedio)
        medianacentral=`datos impares la mediana es ${datosOrdenados[aprximacion-1]}`
    }
    return medianacentral
}
console.log("mediana")
console.log(mediana(datos))

//3-) encontraremos la varianza que esta dado por  valor real-media

// encontrar la media
let media1=media(datos)
//restar cada valor original a la media
function diferencias(datos){
    let datosOrdenados=datos.sort((a,b)=>a-b)
    let resta=0
    const restadiferencia=[]
    let datoscuadrados=0
    datosOrdenados.forEach(elementos=>{
        resta=elementos-media1
        restadiferencia.push(resta)
        datoscuadrados=restadiferencia.map(function(numero){
            return numero*numero
        })
    })
    return datoscuadrados
}
let result=diferencias(datos)

console.log("la varianza es")
console.log(media(result))





