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
});

//dynamically create a table from jquery using tbody

	var trains = firebase.database().ref();
	
	trains.on('child_added', function(data){
		console.log(data.val());
		console.log(data.val().name);
		r = $("<tr>");
		var name = $("<td>");
		console.log(name)
		name.append(data.val().name);
		r.append(name);
		var destination = $("<td>");
		destination.append(data.val().destination);
		r.append(destination);
		var frequency = $("<td>");
		frequency.append(data.val().frequency);
		r.append(frequency);

//**************** get date difference ************************

  /*    var addDate = moment(data.val().startDate);
		console.log(addDate);
		var dateTime = new Date(moment());
		var interimDate = moment(dateTime).format("MM/DD/YY");
		var endDate = moment(endDate);
  		//console.log('Difference is ', endDate.diff(addDate, 'months'), 'months');
  		var diffDate = endDate.diff(addDate, 'months')
  		console.log(diffDate);  */

//*****************************************************************
		//var nextArrival = $("<td>");
		//nextArrival.append(data.val().nextArrival);
		//console.log(moment(nextArrival, 'HH:mm').format('hh:mm a'));

		$("tbody").append(r);








});
});