import { io } from 'socket.io-client';

const socket = io('http://localhost:7081', {
  transports: ['websocket'],
  query: { x: 42 },
});

// socket.on('connect_error', err => {
//   console.log(`connect_error due to ${err.message}`);
// });
socket.on('msgToClient', val => {
  console.log('msgToClient', val);
});

const button = document.querySelector('#emitBtn');
button?.addEventListener('mousedown', () => {
  socket.emit('msgToServer', { test: 'me' });
  console.log('emitting');
});
