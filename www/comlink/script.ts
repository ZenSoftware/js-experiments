import * as Comlink from 'comlink';

const executeButton = document.querySelector('#executeButton') as HTMLButtonElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLHeadingElement;
const userInput = document.querySelector('#userInput') as HTMLInputElement;

const worker = new Worker('worker.ts');
const com = Comlink.wrap(worker) as any;

executeButton.addEventListener('mousedown', async () => {
  const input = parseInt(userInput.value);
  const result = await com.coinChangeBottomUp([1, 2, 5], input);
  resultContainer.innerHTML = result;
});
