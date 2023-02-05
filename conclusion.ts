type Players<E> = {
  name: string;
  extraInfo: E;
};

type HosoExtra = {
  favFood: string;
};

type HosoPlayer = Players<HosoExtra>;

const hososese: HosoPlayer = {
  name: 'hosose',
  extraInfo: {
    favFood: 'maratang',
  },
};

const jack: Players<null> = {
  name: 'jack',
  extraInfo: null,
};

//array는 이렇게 generic을 줄 수 있다.
type ArrayNumber = Array<number>;
