import {} from './sample';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { of, take } from 'rxjs';

describe('sample', () => {
  it('should work', () => {
    const first$ = of(1, 2, 3).pipe(take(1));
    const observerSpy = subscribeSpyTo(first$);
    expect(observerSpy.getValues()).toEqual([1]);
  });
});
