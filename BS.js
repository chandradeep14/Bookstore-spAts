
const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
  const buttons = card.querySelectorAll('.btn1');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});

const card = document.querySelector('.flip-card');
const buttons = document.querySelectorAll('.btn1');