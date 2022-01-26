// Nie wiem czy o to dokladnie chodzilo w zadaniu z gwiazdka. ;)


const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

function buttonClicked(buttonNumber) {
  clearMessages();
  console.log(buttonNumber + ' został kliknięty');

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
      if (playerMove == 'papier' && computerMove == 'kamień') {
        printMessage('Wygrywasz!');
      } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (playerMove == 'nożyce' && computerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (playerMove == computerMove) {
        printMessage('Remis!');
      } else {
        printMessage('Przegrywasz :(');
      }
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  }
  const playerMove = getMoveName(buttonNumber);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked(1); });
buttonPaper.addEventListener('click', function(){ buttonClicked(2); });
buttonScissors.addEventListener('click', function(){ buttonClicked(3); });