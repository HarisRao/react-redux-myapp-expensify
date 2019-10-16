const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`this is my resolve data`)
    },5000)
    // reject(`this is my reject data`)
})
console.log('before')
promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
console.log('after')

