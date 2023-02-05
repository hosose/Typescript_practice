var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstNmae, lastName, nickname) {
        this.firstNmae = firstNmae;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstNmae, " ").concat(this.lastName);
    };
    return User;
}());
var charcter = /** @class */ (function (_super) {
    __extends(charcter, _super);
    function charcter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    charcter.prototype.getNickName = function () {
        console.log('성' + this.lastName);
    };
    return charcter;
}(User));
var john = new charcter('John', 'Kim', 'Johny');
console.log(john.lastName); //private은 알려주지 못하는 정보라고 말해준다.. 스윗
console.log(john.nickname);
console.log(john.getFullName());
john.getNickName();
//private 은 자식 요소 및 외부 요소에서 사용할 수 없지만, protected 는 자식 요소에서는 사용 가능하다
