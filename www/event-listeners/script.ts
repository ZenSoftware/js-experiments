import './styles.css';

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent?.addEventListener(
  'click',
  e => {
    console.log('grandparent catpure');
  },
  { capture: true }
);
grandparent?.addEventListener('click', e => {
  console.log('grandparent bubble');
});

parent?.addEventListener(
  'click',
  e => {
    console.log('parent catpure');
  },
  { capture: true }
);
parent?.addEventListener('click', e => {
  console.log('parent bubble');
});

child?.addEventListener(
  'click',
  e => {
    console.log('child catpure');
  },
  { capture: true }
);
child?.addEventListener('click', e => {
  console.log('child bubble');
});

addGlobalEventListener('click', 'div', e => console.log('global event on divs'));

function addGlobalEventListener(type: string, selector: string, callback: EventListener) {
  document.addEventListener(type, e => {
    const el = e.target as HTMLElement;
    if (el.matches(selector)) callback(e);
  });
}

const newDiv = document.createElement('div');
newDiv.style.height = '300px';
newDiv.style.width = '300px';
newDiv.style.background = 'purple';
document.body.append(newDiv);
