import { fromEvent } from 'rxjs';

let popup: Window | null = null;

const openButton = document.querySelector('#open-button') as HTMLButtonElement;
const openButtonClicked = fromEvent(openButton, 'click');
openButtonClicked.subscribe(() => {
  popup = window.open('/post-message/post-window/index.html', undefined, 'width=400,height=800');
});

const postButton = document.querySelector('#post-button') as HTMLButtonElement;
const postButtonClicked = fromEvent(postButton, 'click');
postButtonClicked.subscribe(() => {
  popup?.postMessage({ message: 'I love you Lily!' }, 'http://localhost:5173');
});
