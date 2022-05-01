import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { of, take, throwError } from 'rxjs';

describe('observer-spy', () => {
  it('should have all demos work', () => {
    const fake$ = of('first', 'second', 'third');
    const observerSpy = subscribeSpyTo(fake$);

    expect(observerSpy.getFirstValue()).toEqual('first');
    expect(observerSpy.receivedNext()).toEqual(true);
    expect(observerSpy.getValues()).toEqual(['first', 'second', 'third']);
    expect(observerSpy.getValuesLength()).toEqual(3);
    expect(observerSpy.getFirstValue()).toEqual('first');
    expect(observerSpy.getValueAt(1)).toEqual('second');
    expect(observerSpy.getLastValue()).toEqual('third');
    expect(observerSpy.receivedComplete()).toEqual(true);
  });

  it('should error', () => {
    const fake$ = throwError(() => new Error('spy error'));
    const observerSpy = subscribeSpyTo(fake$, { expectErrors: true });

    expect(observerSpy.receivedError()).toEqual(true);
    expect(observerSpy.getError()).toEqual(new Error('spy error'));
  });
});
