function square(num) {
    return num*num;
}console.log(square(5));

function checkAge(age){
    if (age>=18){
        console.log("you can voit"); }
        else {
            console.log("you cannot vote");
        }
    }
console.log(checkAge(20));

function calcu(nu1,nu2, opp){
if(opp==="+"){
    return nu1+nu2;
}
else if (opp==="-"){
    return nu1-nu2;
}
else if (opp==="*"){
    return nu1*nu2;
}
else if (opp==="/"){
    return nu1/nu2;
}
else{
    return "invalid oprasion";
}
}
console.log(calcu(10,5,"+"));
console.log(calcu(10,5,"/"));

function intro (name,age,dep) {
    console.log("my name is "+name+".");
    console.log("im "+age+" years old. ");
    console.log("istudy "+dep+"engineering.");

} intro(" amsal","23  ","s.w  ");