import * as Comlink from 'comlink';

const sampleButton = document.querySelector('#sampleButton') as HTMLButtonElement;

sampleButton.addEventListener('mousedown', () => {
  console.log('clicked');
  init();
});

async function init() {
  const worker = new Worker('worker.ts');
  // WebWorkers use `postMessage` and therefore work with Comlink.
  const obj = Comlink.wrap(worker) as any;
  alert(`Counter: ${await obj.counter}`);
  await obj.inc();
  alert(`Counter: ${await obj.counter}`);
}
