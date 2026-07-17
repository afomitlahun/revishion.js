const po =[1,2,3,4,5,];
const dub=po.map((ne)=>{
    return ne*2;
});
console.log(po)
console.log(dub)


const st =["aa","gg","pp"];
const rr=st.map((tt)=>{
    return "stude: "+tt;
});
console.log(rr)

const prices=[100,250,500,1000];
const newpri=prices.map((yy)=>{
return yy+(yy*10/100)
});
console.log(newpri)

const names=["amsal","abele","sara"];
const result=names.map((name)=>{
    return "🛒 " +
    name.toUpperCase()
});
console.log(result);
const phones = [
    { brand: "Samsung", price: 30000 },
    { brand: "iPhone", price: 90000 },
    { brand: "Tecno", price: 18000 }
];
const neww=phones.map((brandd)=>{
    return brandd.brand;
});
console.log(neww)//brandn bcha netlo lemsayet endih enseralen
