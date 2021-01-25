const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');
let taPulando = false;
let position = 0;

function handleKeyUp(event) {
    //Capturando a tecla Espaço
    if (event.keyCode === 32) {
        //Se não estiver pulando, vai pular
        if (!taPulando){
        //Invocando a função para pular
        pula();
        }
    } 
}
// Criando a função para pular
function pula(){
    // setando a posição para 0 com let para alterar depois
    
    //Setando está pulando
    taPulando = true;
    //Criando efeito de pulo
    let intervaloPulo = setInterval(() => {
        //Definindo intervalo máximo de 150 px para subir
        if (position >= 150) {
            //Limpando intervalo
            clearInterval(intervaloPulo);
            //Descendo
            let intervaloDesce = setInterval(() => {
                //Definindo limite de 0 para chão
                if (position <=0){
                    //Limpando intervalo
                    clearInterval(intervaloDesce);
                    //Setando não está pulando
                    taPulando = false;
                } else {
                position -= 20;
                dino.style.bottom =position + 'px';
            }
            }, 20)

        } else{
        //subindo
        position += 20;
        dino.style.bottom =position + 'px';
        }
    }, 20)
}

//Criando o Cactus na tela
function criandoCactus(){
    //Criando a Div
    const cactus = document.createElement('div');
    //Setando a posição do cactus
    let cactusPosition = 1850;
    //Setando numeros randomicos para os cactus
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus');
    cactus.style.left = 1850 + 'px';
    fundo.appendChild(cactus);

    //Movimentando o Cactus
    let intervaloEsquerda = setInterval(() => {
        
        if (cactusPosition < -60) {
            clearInterval(intervaloEsquerda);
            fundo.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition <60 && position < 60) {
            //Game Over
            clearInterval(intervaloEsquerda);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>'
        } else {
            cactusPosition -=10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(criandoCactus, randomTime);
}
criandoCactus();

document.addEventListener('keyup', handleKeyUp);