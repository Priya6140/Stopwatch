let [milliseconds,seconds] = [0,0];
let timerRef = document.querySelector('.displayTime');
let int = null;
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
function displayTimer() {
    milliseconds = ++milliseconds;
    if (milliseconds === 100) {  
        milliseconds = 0;
        seconds = ++seconds;
      }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? + milliseconds : milliseconds;
    timerRef.innerHTML = `${s} : ${m}`;
}
document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});
document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds] = [0,0];
    timerRef.innerHTML = '00 : 00';
});
