$(document).ready(function() {
  $("#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTimeOfYear = $("input#time-of-year").val();
    var inputtedNotes = $("input#notes").val();
    var newPlace = { placeName: inputtedPlaceName, landmark: inputtedLandmark, timeOfYear: inputtedTimeOfYear, notes: inputtedNotes};

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-landmark").val("");
    $("input#time-of-year").val("");
    $("input#notes").val("");


    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".landmark").text(newPlace.landmark);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
      
    });
  });
});
