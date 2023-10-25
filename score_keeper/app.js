const playOneObj = {
    score: 0,
    display: document.querySelector('.form__score__play1'),
    btn: document.querySelector('.form__btn__play1')
}

const playTwoObj = {
    score: 0,
    display: document.querySelector('.form__score__play2'),
    btn: document.querySelector('.form__btn__play2')
}

const resetBtn = document.querySelector('.form__btn__reset');
const scoreSelect = document.getElementById('score__select');


let scoreNum = 5;
const resetScoreNum =0;
let isMaxScore = false;

function updateScores(player, opponent){
    if(!isMaxScore)
    {
        player.score += 1;
        player.display.innerText = player.score;
        
        if(player.score === scoreNum)
        {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
            isMaxScore=true;
        }
    }
}

scoreSelect.addEventListener('change', ()=>{
    scoreNum = parseInt(scoreSelect.value);
    console.log(scoreSelect.value);
    resetScore();
})

playOneObj.btn.addEventListener('click', ()=>{
    updateScores(playOneObj, playTwoObj);
    
});

playTwoObj.btn.addEventListener('click', ()=>{
    updateScores(playTwoObj, playOneObj);
});


resetBtn.addEventListener('click', resetScore)

function resetScore (){
    playOneObj.display.innerText = resetScoreNum;
    playTwoObj.display.innerText = resetScoreNum;
    playOneObj.score = resetScoreNum;
    playTwoObj.score = resetScoreNum;
    playOneObj.display.classList.remove('has-text-danger', 'has-text-success');
    playTwoObj.display.classList.remove('has-text-danger', 'has-text-success');
    isMaxScore= false;
    playOneObj.btn.disabled = isMaxScore;
    playTwoObj.btn.disabled = isMaxScore;
    
}