var button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick(event) {
  event.target.style.backgroundColor = 'chartreuse'
}
