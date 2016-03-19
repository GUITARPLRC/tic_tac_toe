document.ready = function() {
	
	var counter = 0;
	var circle = 0;
	var cross = 0;
	var s1 = 1;
	var s2 = 2;
	var s3 = 3;
	var s4 = 4;
	var s5 = 5;
	var s6 = 6;
	var s7 = 7;
	var s8 = 8;
	var s9 = 9;
	var xWin = 0;
	var oWin = 0;
	var square = document.getElementsByClassName("square");
	var board = document.getElementById("board");
	var symbol = "";
	
	board.addEventListener("click", userClick, false);
	
	function userClick() {
		
		 counter++;
		 
		if (counter % 2 === 0) {
			symbol = "O";
			circle++;
		} else {
			symbol = "X";
			cross++;
		}		
		
		square.textContent = symbol;
		
		console.log(symbol);
		
		check();
		
	}
	
	function check() {
		
		for (var i = 0; i < 9; i++) {
			if (square[i].textContent === "X" ) {
				xWin += square[i].value;
			} else {
				oWin += square[i].value;
			}
		}
		
		
		
	}
	
	
	/*
	* 1 2 3 = 6  win
	* 1 4 7 = 12 win
	* 1 5 9 = 15 win
	* 2 5 8 = 15 win
	* 3 5 7 = 15 win
	* 3 6 9 = 18 win
	* 
	*
	*/
	
	
}