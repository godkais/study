var var_=1//재선언, 재할당 가능
let let_=1// 재할당 가능, 재선언 불가능
const const_=1//재서언,재할당 불가능

function f(a,b) {
    return a*b
}
var f1=(a,b)=>{
    return a*b
}
console.log(f(4,5),f(2,8))