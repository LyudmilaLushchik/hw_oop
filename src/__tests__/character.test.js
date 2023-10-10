import Character from '../js/character';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should throw error if no name', () => {
  expect(() => new Character('', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('should throw error if name length is less than 2', () => {
  expect(() => new Character('A', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('should throw error if name length is more than 10', () => {
  expect(() => new Character('Abcdefghijk', 'Bowman')).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test('should throw error if no type', () => {
  expect(() => new Character('John', '')).toThrowError('Некорректный тип персонажа');
});

test('should throw error if type is incorrect', () => {
  expect(() => new Character('John', 'B')).toThrowError('Некорректный тип персонажа');
});

test('should create character', () => {
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  };
  const result = new Character('John', 'Bowman');
  expect(result).toEqual(expected);
});
