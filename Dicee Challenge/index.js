var p1 = Math.floor(Math.random() * 6 + 1);
var p2 = Math.floor(Math.random() * 6 + 1);

$("img.img1").attr("src", "images/dice" + p1 + ".png");
$("img.img2").attr("src", "images/dice" + p2 + ".png");
if (p1 > p2) {
  $("h1").html(" &#128681 Player 1 wins!");
} else if (p2 > p1) {
  $("h1").html("Player 2 wins! &#128681");
} else {
  $("h1").html("Game &#127884 draw");
}
