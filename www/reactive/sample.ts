import { fromEvent } from 'rxjs';

let click$ = fromEvent(document, 'click');

click$.subscribe(e => {
  console.log('Clicked', e);
});
