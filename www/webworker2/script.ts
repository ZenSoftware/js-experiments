const myWorker = new Worker('/webworker2/worker.js');

document.getElementById('sample-post')!.addEventListener('click', () => {
  myWorker.postMessage({ lily: `Can you hear me?` });
});

myWorker.onmessage = ev => {
  console.log('recieved message from worker', ev.data);
};
