// $('document').ready(function(){

alert('working')

var playerOne
var playerTwo
var points
var colors = ['red', 'green', 'blue', 'yellow', 'orange']
// var red =("background-color", "red");
// var green = ("background-color", "green");
// var blue = ("background-color", "blue");
// var yellow = ("background-color", "yellow");
// var orange = ("background-color", "orange");
var colorBox = $('.color')
var pics = ['santa', 'hankey', 'cartman', 'waldo', 'santa', 'decoyWaldo']
var divs = ['div#one', 'div#two', 'div#three', 'div#four', 'div#five', 'div#six', 'div#seven', 'div#eight', 'div#nine']



		// colorBox.click(function(){
		// 	$(this).addClass(colors[Math.floor(Math.random() * colors.length)])
		// 	// alert('works')
		// })
		
		$('#play').click(function() {
			var random = pics[Math.floor(Math.random()*pics.length)]
			var whatDiv = divs[Math.floor(Math.random()*divs.length)]

			$('.color').each(function(){
				$(this).css('background-image', 'url("css/images/' + pics[Math.floor(Math.random()*pics.length)] + '.jpg")')
			})
			console.log('working')
		})
		//next get pics into the divs after play button is clicked
// });
		
