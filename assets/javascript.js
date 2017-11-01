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



	//push values to firebase
	database.ref().push({
		name: name,
		destination: destination,
		frequency: frequency,
		nextArrival: nextArrival,
	});
});

	//dynamically create a table from jquery using tbody

	var trains = firebase.database().ref();
	
	trains.on('child_added', function(data){
		//this creates the row that I'll append the <td>'s to
		r = $("<tr>");
		//create a td using jquery and append values for each item in the row
		var name = $("<td>");
		name.append(data.val().name);
		r.append(name);
		
		var destination = $("<td>");
		destination.append(data.val().destination);
		r.append(destination);
		
		var frequency = $("<td>");
		frequency.append(data.val().frequency);
		r.append(frequency);


		var firstTrainElement = $("<td>");
		var firstTrain = moment(data.val().nextArrival, "HH:mm");

		// This moment.js value will be used to calulate the minutes away and the next train time
		var currentTime = moment();


		var frequency = data.val().frequency;
	
		//take the train start time and add the frequency to it until it's a time in the future
		do {
		firstTrain.add(frequency, 'm') 
		}
		while (firstTrain < currentTime);

		firstTrainElement.append(firstTrain.format("hh:mm a"));

		r.append(firstTrainElement);

		//calculate how many minutes the next train time is from now
		var minutesAwayElement = $("<td>");
		minutesAway = firstTrain - currentTime;
		minutesAway = moment(minutesAway).minutes();
		minutesAwayElement.append(minutesAway);
		r.append(minutesAwayElement);





		//append all of the table data to the table
		$("tbody").append(r);


});
});