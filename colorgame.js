var numOfSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var dispcolor = document.querySelector("#pickcolor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();
function init(){
	//mode button listeners
	for(var i=0; i<modeButton.length; i++){
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
			
		})
	}

	//change the picked color at the display
	dispcolor.textContent = pickedColor;

	for(var i=0; i< squares.length; i++){
	//add click event listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of clicked square
			clickedColor = this.style.backgroundColor;
			//compare color to picked color.
			if(clickedColor === pickedColor){
				message.textContent = "Correct!!";
				resetbtn.textContent = "Play again?";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try again!!";
			}
		})

	}

	reset();

}




function reset(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);

	//pick a new color to be guesses
	pickedColor = pickColor();
	//change color display to new picked color
	dispcolor.textContent = pickedColor;
	message.textContent = " ";
	resetbtn.textContent = "New Game";
	//give new colors to our squares
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
	
}


resetbtn.addEventListener("click",function(){
	reset();
	
})



function changeColor(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		//change color to match color
		squares[i].style.backgroundColor = color;
	}

	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length); 
	return(colors[random]);
}

function generateRandomColors(num){
	//make an array
	var arr=[];

	//repeat num times
	for(var i=0; i < num ; i++){
		//add num random colors to array
		arr.push(randomColor());
	}
	

	//return that array
	return arr;
}

function randomColor(){

	//pick a red from 0-255
	var red = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var green = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
}
