import { produce, enableMapSet } from 'immer';

enableMapSet();

const usersById_v1 = new Map([['michel', { name: 'Michel Weststrate', country: 'NL' }]]);

const usersById_v2 = produce(usersById_v1, draft => {
  const user = draft.get('sam');
  if (user) {
    user.country = 'UK';
  }
});
