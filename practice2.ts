// 이렇게 작성하면 귀찮으니까 type을 만들어주자
type Add = (a: number, b: number) => number;
function add(a, b): Add {
  return a + b;
}

const 더하기 = (a: number, b: number) => a + b;
const 덧셈: Add = (a, b) => a + b;

//overloading(vscode에서는 overload가 안되는데 playground에서는 됩니다...)
type Configg = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Configg): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

//polymorphism  generic 사용 , 아래 3개를 다 작성할 필요 없이 generic을 사용하면 자동으로 타입을 정해준다.
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
  /*
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  */
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false]);
superPrint(['a', 'b', 'c']);
superPrint([1, 2, 3, true, false, 'a', 'b']);

//generic recap
type Generic = <T, M>(a: T[], b: M) => T;

const genericFunc: Generic = (a, b) => a[1];

const n = genericFunc([1, 2, 3, 4], 'a');
const boolean = genericFunc([true, false], 4);
const string = genericFunc(['a', 'b', 'c'], false);
const mix = genericFunc([1, 2, 3, true, false, 'a', 'b'], []);
