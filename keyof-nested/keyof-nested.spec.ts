import { get, getPaths } from './keyof-nested';

test('gets property via its string path', () => {
  const person = {
    name: 'John',
    age: 30,
    dog: {
      name: 'Rex',
    },
  };

  expect(get(person, 'dog.name')).toEqual('Rex');
});

test('gets all string paths on object', () => {
  const person = {
    name: 'zen',
    age: 30,
    dog: {
      owner: {
        name: 'zen',
      },
    },
  };

  expect(getPaths(person).sort()).toEqual(
    ['name', 'age', 'dog', 'dog.owner', 'dog.owner.name'].sort()
  );
});
