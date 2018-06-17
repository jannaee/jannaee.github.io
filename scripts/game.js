// Copyright by Jannaee Sick
// Visit www.Jannaee.com to see my other works of art :D
 'use strict';

(function play(event){
	event = event || window.event;//for cross browser capability detection of event or global object event
	var rock = document.getElementById('rock');
	var paper = document.getElementById('paper');
	var scissors = document.getElementById('scissors');
	var x = document.getElementById('humanArea');
	var y = document.getElementById('computerArea');
	var computerChoice, userChoice;
	

	function goTime(){ //animation for hands
		//slam1
		setTimeout(
			function(){
				x.className = 'humanRockUp', 
				y.className = 'computerRockUp';
			},500);
		setTimeout(
			function(){
				x.className = 'humanRockDown',
				y.className = 'computerRockDown';
			},1000);	
		
		//slam 2
		setTimeout(
			function(){
				x.className = 'humanRockUp', 
				y.className = 'computerRockUp';
			},1500);
		setTimeout(
			function(){
				x.className = 'humanRockDown',
				y.className = 'computerRockDown';
			},2000);	

		//slam 3
		setTimeout(
			function(){
				x.className = 'humanRockUp', 
				y.className = 'computerRockUp';
			},2500);	

		setTimeout(function(){
			//if the computer chooses
			if (computerChoice ==='rock'){
				y.className = 'computerRockDown';
			} else if(computerChoice === 'scissors'){
				y.className = 'computerScissors';
			} else if(computerChoice === 'paper'){
				y.className = 'computerPaper';
			}
			if(userChoice ==='rock'){
				x.className = 'humanRockDown';
			} else if(userChoice ==='scissors'){
				x.className = 'humanScissors';
			} else if(userChoice ==='paper'){
				x.className = 'humanPaper';
			}
		},3000);

	}


	function gameLogic(userChoice){
		goTime();		
		computerLogic();
		compare();		
	}


	//User Choices
	rock.addEventListener('click', function(){
		userChoice ='rock';
		gameLogic('rock');
	}, false);

	paper.addEventListener('click', function(){
		userChoice = 'paper';
		gameLogic();
	},false);

	scissors.addEventListener('click', function(){
		userChoice = 'scissors';
		gameLogic();
	},false);



	function computerLogic(){
	computerChoice = Math.floor(Math.random()*6);
	//Randomized Computer Choice
			if (computerChoice<=1) {
				computerChoice = 'rock';
			} else if(computerChoice >=2 && computerChoice <=3){
				computerChoice = 'scissors';
			} else if(computerChoice >=4){
				computerChoice = 'paper';
			}	
	}
	function compare(){
	var result;

		if (userChoice === computerChoice){
			   result = 'It\'s a tie!';
		} else if(userChoice === 'rock'){
			if(computerChoice==='scissors')	{
				result = 'You win!!';
			}else if(computerChoice==='paper'){
				result = 'You lose!';
			}
		} else if(userChoice === 'scissors'){
			if(computerChoice==='rock'){
				result = 'You lose!';
			}else{
				result = 'You win!';
			}
		} else if (userChoice ==='paper') {
			if (computerChoice ==='rock') {				
				result = 'You win!';
			}else if(computerChoice==='scissors'){
				result = 'You lose!';
			}
		}

		setTimeout(function(){
			alert(result + ' '+'You picked ' + userChoice + ' & the computer picked ' + computerChoice);
		},3500);	

	}
})();
