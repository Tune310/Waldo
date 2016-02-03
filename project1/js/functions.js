var playerOne
var playerTwo
var points
var colors = ['red', 'green', 'blue', 'yellow', 'orange']
// var red =("background-color", "red");
// var green = ("background-color", "green");
// var blue = ("background-color", "blue");
// var yellow = ("background-color", "yellow");
// var orange = ("background-color", "orange");
var santa = '<img class="santa" src="../css/images/santa.jpg"/>'
var hankey = '<img class="hankey" src="css/images/hankey.jpg"/>'
var cartman = '<img class="cartman" src="css/images/cartman.jpg"/>'
var decoyWaldo = '<img class="decoyWaldo" src="css/images/decoyWaldo.jpg"/>'
var waldo = '<img class="waldo" src="css/images/waldo.jpg"/>'
var katyPerry = '<img class="katyPerry" src="css/images/katyPerry.jpg"/>'
var jesusSanta = '<img class="jesusSanta" src="css/images/jesusSanta.jpg"/>'
var theGrinch = '<img class="theGrinch" src="css/images/theGrinch.jpg"/>'
var jenniferLawrence = '<img class="jenniferLawrence" src="css/images/jenniferLawrence.jpg"/>'
var boxes = $('.box')
var pics = [santa, hankey, cartman, decoyWaldo, waldo, katyPerry, jesusSanta, theGrinch, jenniferLawrence]
var div1 = document.getElementById('div#one');
var div2 = document.getElementById('div#two');
var div3 = document.getElementById('div#three');
var div4 = document.getElementById('div#four');
var div5 = document.getElementById('div#five');
var div6 = document.getElementById('div#six');
var div7 = document.getElementById('div#seven');
var div8 = document.getElementById('div#eight');
var div9 = document.getElementById('div#nine'); 
var randomDiv = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
var waldo = "div" + randomDiv;
var divs = ['div1',  'div2',  'div3',  'div4',  'div5', 'div6', 'div7', 'div8', 'div9']





		// colorBox.click(function(){
		// 	$(this).addClass(colors[Math.floor(Math.random() * colors.length)])
		// 	// alert('works')
		// })
		
		$('#play').click(function() {
			// var random = pics[Math.floor(Math.random()*pics.length)]
			// var whatDiv = divs[Math.floor(Math.random()*divs.length)]

			function fisherYates ( myArray ) {
  			var i = myArray.length;
  			if ( i == 0 ) return false;
  			while ( --i ) {
     			var j = Math.floor( Math.random() * ( i + 1 ) );
     			var tempi = myArray[i];
     			var tempj = myArray[j];
     			myArray[i] = tempj;
     			myArray[j] = tempi;
  			 	}
			}

			for(var i = 0; i < boxes.length; i++) {
				fisherYates(pics)
				boxes[i].innerHTML = pics.splice(0,1);
			}

			// $('.color').each(function(){
			// 	$(this).css('background-image', 'url("css/images/' + pics[Math.floor(Math.random()*pics.length)] + '.jpg")')
			
		// 	function wheresWaldo() {
		// 	var divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9']
		// 	var randomDiv = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		// 	var waldo = divs + randomDiv;
		// 	$(waldo).css('background-image', "url(css/images/waldo.jpg)")
		// 	console.log('works');
		// }

			})
			// wheresWaldo();
		// })

		// function wheresWaldo() {
		// 	var divs = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9']
		// 	var randomDiv = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		// 	var waldo = divs + randomDiv;
		// 	$(waldo).css('background-image', "url(css/images/waldo.jpg)")
		// 	console.log('works');
		// }

		//next get pics into the divs after play button is clicked
// });
		
