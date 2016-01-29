console.log('working')

cheese1 = cheeseFactory()
cheese1 === cheese2

function cheeseFactory(){
var cheese ={type: 'swiss',
		     smelly: false,
		  	 weight: 0.25,
		  	 expirationDate: new Date(2017, 0, 28)}
	return cheese
}