const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScore = document.getElementById('user');
const compScore = document.getElementById('comp');
const message = document.querySelector('.message > h2');
let userCount = 0;
let compCount = 0;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}
function win(userChoice, computerChoice){
    const smallUserWord ='user'.fontsize(3).sup();
    const smallCompWord ='comp'.fontsize(3).sup();
    const user_div = document.getElementById(userChoice);
    userCount++
    userScore.innerHTML = userCount;
    compScore.innerHTML = compCount;
    message.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord} 🍩`;
    user_div.classList.add('win-green');
    setTimeout(()=>{user_div.classList.remove('win-green')}, 300);
}
function loss(userChoice, computerChoice){
    const smallUserWord ='user'.fontsize(3).sup();
    const smallCompWord ='comp'.fontsize(3).sup();
    const user_div = document.getElementById(userChoice);
    compCount++
    userScore.innerHTML = userCount;
    compScore.innerHTML = compCount;
    message.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord} 🍩`;
    user_div.classList.add('red-loss');
    setTimeout(()=>{user_div.classList.remove('red-loss')}, 300);
}
function draws(userChoice, computerChoice){
    const user_div = document.getElementById(userChoice);
    message.innerHTML = 'It"s a drawww 😜!!!';
    user_div.classList.add('gray-draw');
    setTimeout(()=>{user_div.classList.remove('gray-draw')}, 300);
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
        win(userChoice, computerChoice);
        break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
        loss(userChoice, computerChoice);
        break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
        draws(userChoice, computerChoice);
        break;
    }
}

function main(){
rock.addEventListener('click', ()=>{
    game('rock');
})
paper.addEventListener('click', ()=>{
    game('paper');
})
scissors.addEventListener('click', ()=>{
    game('scissors');
})
}
main()