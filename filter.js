const prices = [100,200,300,500,6000];
const filterprise=prices.filter((num) =>{
    return num >=500;
});
console.log(filterprise);

const students = [
    { name: "Amsal", score: 85 },
    { name: "Abel", score: 45 },
    { name: "Sara", score: 70 },
    { name: "Hana", score: 30 }
];
const filterr =students.filter((student)=>{
    return student.score>=70;
});
console.log(filterr);