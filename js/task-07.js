
const inputRange = document.querySelector('#font-size-control');

const textSpan = document.getElementById('text');


inputRange.addEventListener('input', event => {
    
    textSpan.style.fontSize = Number(event.currentTarget.value) + 'px';
});

