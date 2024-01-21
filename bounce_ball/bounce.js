var timer;
var marginTop=360;
var bottomToTop=true;
var gravity = 1;


document.getElementById("gravity").value = gravity;
//method to jump the ball
function jumpBall () {
    
    gravity = Number(document.getElementById("gravity").value);
    console.log(gravity);
    let vy = (2*gravity*(marginTop-60))**0.5;
    vy = Math.floor(vy)
    var ball=document.getElementById("ball");
    if(bottomToTop){
        marginTop -= vy*0.5;
    }else{
    
        // let gravity = gravity*(-1);
        if(marginTop + vy >360 ){
            marginTop = 360;
        }
        else{
            marginTop += vy*0.5;
        }
    }
     
    ball.style.marginTop= marginTop+"px";
    if(marginTop<=60){
        bottomToTop=false;
        marginTop = 61;
    }
    if(marginTop>=360){
        bottomToTop=true;
    }
}
 
//method to handle start/stop of jumping ball
function start(){
    var btn=document.getElementById("start-btn");
    if(btn.innerHTML.trim()==='Start'){
        //start jumping the ball
        timer=setInterval(function () {
            jumpBall();         
        },60);
        btn.innerHTML='Stop';
    }else{
        //stop jumping the ball
        clearInterval(timer);
        btn.innerHTML='Start';
    }
}