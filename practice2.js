function add(a, b) {
    return a + b;
}
const 더하기 = (a, b) => a + b;
const 덧셈 = (a, b) => a + b;
const push = (config) => {
    if (typeof config === 'string') {
        console.log(config);
    }
    else {
        console.log(config.path, config.state);
    }
};
const superPrint = (arr) => {
    arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false]);
superPrint(['a', 'b', 'c']);
superPrint([1, 2, 3, true, false, 'a', 'b']);
const genericFunc = (a, b) => a[1];
const n = genericFunc([1, 2, 3, 4], 'a');
const boolean = genericFunc([true, false], 4);
const string = genericFunc(['a', 'b', 'c'], false);
const mix = genericFunc([1, 2, 3, true, false, 'a', 'b'], []);
