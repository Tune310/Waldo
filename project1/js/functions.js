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


		colorBox.click(function(){
			$(this).addClass(colors[Math.floor(Math.random() * colors.length)])
			// alert('works')
		})
	

});
		


// ///Look at this than delete it
// $("p").on({
//     mouseenter: function(){
//         $(this).css("background-color", "lightgray");
//     }, 
//     mouseleave: function(){
//         $(this).css("background-color", "lightblue");
//     }, 
//     click: function(){
//         $(this).css("background-color", "yellow");
//     } 
// }); /// Conitinue here by working with this


// Phillipe color change
