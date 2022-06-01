import * as Comlink from 'comlink';

const sampleButton = document.querySelector('#sampleButton') as HTMLButtonElement;

const worker = new Worker('worker.ts');
const com = Comlink.wrap(worker) as any;

sampleButton.addEventListener('mousedown', async () => {
  const result = await com.fib(200);
  alert(`Result: ${result}`);
  console.log(await com.memo);
});
