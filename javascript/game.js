//Set Variables
var randomNumber = 0;
var amethyst = 0;
var emerald = 0;
var peridot = 0;
var ruby = 0;

var totalScore = 0;
var wins = 0;
var losses = 0;

//Functions

function startGame () {

	//reset
	randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
	amethyst = Math.floor(Math.random() * (12 - 1) + 1);
	emerald = Math.floor(Math.random() * (12 - 1) + 1);
	peridot = Math.floor(Math.random() * (12 - 1) + 1);
	ruby = Math.floor(Math.random() * (12 - 1) + 1);
	totalScore = 0;
	console.log(randomNumber);
	console.log(amethyst);
	console.log(emerald);
	console.log(peridot);
	console.log(ruby);

	//HTML update
	$("#generatedNumber").html(randomNumber);
	$("#scoreTally").html(totalScore);



//Clicking Crystals
	$("#amethyst").click(function() {
		gemAdder(amethyst);
		$("#scoreTally").html(totalScore);
		console.log(amethyst);
	});
	$("#emerald").click(function() {
		gemAdder(emerald);
		$("#scoreTally").html(totalScore);
		console.log(emerald);
	});
	$("#peridot").click(function() {
		gemAdder(peridot);
		$("#scoreTally").html(totalScore);
		console.log(peridot);
	});
	$("#ruby").click(function() {
		gemAdder(ruby);
		$("#scoreTally").html(totalScore);
		console.log(ruby);
	});

	function gemAdder(gem) {
		totalScore += gem
		console.log(totalScore);
	}

}
startGame()

//Adding crystal click values to totalScore

//Win/Loss