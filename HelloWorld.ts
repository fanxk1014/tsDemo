let a:number = 123;
let b:number = 123.456;
let c:boolean = true;
// console.log(a);
// console.log(b);
// console.log(c);

enum sex1{male,female,middle}
enum sex2{male='男',female='女',middle='中'}
// console.log(sex1.middle);
// console.log(sex2.middle);

let d:any;
d='123';
// console.log(d);

function getInfo(age:number):string{
    return '年龄：'+age+'岁了。';
}
let age:number=18;
let result:string = getInfo(age);
// console.log(result);

function getUserInfo(age:number=27,sharp:string='short'):string{
    let a:string = '一个'+age+'岁';
    if(sharp!=undefined){
        a = a+sharp;
    } 
    return a+'的人';
}

let result1:string = getUserInfo(18,'tall');
// console.log(result1);

function getInfo1(...ask:string[]):string{
    let a = '找到了';
    for(let i=0;i<ask.length;i++){
        a += ask[i];
        if(i<ask.length-1){
            a +='、';
        }
    }
    return a+'的人';
}
let result2:string = getInfo1('高','大','富','厉害');
console.log(result2);