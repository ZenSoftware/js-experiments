const startFibButton = document.querySelector('#startFibButton') as HTMLButtonElement;
const sampleButton = document.querySelector('#sampleButton') as HTMLButtonElement;
const spinner = document.querySelector('#spinner') as HTMLElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLPreElement;

var fibWorker = new Worker('worker.ts');

fibWorker.onmessage = function (e) {
  resultContainer.innerHTML = e.data;
  showLoading(false);
};

function showLoading(show: boolean) {
  if (show) spinner.removeAttribute('hidden');
  else spinner.setAttribute('hidden', '');
}

startFibButton.addEventListener('mousedown', () => {
  resultContainer.innerHTML = '';
  showLoading(true);
  fibWorker.postMessage(45);
});

sampleButton.addEventListener('mousedown', () => {
  if (sampleButton.style.border) sampleButton.style.border = '';
  else sampleButton.style.border = '1px solid #00ffff';
});
