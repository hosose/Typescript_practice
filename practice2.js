function add(a, b) {
    return a + b;
}
var 더하기 = function (a, b) { return a + b; };
var 덧셈 = function (a, b) { return a + b; };
var push = function (config) {
    if (typeof config === 'string') {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
var superPrint = function (arr) {
    arr.forEach(function (i) { return console.log(i); });
};
superPrint([1, 2, 3, 4]);
superPrint([true, false]);
superPrint(['a', 'b', 'c']);
superPrint([1, 2, 3, true, false, 'a', 'b']);
var genericFunc = function (a, b) { return a[1]; };
var n = genericFunc([1, 2, 3, 4], 'a');
var boolean = genericFunc([true, false], 4);
var string = genericFunc(['a', 'b', 'c'], false);
var mix = genericFunc([1, 2, 3, true, false, 'a', 'b'], []);
console.log(n);
