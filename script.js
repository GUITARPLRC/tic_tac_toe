document.ready = function() {
	
	var counter = 0;
	var square = document.getElementsByClassName("square");
	var board = document.getElementById("board");
	var symbol = "";
	
	board.addEventListener("click", userClick(this), false);
	
	function userClick(sqr) {
		
		 counter++;
		 
		if (counter % 2 === 0) {
			symbol = "O";
		} else {
			symbol = "X";
		}
		
		sqr.textContent = symbol;
		
		console.log(symbol);
		
	}
	
	
}