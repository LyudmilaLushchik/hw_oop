import Bowerman from '../js/bowerman';

beforeEach(() => {
  jest.resetAllMocks();
});

test('should create bowerman', () => {
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const result = new Bowerman('John', 'Bowman');
  expect(result).toEqual(expected);
});
