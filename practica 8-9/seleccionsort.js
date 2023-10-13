let array=[7,3,9,2]

function seleccionsort(data){
    for(let i=0;i<data.length;i++){
        let min=i
        for(let j=i+1;j<data.length;j++){
            if(data[j]<data[min]){
                min=j
            }
        }
        if(data[i]!==i){
            let temp=data[i]
            data[i]=data[min]
            data[min]=temp
        }
    }
    return data
}

console.log(seleccionsort(array))


