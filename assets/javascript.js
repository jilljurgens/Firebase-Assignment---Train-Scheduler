$(document).ready(function() {
// Initialize Firebase      
var config = {
  apiKey: "AIzaSyA5H6ZXJImI0r6NUW_MR5-slw8nvYtePo0",
  authDomain: "train-sc-4983d.firebaseapp.com",
  databaseURL: "https://train-sc-4983d.firebaseio.com",
  storageBucket: "train-sc-4983d.appspot.com"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

var name = "";
var destination = "";
var frequency = "";
var nextArrival = "";
var minutesAway = "";

$("#submit-train").on("click", function(snapshot){
	event.preventDefault();
//grab the values from the input and save them to the variable, then clear out out input form
	name = $("#train-name").val().trim();
	$("#train-name").val("");
	destination = $("#destination").val().trim();
	$("#destination").val("");
	frequency = $("#frequency").val().trim();
	$("#frequency").val("");
	nextArrival = $("#firstTrainTime").val().trim();
	$("#firstTrainTime").val("");
	minutesAway = $("#minutesAway").val().trim();
	$("#minutesAway").val("");
	console.log(name);
	console.log(frequency);
	console.log(destination);
	console.log(nextArrival);
	console.log(minutesAway);




	database.ref().push({
		name: name,
		destination: destination,
		frequency: frequency,
		nextArrival: nextArrival,
		minutesAway:minutesAway
	});

	
//dynamically create a table from jquery using tbody









});
});