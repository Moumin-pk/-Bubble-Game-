var hit = 0;
var culter = 0;

// multiple bubble make loop
function makeBubble(){
    var clutter = '';
    for(var i =1; i<=120 ; i++){
       var num = Math.floor(Math.random() * 10);
       clutter += `<div class="bubble">${num}</div>`;
    }
   
    document.querySelector('.panel-bot').innerHTML = clutter;
}

// Timer in 60s
function runTime(){
    var time = 60 ;
setInterval(function(){
     
     if(time > 0){
        time--;
       var stoptime = time = time <= 10? '0'+time :time;
        document.querySelector('#timeinterval').textContent = time;
     }else{
        clearInterval(stoptime);
        document.querySelector('.panel-bot').innerHTML = `<h1>Game is Over!♥️</h1>`
        document.querySelector('.panel-top').innerHTML = `<h2> Your Score is : ${culter}</h2>`
        document.querySelector('.panel-top').style.backgroundColor = 'red';
        document.querySelector('.bottom').style.backgroundColor = 'red';
         
        
     }

}, 1000);
}

// target num call in display hit
function hitFun(){
    hit = Math.floor(Math.random()*10);
    document.querySelector('#hit').innerHTML = hit; 
}

// click function ,check value again refresh the valu
function panelbot(){
document.querySelector('.panel-bot').addEventListener('click',function(dets){
    var num = (Number(dets.target.textContent));
    if(hit === num){
        makeBubble();
        hitFun();
        scoreFun();
       
    }
})
}

// increasing score +10 on one click
function scoreFun(){
culter += 10;
document.querySelector('#scoreval').innerHTML = culter;
}

// function declation
panelbot();
hitFun();
runTime();
makeBubble();

