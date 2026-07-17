const nums=[2,4,6,8,10];
const total=nums.reduce((sum,num)=>{
    return sum+num;
},0);
console.log(total);