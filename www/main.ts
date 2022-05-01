import './style.css';

// Fetch example
const testButton = document.querySelector('#test-button') as HTMLButtonElement;
const testDiv = document.querySelector('#test-pre') as HTMLDivElement;

testButton.onclick = () => {
  fetch('http://localhost:7080')
    .then(res => res.json())
    .then(data => (testDiv.innerHTML = JSON.stringify(data, null, 2).trimEnd()))
    .catch(() => (testDiv.innerHTML = 'Error fetching'));
};

// Infinite scroll example
// https://www.youtube.com/watch?v=2IbRtjez6ag
const cards = document.querySelectorAll('.zen-card');
const cardContainer = document.querySelector('#zen-card-container') as HTMLDivElement;

const observer = new IntersectionObserver(entries => {
  entries.map(e => {
    e.target.classList.toggle('zen-show', e.isIntersecting);
  });
});

cards.forEach(c => observer.observe(c));

const lastCardObserver = new IntersectionObserver(entries => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector('.zen-card:last-child') as Element);
});

lastCardObserver.observe(document.querySelector('.zen-card:last-child') as Element);

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div');
    card.textContent = 'New card';
    card.classList.add('zen-card');
    observer.observe(card);
    cardContainer.append(card);
  }
}
