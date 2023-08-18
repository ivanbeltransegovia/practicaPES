let numeros=[]
let otrosnumeros=[]
let otros=[]
let arrayfinal=[]

for(let i=1;i<=100;i++){
    let mesaje=`el valor es:${i} `
    numeros.push(mesaje)
}

for(let i=101;i<=200;i++){
    let mesaje=`el valor es: ${i}`
    otrosnumeros.push(mesaje)
}
for(let i=201;i<=300;i++){
    let mesaje=i
    otros.push(mesaje)
}

otrosnumeros.forEach((i)=>{
    console.log(i)
})

arrayfinal=[...numeros,...otrosnumeros,...otros]

 arrayfinal.forEach((i)=>{
    console.log(i)
 })