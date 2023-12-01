const host = document.querySelector('#host') as HTMLDivElement;
const shadow = host.attachShadow({ mode: 'open' });
const sampleSpan = document.createElement('span');
sampleSpan.innerHTML = 'sample span';
shadow.appendChild(sampleSpan);

const styleShadowButton = document.querySelector('#style-shadow') as HTMLButtonElement;
styleShadowButton.addEventListener('click', () => {
  const styleTemplate = document.querySelector('#style-template') as HTMLTemplateElement;
  shadow.appendChild(styleTemplate.content);
});

const uppercaseButton = document.querySelector('#upper') as HTMLButtonElement;
uppercaseButton.addEventListener('click', () => {
  const allDocumentSpans = document.querySelectorAll('span');
  allDocumentSpans.forEach(s => {
    s.innerText = s.innerText.toLocaleUpperCase();
  });
});
