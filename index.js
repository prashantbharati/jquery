$("h1").click(function () {
  console.log("someone clicked");
});

$("input").keypress(function () {
  console.log("keypress");
});

$("h1").hover(function () {
  console.log("someone hovered");
});
$("button").click(function () {
  //   $("div").slideToggle(600, function () {
  //     console.log("fadded out");
  //   });

  //   $("div").fadeOut(600, function () {
  //     console.log("faded");
  //   });

  $("div").fadeToggle(600, function () {
    console.log("faded");
  });
});
