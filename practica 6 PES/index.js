//creando array
let cantidad_index=prompt("ingresa la cantidad de numeros").trim()
while(isNaN(cantidad_index)||cantidad_index=="" || parseInt(cantidad_index) === 0){
    cantidad_index=prompt("no valido ingresa la cantidad de numeros").trim()
}

function crear_array(){
    let array=[]
    for(let i=0;i<cantidad_index;i++){
        let numero=(Number(prompt(`ingresa el indice ${i}`)))
        while(isNaN(numero) || numero==""){
            numero=(Number(prompt(`no valido(ingresa el indice) ${i}`)))
        }
        array.push(numero)
    }
    return array
}
let datosarray=crear_array()

alert(`su array es ${datosarray}`)

function bubblesort(data){
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data.length-i-1;j++){
            if(data[j]>data[j+1]){
                let aux=data[j]
                data[j]=data[j+1]
                data[j+1]=aux
            }
        }
    }
    return data
}
function mergesort(data){
    if(data.length<=1){
        return data
    }
    else{
        const mitad=Math.round(data.length/2)
        let izquierda=data.splice(0,mitad)

        return merge(mergesort(izquierda),mergesort(data))
    }
}
function merge(izquierda,derecha){
    let mezcla=[]

    while(izquierda.length>0 && derecha.length>0){
        if(izquierda[0]<derecha[0]){
            mezcla.push(izquierda.shift())
        }
        else{
            mezcla.push(derecha.shift)
        }
    }
    if(izquierda.lengt>0){
        mezcla=[...mezcla,...izquierda]
    }
    if(derecha.length>0){
        mezcla=[...mezcla,...derecha]
    }
    return mezcla
}function quicksort(data){
    if(data.length<=1){
        return data
    }
    else{
        let pivote=data[0]
        let izquierda=[]
        let derecha=[]

        for(i=1;i<data.lengt;i++){
            if(data[i]<pivote){
                izquierda.push(data[i])
            }
            else{
                derecha.push([data[i]])
            }
        }
        return[...quicksort(izquierda),pivote,...quicksort(derecha)]
    }
}






let useroption

while(true){
    alert("con que metodo desea ordenarlo.\n1-bubblesor.\n2-mergesort.\n3-quicksort.\n4-salir")
    useroption=(Number(prompt("ingrese el numero de la opcion")))
    switch (useroption) {
        case 1:let bubble=bubblesort(datosarray);
            alert(`este seria el array ordenado con bubblesort ${bubble}`)
            break;
        case 2:let merger=mergesort(datosarray)
            alert(`este es el aray ordenado con mergesort ${merger}`)
            break;
        case 3:let quicksorter=quicksort(datosarray)
            alert(`array ordenado con quicksort ${quicksorter}`)
            break;
        case 4:alert("adios");
            break;
        default:
            alert("opcion no valida")
            break
    }
    if(useroption===4){
        break
    }
}


