(()=>{
  const hourHand = document.querySelector('.hand-hour'),
        minHand = document.querySelector('.hand-min'),
        secHand = document.querySelector('.hand-sec');
  function clock(){
     let now = new Date();
     let nowSec = now.getSeconds(),
         nowMin = now.getMinutes(),
         nowHour = now.getHours();
     // console.log(now.getSeconds());
     let secDegree = 360 / 60 * nowSec,
         minDegree = 360 / 60 * nowMin + 360 / 60 / 60 * nowSec,
         hourDegree = 360 / 12 * (nowHour % 12) + 360 / 12 / 60 * nowMin;
     secHand.style.transform = `rotate(${secDegree}deg)`;
     minHand.style.transform = `rotate(${minDegree}deg)`;
     hourHand.style.transform = `rotate(${hourDegree}deg)`;
  }

  clock(); //初始化畫面
  setInterval(clock, 1000);

})()