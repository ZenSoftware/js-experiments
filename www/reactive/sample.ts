import { fromEvent } from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.subscribe(e => {
  console.log('Clicked', e);
});
