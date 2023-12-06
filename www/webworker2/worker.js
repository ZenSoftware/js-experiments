self.addEventListener('message', ev => {
  console.log('in worker recieved: ', ev.data);
});

setInterval(() => {
  postMessage({ lily: 'Do you know who I am?' });
}, 3400);
