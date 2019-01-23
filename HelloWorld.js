"use strict";
var a = 123;
var b = 123.456;
var c = true;
// console.log(a);
// console.log(b);
// console.log(c);
var sex1;
(function (sex1) {
    sex1[sex1["male"] = 0] = "male";
    sex1[sex1["female"] = 1] = "female";
    sex1[sex1["middle"] = 2] = "middle";
})(sex1 || (sex1 = {}));
var sex2;
(function (sex2) {
    sex2["male"] = "\u7537";
    sex2["female"] = "\u5973";
    sex2["middle"] = "\u4E2D";
})(sex2 || (sex2 = {}));
// console.log(sex1.middle);
// console.log(sex2.middle);
var d;
d = '123';
// console.log(d);
function getInfo(age) {
    return '年龄：' + age + '岁了。';
}
var age = 18;
var result = getInfo(age);
// console.log(result);
function getUserInfo(age, sharp) {
    if (age === void 0) { age = 27; }
    if (sharp === void 0) { sharp = 'short'; }
    var a = '一个' + age + '岁';
    if (sharp != undefined) {
        a = a + sharp;
    }
    return a + '的人';
}
var result1 = getUserInfo(18, 'tall');
// console.log(result1);
function getInfo1() {
    var ask = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ask[_i] = arguments[_i];
    }
    var a = '找到了';
    for (var i = 0; i < ask.length; i++) {
        a += ask[i];
        if (i < ask.length - 1) {
            a += '、';
        }
    }
    return a + '的人';
}
var result2 = getInfo1('高', '大', '富', '厉害');
console.log(result2);
