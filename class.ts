abstract class User {
  constructor(
    private firstNmae: string,
    protected lastName: string,
    public nickname: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstNmae} ${this.lastName}`;
  }
}

class charcter extends User {
  getNickName(): void {
    console.log('성' + this.lastName);
  }
}

const john = new charcter('John', 'Kim', 'Johny');
console.log(john.lastName); //private은 알려주지 못하는 정보라고 말해준다.. 스윗
console.log(john.nickname);
console.log(john.getFullName());
john.getNickName();

//private 은 자식 요소 및 외부 요소에서 사용할 수 없지만, protected 는 자식 요소에서는 사용 가능하다
