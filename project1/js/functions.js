$('document').ready(function(){

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



		colorBox.click(function(){
			$(this).addClass(colors[Math.floor(Math.random() * colors.length)])
			// alert('works')
		})
	

});
		

