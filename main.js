var timer= 60

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
        }
    },1000)

    
}

function GetHit(){
    var hitval=Math.floor(Math.random()*10)
    document.getElementById("hitval").textContent=hitval
}


runTimer()
makeBubble()
GetHit()