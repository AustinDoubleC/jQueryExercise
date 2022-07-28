// Select all divs and give them a purple background
$("div").css("background","purple")
// Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width","200px")

// Select the div with id "third" and give it a orange border
$("#third").css("border","orange 1px solid")

// Bonus: Select the first div only and change its font color to pin
$("div:first").css("color", "pink");

$("h1").text("hello, I am updated by Jquery").css("background","grey")
$("li:first").text("I changed too").css("color","red")
$("li:last").html("<a href='google.com'>Click to go to Google</a>").css("font-weight","bold")

$("img").css("width","250px")
$("img").attr("src","https://cdn.britannica.com/78/186778-050-73CF4F25/black-panther-leopards-Africa-Central-jaguars-South.jpg?w=400&h=300&c=crop")

$("input").val() //return value of input
$("h2").addClass("correct")
$("h3").removeClass("done")
$("p").toggleClass("done")