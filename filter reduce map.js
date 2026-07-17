const products = [
    { name: "Phone", price: 25000 },
    { name: "Mouse", price: 1500 },
    { name: "Laptop", price: 80000 },
    { name: "Keyboard", price: 3000 }
];
const mapp=products.map((napro)=>{
    return napro.name; 
});
    const expencive=products.filter((filte)=>{
        return filte.price>=10000;
});
const  total=products.reduce((sum,product)=>{
    return sum+product.price;
},0);
console.log(mapp);
console.log(expencive);
console.log(total);