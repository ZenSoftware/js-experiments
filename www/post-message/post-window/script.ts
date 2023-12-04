window.addEventListener('message', ev => {
  if (ev.origin === 'http://localhost:5173') {
    console.log(`Recieved message from:`, ev.data);
    const card = document.querySelector('#card');
    const pre = document.createElement('pre');
    pre.innerText = JSON.stringify(ev.data, undefined, '  ');
    card!.prepend(pre);
  }
});
