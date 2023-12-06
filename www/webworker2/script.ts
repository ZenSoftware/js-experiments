if (!!window.Worker) {
  // const myWorker = new Worker('/webworker2/worker.js');

  // document.getElementById('sample-post')!.addEventListener('click', () => {
  //   myWorker.postMessage({ lily: `Can you hear me?` });
  // });

  // myWorker.onmessage = ev => {
  //   console.log('recieved message from worker', ev.data);
  // };

  // ===================================================================

  const mySharedWorker = new SharedWorker('/webworker2/shared-worker.js');

  document.getElementById('sample-shared-post')!.addEventListener('click', () => {
    mySharedWorker.port.postMessage({ zen: 'wake up' });
  });

  mySharedWorker.port.onmessage = ev => {
    console.log('main script recieved shared worker data:', ev.data);
  };
}
