type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

class human {
  name: Name;
  age?: Age;
  constructor(name: Name, age?: Age) {
    this.name = name;
    this.age = age;
  }
}

const hosose = new human('hosose', 12);
console.log(hosose);

function humanMaker(name: Name): Player {
  return {
    name,
  };
}

const hoso = humanMaker('hosose');
hoso.age = 20;
console.log(hoso);

const playerMaker = (name: Name): Player => ({ name });
const ho = playerMaker('ho');
// type readonly이므로 에러 발생
ho.name = 'hasose';
ho.age = 21;
console.log(ho);

//readonly tuple 에러 발생
const a: readonly any[] = [1, 2, 3, 4];
a[3] = 6;

//unknown
let c: unknown;
if (typeof c === 'number') {
  let d = c + 1;
}
if (typeof c === 'string') {
  let d = c.toUpperCase();
}

//void
function hello() {
  console.log('hi!');
}

//never : 에러를 발생시킬 때, 값이 아예 나올 수 없는 상황에 never가 된다.
function hi(): never {
  throw new Error('xxx');
}

function greet(name: string | number) {
  if (typeof name === 'string') {
    name;
  } else if (typeof name === 'number') {
    name;
  } else {
    name;
  }
}
