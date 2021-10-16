let treino = document.querySelector('.treinar');
let jogo = document.querySelector('.jogar');
let rodada = document.querySelector('.rodada');
let time1 = document.querySelector('.time1')
let time2 = document.querySelector('.time2')
let time1final = document.querySelector('.time1final')
let time2final = document.querySelector('.time2final')


let numeroRodada = 1;

let sorteioPlayer = null;
let sorteioAdversario = null;

let skillTreino = 0;
let skillAdversario = 0;

let controleTreino = true;
let controleJogo = false;

let nomeTime1 = 'Vasco';
let nomeTime2 = ['Flamengo', 'Santos', 'Internacional']


time1.innerText = nomeTime1 + ' (' + skillTreino + ')'
time2.innerText = nomeTime2[0] + ' (' + skillAdversario + ')'


const sortear = () => {
    if(controleTreino == true){
        controleTreino = false;
        
        skillTreino = Math.round((Math.random()*9)+1)
        time1.innerText = nomeTime1 + ' (' + skillTreino + ')'
        
        skillAdversario = Math.round((Math.random()*9)+1);
        time2.innerText = nomeTime2[0] + ' (' + skillAdversario + ')'

        controleJogo = true
    } else {
        console.log('controle treino')
    }
}

const jogar = () => {
    if(controleJogo == true){
        controleJogo = false;
        
        sorteioPlayer =  Math.round((Math.random()*9)+1)*skillTreino;
        sorteioAdversario =  Math.round((Math.random()*9)+1)*skillAdversario;
        
        time1final.innerText = sorteioPlayer;
        time2final.innerText = sorteioAdversario;

        if(sorteioPlayer > sorteioAdversario){
            console.log('mensagem venceu')
        } else {
            console.log('mensagem perdeu')
        }

        numeroRodada++
        rodada.innerText = numeroRodada
        
        controleTreino = true
    } else {
        console.log('controle jogo')
    }
}