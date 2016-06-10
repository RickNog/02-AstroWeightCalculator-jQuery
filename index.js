
var planets = [
  ['Sun', 27.9],
  ['Jupiter', 2.54],
  ['Neptune', 1.19],
  ['Saturn', 1.08],
  ['Earth', 1],
  ['Moon', 0.1655],
  ['Mars', 0.3895],
  ['Jupiter', 2.640],
  ['Saturn', 1.139],
  ['Uranus', 0.917],
  ['Neptune', 1.148],
  ['Pluto', 0.06]
];

//Loop to work with planets array
for  (var i = 0; i < planets.length; i++) {
  $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#planets");
};

// This function takes the id's "planets" and "weight" and multiplies them providing the result.
$(document).ready(function() {
  $(".button").on("click", function() {
    var planets = $("#planets").val();
    var weight = $("#weight").val();
    var resultWeight = planets * weight;
    $("#displayResult").html("Your weight would be " + resultWeight + "lbs");
  })
});


