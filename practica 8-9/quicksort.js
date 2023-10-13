function quicksort(data){
    // caso baso
    if(data.length<=1){
        return data
    }
    let pivote=data[data.length-1]
    let dataleft=[]
    let dataequal=[]
    let datarigth=[]

    for(const item of data){
        if(item<pivote){
            dataleft.push(item)
        }
        else if(item===pivote){
            dataequal.push(item)
        }
        else{
            datarigth.push(item)
        }
    }
    const orderleft=quicksort(dataleft)
    const orderrigth=quicksort(datarigth)

    return [...orderleft,
        ...dataequal,
        ...orderrigth]

}

const array=[3,6,2,8]
console.log(quicksort(array))