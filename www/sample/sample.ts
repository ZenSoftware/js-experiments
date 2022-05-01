import { fromEvent } from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.subscribe(e => {
  const mouseEvent = e as MouseEvent;
  console.log(`Click: ${mouseEvent.x}, ${mouseEvent.y}`);
});
