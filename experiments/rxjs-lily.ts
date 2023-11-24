import { from, take } from 'rxjs';

from([1, 2, 3, 4, 5, 6, 7])
  .pipe(take(2))
  .subscribe(x => console.log(x));
