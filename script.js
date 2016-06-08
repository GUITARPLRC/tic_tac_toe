var square = document.getElementsByClassName("square"),
    restart = document.getElementById("restart"),
    win = [7, 56, 73, 84, 146, 273, 292, 448], //winning score check
    user = 0; //user score
    comp = 0; //computer score

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", nextMove, false);
}
restart.addEventListener("click", startOver, false);

function nextMove() {
  
  if (this.textContent === "") {
    this.textContent = "X";
    user += parseInt(this.getAttribute("value"));
  }
  
  checkWin();
  
  if (!checkWin()) { // check if computer have a turn
    compMove();
  }
  
}

function compMove() {
  
  var randNum = Math.floor(Math.random() * 9); // 0 - 8 for square array index
  
  if (square[randNum].textContent === "") {
    
    switch(randNum) {
      
      case 0:
      square[0].textContent = "O";
      comp += parseInt(square[0].getAttribute("value"));
      break;
      case 1:
      square[1].textContent = "O";
      comp += parseInt(square[1].getAttribute("value"));
      break;
      case 2:
      square[2].textContent = "O";
      comp += parseInt(square[2].getAttribute("value"));
      break;
      case 3:
      square[3].textContent = "O";
      comp += parseInt(square[3].getAttribute("value"));
      break;
      case 4:
      square[4].textContent = "O";
      comp += parseInt(square[4].getAttribute("value"));
      break;
      case 5:
      square[5].textContent = "O";
      comp += parseInt(square[5].getAttribute("value"));
      break;
      case 6:
      square[6].textContent = "O";
      comp += parseInt(square[6].getAttribute("value"));
      break;
      case 7:
      square[7].textContent = "O";
      comp += parseInt(square[7].getAttribute("value"));
      break;
      case 8:
      square[8].textContent = "O";
      comp += parseInt(square[8].getAttribute("value"));
      break;
      
    }
    
  } else {
    
    compMove();
    
  }
  
  checkWin();
  
};

function checkWin() {
  
  for (var i = 0; i < win.length; i++) {
    if ((user & win[i]) === win[i]) {
      //user wins
      console.log("user wins");
      disableClick();
      return true;
    } else if ((comp & win[i]) === win[i]) {
      //comp wins
      console.log("comp wins");
      disableClick();
      return true;
    }
  }
  return false;
}

function disableClick() {
  
  for (var i = 0; i < square.length; i++) {
    square[i].style.pointerEvents = "none";
  }
  
}
function enableClick() {
  
  for (var i = 0; i < square.length; i++) {
    square[i].style.pointerEvents = "auto";
  }
  
}

function startOver() {
  
  for (var i = 0; i < square.length; i++) {
    square[i].textContent = "";
  }
  user = 0;
  comp = 0;
  enableClick();
  
}