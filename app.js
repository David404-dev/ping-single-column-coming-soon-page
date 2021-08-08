const inputEl = document.getElementById('input');
const inputValue = inputEl.value;
const errorMsg = document.querySelector('.invalid');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  handleError();
});

function handleError() {
  if (inputValue === '') {
    inputEl.classList.add('error');
    errorMsg.classList.add('error-p');
    errorMsg.style.display = 'block';
  }
}
