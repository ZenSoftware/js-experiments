import { getFromPath, getObjectKeys } from './nested-keyof';

test('gets a property via its string path', () => {
  const person = {
    name: 'John',
    age: 30,
    dog: {
      name: 'Rex',
    },
  };

  expect(getFromPath(person, 'dog.name')).toEqual('Rex');
});

test('gets the complete list of string paths on an object', () => {
  const person = {
    name: 'zen',
    age: 30,
    dog: {
      owner: {
        name: 'zen',
      },
    },
  };

  expect(getObjectKeys(person).sort()).toEqual(
    ['name', 'age', 'dog', 'dog.owner', 'dog.owner.name'].sort()
  );
});
