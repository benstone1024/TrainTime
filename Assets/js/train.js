






var config = {
    apiKey: "AIzaSyAOM3ydnHWvi3hyZVJaK4ItQ3Gcx2U9V-0",
    authDomain: "train-time-96633.firebaseapp.com",
    databaseURL: "https://train-time-96633.firebaseio.com",
    projectId: "train-time-96633",
    storageBucket: "train-time-96633.appspot.com",
    messagingSenderId: "969157426714"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //button for adding train 
  $("#add-train").on("click", function(event) {
    event.preventDefault();

    
// train input
var trainName = $("train-name-input").val().trim();
var destination =$("destination-input").val().trim();
var firstTrain =$("first-train-input").val().trim(),"08/14/2018").format('lll');
var frequency =$("train-frequency").val().trim();


var newTrain = {
    train:trainName,
    place:Destination,
    startTime:firstTrain,
    howOften:frequency,
};

//uploads travel data to the database
database.ref().push(newTrain);

console.log(newTrain.train)
console.log(newTrain.place)
console.log(newTrain.startTime)
console.log(newTrain.howOften)

alert("Train successfully added");

// clears all of the input fields

$("train-name-input").val("")
$("destination-input").val("")
$("first-train-input").val("")
$("train-frequency").val("")

});

//Firebase event for adding employee to the database 
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().train;
    var destination =childSnapshot.val().place;
    var firstTrain =childSnapshot.val().startTime;
    var frequency = childSnapshot.val().howOften;

    //train info 
    
    console.log(trainName)
    console.log(destination)
    console.log(firstTrain)
    console.log(frequency)

    //
    var trainStartPretty = moment.unix(trainStart).format("08/14/2018");

    //create the new row

    var 