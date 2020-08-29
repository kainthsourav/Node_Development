// setTimeout(() => {
//     console.log('2 seconds')
// }, 2000);

// const sname=['sourav','kainth','jou','zinn']

// const getname=sname.filter((names)=>
// {
//     return names.length<=4
// })

// console.log(getname)

// getgeocode=(address,callback)=>{

//     setTimeout(() => {
//         const data={
//             long:'0',
//             ati:'0'
//         }
//         callback(data)
//     },2000);

   
// }

// getgeocode('sourav',(data)=>
// {
//  console.log(data)
// })


//challenge

const add=(x,y,callback)=>{
    setTimeout(() => {
        callback(x+y)
    }, 2000);
    
}

add(1,2,(data)=>{
    console.log(data)
})

