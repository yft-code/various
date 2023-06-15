export {};
let a: number=1;
let b: string='1111'
// 可以自动进行类型检测
let c=false
// tsc 命令
a=10
//a='1111'
a=333
console.log('a',a);
// 声明参数的类型，返回的类型
function sun(a :number,b: number): number{
    return a+b
}
// 直接使用