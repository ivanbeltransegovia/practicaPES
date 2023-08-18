let persona1={
    nombre:"ivan",
    edad:18,
    carrera:"sofware1"
}
let persona2={
    nombre:"ivan",
    edad:19,
    carrera:"sofware2"
}

    
    let persona3={
        nombre:"ivan",
        edad:20,
        carrera:"sofware3"
}
let arrayobjetos=[persona1,persona2,persona3]

arrayobjetos.forEach((i)=>{
    console.log(i)
})

console.log(arrayobjetos[2].edad)