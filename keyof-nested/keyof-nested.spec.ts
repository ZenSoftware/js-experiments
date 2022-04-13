import { get } from './keyof-nested';

test('gets property described by its string path', () => {
  const person = {
    name: 'John',
    age: 30,
    dog: {
      name: 'Rex',
    },
  };

  expect(get(person, 'dog.name')).toEqual('Rex');
});
