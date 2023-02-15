const input = document.getElementById("timeCount")
const result = document.getElementById("current-time")
let currentValue =0;
let timerValue =null;

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        currentValue =''
        currentValue =Math.floor(input.value)
        if(Number.isInteger(currentValue)&& currentValue>0){
            timer(currentValue)
        }
        else{
            result.innerText =0;
        }
       
    }
})

function timer(currentValue){
    clearInterval(timerValue);
    timerValue= setInterval(() => {
            // console.log(input.value)
            result.innerText = currentValue --
            if( currentValue<0){
                clearInterval(timerValue)
            }
        }, 1000);
    }
   