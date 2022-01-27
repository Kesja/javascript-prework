// Nie wiem czy o to dokladnie chodzilo w zadaniu z gwiazdka. ;)


const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const playerResult = document.querySelector('#player-score');
const pcResult = document.querySelector('#pc-score');
document.getElementById('result').style.display = 'flex'

let scores = {
  pc: 0, 
  player: 0
}

function buttonClicked(buttonNumber) {
  clearMessages();
  console.log(buttonNumber + ' został kliknięty');

  function displayScore(){
    playerResult.innerHTML = 'Wynik gracza: ' + scores.player;
    pcResult.innerHTML = 'Wynik komputera: ' + scores.pc;
  }

  function getMoveName(buttonNumber) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + buttonNumber);
      if (buttonNumber == 1) {
        return 'kamień';
      } else if (buttonNumber == '2') {
        return 'papier';
      } else if (buttonNumber == '3') {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + buttonNumber + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
  }

  function displayResult(playerMove, computerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
      if 
        (playerMove === 'papier' && computerMove === 'kamień' || 
        playerMove === 'kamień' && computerMove === 'nożyce' ||
        playerMove === 'nożyce' && computerMove === 'papier') {
        printMessage('Wygrywasz!');
      } else if (playerMove == computerMove) {
        printMessage('Remis!');
      } else {
        printMessage('Przegrywasz :(');
      }
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  }

  function scoreCounter(playerMove, computerMove) {
    if (playerMove == 'papier' && computerMove == 'kamień') {
      scores.player += 1;
    } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
      scores.player += 1;
    } else if (playerMove == 'nożyce' && computerMove == 'papier') {
      scores.player += 1;
    }  else if (playerMove == computerMove) {
      scores.player += 0;
      scores.pc += 0;
    } else {
      scores.pc += 1;
    }
    displayScore()
  }
  const playerMove = getMoveName(buttonNumber);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  scoreCounter(playerMove, computerMove);
  console.log(scores);
}

buttonRock.addEventListener('click', function(){ buttonClicked(1); });
buttonPaper.addEventListener('click', function(){ buttonClicked(2); });
buttonScissors.addEventListener('click', function(){ buttonClicked(3); });