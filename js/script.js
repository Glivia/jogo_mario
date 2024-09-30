const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
       mario.classList.remove('jump'); 
    }, 500);
}

const loop = setInterval(()=>{
    const canoPosicao = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPosition);

    if (canoPosicao <= 120 && canoPosicao > 0 && marioPosition < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${canoPosicao}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '30px';

        document.getElementById("gameover").style.visibility = "visible";
    }
},10);

document.addEventListener('keydown', jump);