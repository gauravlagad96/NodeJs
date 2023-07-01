/* 


*/

let a=10;
let b =0;

let watingData = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(30)
    },3000)
    
})

watingData.then((data)=>{
    b=data;
    console.log(a+b)

})