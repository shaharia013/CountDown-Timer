// variables

const music = new Audio("music/music.mp3");

let countDate = new Date('Dec 25, 2021 00:00:00').getTime(); // ending time

// getTime method makes the countDate variable hold the miliseconds since January 1 1970, 00.00.00.0000 GMT . 

const countDown = (music) => {
    let now = new Date().getTime(); 
    //The getTime() method returns the number of milliseconds

   let gap = countDate - now;
   console.log(gap);
   
   //two subsequent getTime() calls on newly generated Date objects, give the time span between these two calls.

    let second = 1000; // since our unit of measurement in miliseconds and 1 second  = 1000 miliseconds
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day)); // since the gap is in miliseconds so to find the d we need to divide the gap by day
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / second);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('mins').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(()=>{
    countDown(music.play())
},1000); // calling the countDown function after every 1000 miliseconds

if(gap<0){
   alert('TIMES UP!!');
}

