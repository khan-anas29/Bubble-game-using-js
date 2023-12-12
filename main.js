var timer= 60
var score=0;
// creating hitcount outside to compare with clicked and hit
var hitcount=0;



function makeBubble() {
  // to store bubbles
  var clutter = "";

  for (var i = 1; i <= 180; i++) {
    // We can give i but we need random numbers of 1 digit
    var num = Math.floor(Math.random() * 10);
    clutter = clutter + `<div class="bubble">${num}</div>`;
    // clutter +=`<div class="bubble">${num}</div>`
  }

  document.querySelector(".panel-bottom").innerHTML = clutter;
}


function runTimer() {
    var timer_Interval = setInterval(()=>{
        if (timer>0) {
            timer--;
            document.getElementById("timer").textContent=timer
        }
        else{
            // to stop seInterval inorder to save memory space
            clearInterval(timer_Interval)
            document.querySelector(".panel-bottom").innerHTML=`<h2>Game Over </br> Score is ${score}</h2>`
        }
    },1000)

    
}

function GetHit(){
    var hitcount=Math.floor(Math.random()*10)
    document.getElementById("hitval").textContent=hitcount
}


function increaseScore(){
    score +=10;
    document.getElementById("scoreCount").textContent=score;
    // this function will increase the score with respect to number of times it is called or run, thus we wont run it by default we will use some condition
}

document.querySelector(".panel-bottom")
.addEventListener("click",function(clicked_num_detail){
    // console.log(clicked_num_detail.target.textContent);
    var clicked_num= Number(clicked_num_detail.target.textContent)
    // console.log(clicked_num);
})

runTimer()
makeBubble()
GetHit()