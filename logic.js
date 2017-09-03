/* global moment firebase */
$(document).ready(function () {
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQ4pwXZnNRscZdzz0TXvyZYYUPOqU50_Q",
        authDomain: "train-schedule-a105e.firebaseapp.com",
        databaseURL: "https://train-schedule-a105e.firebaseio.com",
        projectId: "train-schedule-a105e",
        storageBucket: "train-schedule-a105e.appspot.com",
        messagingSenderId: "167872012760"
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database that is set in config
    var database = firebase.database();

    // Initial Values
    var trainName = "";
    var destination = "";
    var firstTrain = "";
    var frequency = 0;

    // Form Capture Button Click
    $("#submit-button").on("click", function (event) {
        event.preventDefault();

        // Grabbed values from text boxes
        trainName = $("#train-name").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#first-time").val().trim();
        frequency = parseInt($("#frequency").val().trim());

        //determine time from next train
        var now = moment();



        // Code for handling the push
        database.ref().push({
            TrainName: trainName,
            Destination: destination,
            FirstTrainTime: firstTrainMoment,
            Frequency: frequency,
            NextArrival: nextArrival.,
            MinutesAway: minutesAway,
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        });

        //clear inputs
        $("input").val('');

    });
    
    database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {

        // storing the snapshot.val() in a variable for convenience
        var sv = childSnapshot.val();

        $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
            empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

        /*
        $("#list").append('<div class="row" id="' + childSnapshot.key +'"><div class="col-sm-2" ><h5 class="">' + sv.TrainName +
            '</h5></div ><div class="col-sm-2"><h5 class="">' + sv.Destination +
            '</h5></div><div class="col-sm-2"><h5 class="">' + sv.Frequency +
            '</h5></div><div class="col-sm-2"><h5 class="">' + sv.NextArrival +
            '</h5></div><div class="col-sm-2"><h5 class="">' + sv.MinutesAway +
            '</h5></div><div class="col-sm-2"><h5 class=""><button class="deleteButton" data-key="' + childSnapshot.key + '">Delete</button>' +
            '</h5></div></div>');
        */

        $('.deleteButton').on('click', function () {
            database.ref($(this).attr('data-key')).remove();
        });

        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
        });

    database.ref().on('child_removed', function (oldChildSnapshot) {
        $('#' + oldChildSnapshot.key).remove();
    });





});




/*

$('button').on('click', function (){
$('ul').append('<li> NEW TEXT </li>')
)}


$('ul').on('click', 'li', function(){   ///Parent, then filter down
    console.log('Got A Click');
    console.log($(this));
    alert('Got That Click);

});



// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. //when value changes in database--- event happens
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.val().highBidder && snapshot.val().highPrice) {     //firebase syntax
    // Set the initial variables for highBidder equal to the stored values.
    highBidder = snapshot.val().highBidder;
    highPrice = parseInt(snapshot.val().highPrice);

    // Change the HTML to reflect the initial value
    $("#highest-bidder").html(snapshot.val().highBidder);
    $("#highest-price").html("$" + snapshot.val().highPrice);

    // Print the initial data to the console.
    console.log(snapshot.val().highBidder);
    console.log(snapshot.val().highPrice);
  }

  // Keep the initial variables for highBidder equal to the initial values
  else {

    database.ref().set({           //overrides info
      highBidder: highBidder,
      highPrice: highPrice
    });

    // Change the HTML to reflect the initial value
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html("$" + highPrice);

    // Print the initial data to the console.
    console.log("Current High Price");
    console.log(highBidder);
    console.log(highPrice);
  }

  // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid

$("#submit-bid").on("click", function() {
  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = parseInt($("#bidder-price").val().trim());

  // Log the Bidder and Price (Even if not the highest)
  console.log(bidderName);
  console.log(bidderPrice);

  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });

    // Log the new High Price
    console.log("New High Price!");
    console.log(bidderName);
    console.log(bidderPrice);

    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
    highBidder = bidderName;
    highPrice = parseInt(bidderPrice);

    // Change the HTML to reflect the new high price and bidder
    $("#highest-bidder").html(bidderName);
    $("#highest-price").html("$" + bidderPrice);
  }

  else {

    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

  // Prevent default behavior
  event.preventDefault();
});
*/
