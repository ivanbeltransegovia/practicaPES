let array1=[5,2,7,4]

function bubblesort(data){
    let cambiado

    do {
        cambiado=false
        for(let i=0;i<data.length;i++){

            if(data[i]>data[i+1]){
                const temp=data[i]
                data[i]=data[i+1]
                data[i+1]=temp
                cambiado=true
            }
        }  
    } while (cambiado){
        return data
        
    }
}

console.log(bubblesort(array1))