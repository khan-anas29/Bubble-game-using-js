// to store bubbles
var clutter="";

for (var i=1 ;i<=180;i++){
    // We can give i but we need random numbers of 1 digit
    var num= Math.floor(Math.random()*10)
    clutter = clutter + `<div class="bubble">${num}</div>`
    // clutter +=`<div class="bubble">${num}</div>`
}

document.querySelector(".panel-bottom").innerHTML = clutter