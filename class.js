//추상 class는 new 로 새로운 class를 생성할 수 없지만
class User {
    constructor(firstNmae, lastName, nickname) {
        this.firstNmae = firstNmae;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstNmae} ${this.lastName}`;
    }
}
class charcter extends User {
    getNickName() {
        console.log('성' + this.lastName);
    }
}
const john = new charcter('John', 'Kim', 'Johny');
console.log(john.lastName); //private은 알려주지 못하는 정보라고 말해준다.. 스윗
console.log(john.nickname);
console.log(john.getFullName());
john.getNickName();
//private 은 자식 요소 및 외부 요소에서 사용할 수 없지만, protected 는 자식 요소에서는 사용 가능하다
