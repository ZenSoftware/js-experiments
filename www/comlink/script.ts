import * as Comlink from 'comlink';

const sampleButton = document.querySelector('#sampleButton') as HTMLButtonElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLHeadingElement;
const userInput = document.querySelector('#userInput') as HTMLInputElement;

const worker = new Worker('worker.ts');
const com = Comlink.wrap(worker) as any;

sampleButton.addEventListener('mousedown', async () => {
  const input = parseInt(userInput.value);
  const result = await com.fib(input);
  resultContainer.innerHTML = result;
});
