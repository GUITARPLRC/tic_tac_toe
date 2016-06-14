var square = document.getElementsByClassName("square"),
    start = document.getElementById("start");
    restart = document.getElementById("restart"),
    message = document.getElementById("message"),
    win = [7, 56, 73, 84, 146, 273, 292, 448], //winning score check
    user = 0, //user score
    comp = 0, //computer score
    weapons = document.getElementsByName("weapon"),
    userWeapon = "X",
    compWeapon = "O";

for (var i = 0; i < square.length; i++) {
  
  square[i].addEventListener("click", nextMove, false);
  
}

start.addEventListener("click", checkWeapon, false);
restart.addEventListener("click", startOver, false);
restart.disabled = true;
disableClick();

function checkWeapon() {
  
  if (weapons[1].checked) {
    
    userWeapon = "O";
    compWeapon = "X";
    
  } else {
    
    userWeapon = "X";
    compWeapon = "O";
    
  }
  
  restart.disabled = false;
  start.disabled = true;
  enableClick();
  
}

function nextMove() {
  
  while (this.textContent === "") {
    
    this.textContent = userWeapon;
    user += parseInt(this.getAttribute("value"));
    
    checkWin();
  
    if (checkWin() == false) { // check if computer needs a turn
    
      compMove();
      
    }
    
  }
  
}

function compMove() {
  
  var randNum = Math.floor(Math.random() * 9); // 0 - 8 for square array index
  
  if (square[randNum].textContent === "") {
    
    switch(randNum) {
      
      case 0:
      square[0].textContent = compWeapon;
      comp += parseInt(square[0].getAttribute("value"));
      break;
      case 1:
      square[1].textContent = compWeapon;
      comp += parseInt(square[1].getAttribute("value"));
      break;
      case 2:
      square[2].textContent = compWeapon;
      comp += parseInt(square[2].getAttribute("value"));
      break;
      case 3:
      square[3].textContent = compWeapon;
      comp += parseInt(square[3].getAttribute("value"));
      break;
      case 4:
      square[4].textContent = compWeapon;
      comp += parseInt(square[4].getAttribute("value"));
      break;
      case 5:
      square[5].textContent = compWeapon;
      comp += parseInt(square[5].getAttribute("value"));
      break;
      case 6:
      square[6].textContent = compWeapon;
      comp += parseInt(square[6].getAttribute("value"));
      break;
      case 7:
      square[7].textContent = compWeapon;
      comp += parseInt(square[7].getAttribute("value"));
      break;
      case 8:
      square[8].textContent = compWeapon;
      comp += parseInt(square[8].getAttribute("value"));
      break;
      
    }
    
  } else {
    
    compMove();
    
  }
  
  checkWin();
  
};

function checkWin() {
  
  var count = 0;
  
  for (var i = 0; i < win.length; i++) {
    
    if ((user & win[i]) === win[i]) { //user wins
      
      message.textContent = "You have defeated the Machine";
      disableClick();
      return true;
      
    } else if ((comp & win[i]) === win[i]) { //comp wins
      
      message.textContent = "You been slain, try again";
      disableClick();
      return true;
      
    }
  }
  
  for (var j = 0; j < square.length; j++) {
    
    if (square[j].textContent === "X" || square[j].textContent === "O") {
      
      count++;
      
    }
    
  }
  
  if (count === 9) {
    
    message.textContent = "Neither warrior has been defeated";
    disableClick();
    return true;
    
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
  restart.disabled = true;
  start.disabled = false;
  message.textContent = "";
  
}