const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioWidth = mario.offsetLeft + innerWidth <= 720 ? 60 : 130;
  const marioStyles = window.getComputedStyle(mario);
  const marioHeigth = +marioStyles.bottom.replace('px','');

  const responsiveMarioHeigth = innerHeight <= 720 ? 50 : 100;

  if(pipePosition <= marioWidth && pipePosition > 0 && marioHeigth < responsiveMarioHeigth){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';

    if(mario.classList.contains('jump')){
      mario.style.bottom = `${innerWidth <= 720 ? '50px' : '100px'}`;
    } else {
      mario.style.bottom = 0;
    }

    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
  }
} ,10)

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);