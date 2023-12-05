import { fromEvent } from 'rxjs';

const feedbackSpan = document.querySelector('#feedback') as HTMLSpanElement;

const passwordField = document.querySelector('#password') as HTMLInputElement;
const passwordInput$ = fromEvent<KeyboardEvent>(passwordField, 'keydown');
passwordInput$.subscribe(input => {
  if (input.getModifierState('CapsLock')) feedbackSpan.innerText = 'Caps Lock On';
  else feedbackSpan.innerText = '';
});
