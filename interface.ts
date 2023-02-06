//타입을 정해주는 것 외에도 값을 정해줄 수 있다
type Nickname = string;
type Health = 1 | 10 | 100;
type Friends = Array<string>;
type Team = 'red' | 'blue' | 'yellow';
/*
type GamePlayer = {
  nickname: Nickname;
  team: Team;
  healthBar: Health;
};
*/
//object를 위한 타입스크립트 문법
interface GamePlayer {
  nickname: Nickname;
  team: Team;
  healthBar: Health;
}

const hososose: GamePlayer = {
  nickname: 'hoso',
  team: 'red',
  healthBar: 10,
};
type Food = string;
const bulgogi: Food = 'delicious';

//interface 와 type
/* interface
interface User {
  name: string;
}
interface Playerr extends User {}
const jake: Player = {
  name: 'jake',
};
*/
interface Userr {
  name: string;
}

//interface로 여러개를 나눠서 작성할 수 있다.
interface Userr {
  nickname: string;
}
interface Userr {
  health: number;
}

type Playerr = Userr & {};
const jake: Userr = {
  name: 'jake',
  nickname: 'j',
  health: 10,
};
