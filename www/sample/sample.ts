import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.subscribe(e => {
  console.log(`Click: ${e.offsetX}, ${e.offsetY}`);
});
