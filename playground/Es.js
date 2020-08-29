
//ES6 Object property
const name='sourav'
const userage=27

const use={
    name,
    age:userage,
    location:'Punjab'
}

console.log(use)

//ES6 object destructing

const product={
    label:'The Red Book',
    price:3,
    stock:27,
    saleprice:undefined
}

const{label:productlabel,stock}=product
console.log(productlabel)
console.log(stock)


//destructing with functions

const trans=(type,{label,stock,price})=>{
    console.log(label)
    console.log(stock)
    console.log(price)
}

trans('Order',product)
