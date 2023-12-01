const host = document.querySelector('#host') as HTMLDivElement;
const shadow = host.attachShadow({ mode: 'open' });
const sampleSpan = document.createElement('span');
sampleSpan.innerHTML = 'sample span';
shadow.appendChild(sampleSpan);

const uppercaseButton = document.querySelector('#upper') as HTMLButtonElement;
uppercaseButton.addEventListener('click', () => {
  const allSpans = document.querySelectorAll('span');
  allSpans.forEach(s => {
    s.innerText = s.innerText.toLocaleUpperCase();
  });
});
