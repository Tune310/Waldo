
var button = document.querySelectorAll('input')
var show = document.getElementById('screen')
var operations = document.body.querySelectorAll('operators')


// button[0] is using the variable button

for(var i= 0; i < button.length; i += 1){
	if(button[i].value != '='){
		button[i].addEventListener('click', clickButton) 
	} else {
		button[i].addEventListener('click', function(){
			show.innerHTML = eval(show.innerHTML)
		})
	}
	
	
	function clickButton() {
		// console.log(this.value)
		var show = document.getElementById('screen');
		show.innerHTML += this.value
		console.log(this.value)
	}



	// if(val === 'C'){
		// show.innerHTML = '0'
	// }else if(val === '='){
		// show.innerHTML = eval()
	// }

  }


 
	
	// for(var i= 0; i < operations.length; i += 1){
	// 	operators[i].addEventListener('click', clickOperator)

	// 	function clickOperator() {
	// 		var show = document.getElementById('screen')
	// 		var val = show.innerHTML= this.value;
	// 	}
	// }

	




	//when i click this button
	//display number one on the calculator
	//console log '1'
// }