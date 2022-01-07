import './style.css';

const testButton = document.querySelector('#test-button') as HTMLButtonElement;
const testDiv = document.querySelector('#test-div') as HTMLDivElement;

testButton.onclick = () => {
  fetch('http://localhost:7080')
    .then(res => res.json())
    .then(data => {
      testDiv.innerHTML = JSON.stringify(data);
    })
    .catch(err => {
      testDiv.innerHTML = 'ERROR: ' + JSON.stringify(err);
    });
};
