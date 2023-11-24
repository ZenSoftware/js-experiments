import { produce, enableMapSet } from 'immer';

enableMapSet();

const usersById_v1 = new Map([['sam', { name: 'Sam Harris', country: 'US' }]]);

const usersById_v2 = produce(usersById_v1, draft => {
  const user = draft.get('sam');
  if (user) {
    user.country = 'CA';
  }
});

console.log(usersById_v2);

console.log(usersById_v1);

/**
 * This will throw an error because the draft is read-only
 */
// const sam = usersById_v2.get('sam');
// if(sam) {
//   sam.country = 'CA';
// }
