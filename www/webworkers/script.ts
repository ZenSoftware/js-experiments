const startFibButton = document.querySelector('#startFibButton') as HTMLButtonElement;
const spinner = document.querySelector('#spinner') as HTMLElement;
const resultContainer = document.querySelector('#resultContainer') as HTMLPreElement;

function showLoading(show: boolean) {
  if (show) spinner.removeAttribute('hidden');
  else spinner.setAttribute('hidden', '');
}

startFibButton?.addEventListener('mousedown', () => {
  showLoading(true);
  const result = fib(45);
  resultContainer.innerHTML = result.toString();
  showLoading(false);
});

function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
