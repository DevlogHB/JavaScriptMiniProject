const playOneBtn = document.querySelector('.form__btn__play1');
const resetBtn = document.querySelector('.form__btn__reset');
const playTwoBtn = document.querySelector('.form__btn__play2');

const playOneScore = document.querySelector('.form__score__play1');
const playTwoScore = document.querySelector('.form__score__play2');

const scoreNum = 5;
const reserScore =0;
let playOneNewScore = 0;
let playTwoNewScore = 0;
let isMaxScore = false;

playOneBtn.addEventListener('click', ()=>{
    if(!isMaxScore)
    {
        playOneNewScore += 1;
        playOneScore.innerText = playOneNewScore;
        if(playOneNewScore === scoreNum)
        {
            isMaxScore=true;
        }
    }
    
    
});

playTwoBtn.addEventListener('click', ()=>{
    if(!isMaxScore)
    {
        playTwoNewScore += 1;
        playTwoScore.innerText = playTwoNewScore;
        if(playTwoNewScore === scoreNum)
        {
            isMaxScore=true;
        }
    }
});

resetBtn.addEventListener('click', ()=>{
    resetScore();
})

function resetScore (){
    playOneScore.innerText = reserScore;
    playTwoScore.innerText = reserScore;
    playOneNewScore = reserScore;
    playTwoNewScore = reserScore;
    isMaxScore= false;
}