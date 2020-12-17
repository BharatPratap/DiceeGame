var p1 = Math.floor(Math.random()*6+1);
var p2 = Math.floor(Math.random()*6+1);
document.getElementsByClassName('img1')[0].setAttribute('src','images/dice'+p1+'.png');
document.getElementsByClassName('img2')[0].setAttribute('src','images/dice'+p2+'.png');
if(p1>p2)
{
    document.querySelector("h1").innerHTML = " &#128681 Player 1 wins!";
}
else if(p2>p1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins! &#128681";
}
else
{
    document.querySelector("h1").innerHTML = "Game &#127884 draw";
}