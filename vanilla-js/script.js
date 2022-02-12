$("#start-btn").click(function () {
  $("#start-btn").fadeOut("slow", function () {
    $("#login-container").fadeIn();
  });
});

$("#login-btn").click(function () {
  $("#login-container").fadeOut(function () {
    let name = $("#fname").val();
    $("#username").text(name);
    $("#welcome-container").fadeIn();
  });
});

$(".close-btn").click(function () {
  $("#login-container, #welcome-container").fadeOut(800, function () {
    $("#start-btn").fadeIn(800);
  });
});
