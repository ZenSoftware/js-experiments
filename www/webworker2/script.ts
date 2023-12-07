const myWorker = new Worker('/webworker2/worker.js');

document.getElementById('post-button')!.addEventListener('click', () => {
  myWorker.postMessage({ lily: `Can you hear me?` });
});

document.getElementById('terminate-button')!.addEventListener('click', () => {
  console.log('terminate worker');
  myWorker.terminate();
});

myWorker.onmessage = ev => {
  console.log('recieved message from worker', ev.data);
};
