var human = /** @class */ (function () {
    function human(name, age) {
        this.name = name;
        this.age = age;
    }
    return human;
}());
var hosose = new human('hosose', 12);
console.log(hosose);
function humanMaker(name) {
    return {
        name: name
    };
}
var hoso = humanMaker('hosose');
hoso.age = 20;
console.log(hoso);
var playerMaker = function (name) { return ({ name: name }); };
var ho = playerMaker('ho');
// type readonly이므로 에러 발생
ho.name = 'hasose';
ho.age = 21;
console.log(ho);
//readonly tuple 에러 발생
var a = [1, 2, 3, 4];
a[3] = 6;
//unknown
var c;
if (typeof c === 'number') {
    var d = c + 1;
}
if (typeof c === 'string') {
    var d = c.toUpperCase();
}
//void
function hello() {
    console.log('hi!');
}
//never : 에러를 발생시킬 때, 값이 아예 나올 수 없는 상황에 never가 된다.
function hi() {
    throw new Error('xxx');
}
function greet(name) {
    if (typeof name === 'string') {
        name;
    }
    else if (typeof name === 'number') {
        name;
    }
    else {
        name;
    }
}
