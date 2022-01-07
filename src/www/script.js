const testButton = document.getElementById('test-button');
const testDiv = document.getElementById('test-div');

testButton.onclick = () => {
  fetch('http://localhost:7080')
    .then(res => res.json())
    .then(data => {
      testDiv.innerHTML = JSON.stringify(data);
    })
    .catch(err => {
      testDiv.innerHTML = JSON.stringify(err);
    });
};
