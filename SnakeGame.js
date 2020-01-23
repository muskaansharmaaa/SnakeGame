var ele=document.getElementById("main");
var pos=0;
var id=null;
var score=0;

var vx=10;
var vy=0;

var sx=0;
var sy=0;
var fx=0;
var fy=0;
function start()
{
 if(id==null)
 {
 id=setInterval(move,100);
 }
 //clearInterval stops the calling infinte to a limit 
// clearInterval(id);
   drawFood();


}
function move()
{
 if(pos<300)
{pos++;
ele.style.left=pos+'px';
}
else
{
 clearInterval(id);
 id=null;
 pos=0;
}
}

document.onkeydown=divDir;
function divDir(e)
{
if(e.keyCode==37)
{
 vx=-30;
 vy=0;

}
else if(e.keyCode==38)
{
 vx=0;
 vy=-30;
}
else if(e.keyCode==39)
{
 vx=30;
 vy=0;

}
if(e.keyCode==40)
{
 vx=0;
 vy=30;
}
}

function move(){

sx=sx+vx;
sy=sy+vy;

if(sx==fx&&sy==fy)
{
 score++;
 drawFood();

 updateScore();

}
if(sx>570)
{
  sx=0;
  score=0;
  updateScore();
}
if(sx<0)
{
  sx=570;
  score=0;
  updateScore();
}
if(sy>570)
{
 sy=0;
 score=0;
 updateScore();

}
if(sy<0)
{
 sy=570;
 score=0;
 updateScore();
}

document.getElementById("snake").style.left=sx+'px';
document.getElementById("snake").style.top=sy+'px';

}

function drawFood()
{
      fx=Math.floor(Math.random()*19)*30;
      fy=Math.floor(Math.random()*19)*30;

      var food=document.getElementById("food");
      food.style.left=fx+'px';
      food.style.top=fy+'px';

}
function updateScore()
{
document.getElementById("score").innerHTML=score;
}



