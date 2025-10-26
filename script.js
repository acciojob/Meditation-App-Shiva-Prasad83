//your JS code here. If required.
 //  const playAndPause=document.getElementById("playPause");
         const timeDisplay=document.querySelector(".time-display");
        //  console.log(timeDisplay.childNodes[1],"Hi",timeDisplay.childNodes[3],"Hello");
         const playButton=timeDisplay.childNodes[1];
         const pauseButton=timeDisplay.childNodes[3];
        //  console.log(playAndPause);
         const rainVideo=document.getElementById("rain");
         const beachVideo=document.getElementById("beach");
         const rainSong=document.getElementById("rainSong");
         const beachSong=document.getElementById("beachSong");
         const switchToRain=document.getElementById("rainButton");
         const switchToBeach=document.getElementById("beachButton");
         const Timer=document.getElementById("timer");
         const twoMins=document.getElementById("two-mins");
         const fiveMins=document.getElementById("five-mins");
         const tenMins=document.getElementById("ten-mins");
          let isRain=true;
          let initial=true;
          let isPaused=false;
          let time;
          let currentTimerId;
          let remainingTime=0;
        //   let allTimerIds=[];
        //   function clearAllIntervals(){
        //     for(let timerId of allTimerIds){
        //         clearInterval(timerId);
        //     }
        //   }
    //  playAndPause.addEventListener("click",(e)=>{
    //      const currentVideo=isRain?rainVideo:beachVideo;
    //      const currentSong=isRain?rainSong:beachSong;
    //      if(e.target.innerText=="Pause"){
              
    //          clearInterval(currentTimerId);
    //         // clearAllIntervals();
    //           currentVideo.pause();
    //           currentSong.pause();
    //           e.target.innerText="Play";
    //           isPaused=true;
            
    //      }else if(e.target.innerText=="Play"){
    //         clearInterval(currentTimerId)
    //         //   clearAllIntervals();
    //         if(initial){
    //             console.log("Hello Hello Hello");
    //             timer(600);
    //             initial=false;
    //         }
    //          currentVideo.play();
    //          currentSong.play();
    //          e.target.innerText="Pause";

    //          if(isPaused){
    //            timer(remainingTime,true);
    //            isPaused=false;
    //          }
    //      }
    //  })
        
     playButton.addEventListener("click",(e)=>{
        const currentVideo=isRain?rainVideo:beachVideo;
         const currentSong=isRain?rainSong:beachSong;
        clearInterval(currentTimerId)
            //   clearAllIntervals();
            if(initial){
                // console.log("Hello Hello Hello");
                timer(600);
                initial=false;
            }
             currentVideo.play();
             currentSong.play();
            //  e.target.innerText="Pause";

             if(isPaused){
               timer(remainingTime,true);
               isPaused=false;
             }
             playButton.classList.add("hide");
             pauseButton.classList.remove("hide");
     })

     pauseButton.addEventListener("click",(e)=>{
        const currentVideo=isRain?rainVideo:beachVideo;
         const currentSong=isRain?rainSong:beachSong;
          clearInterval(currentTimerId);
            // clearAllIntervals();
              currentVideo.pause();
              currentSong.pause();
            //   e.target.innerText="Play";
              isPaused=true;
              playButton.classList.remove("hide");
              pauseButton.classList.add("hide");
     })


     switchToBeach.addEventListener("click",(e)=>{
        if(isRain==true){
            initial=true;
            Timer.innerText="";
            clearInterval(currentTimerId);
            isPaused=false;
            // clearAllIntervals();
            // playAndPause.innerText="Play";
            playButton.classList.remove("hide");
            pauseButton.classList.add("hide");
            rainSong.pause();
            rainVideo.pause();
            rainVideo.currentTime=0;
            rainSong.currentTime=0;
            beachVideo.classList.remove("hide");
            isRain=false;
            rainVideo.classList.add("hide");
        }
     });

     switchToRain.addEventListener("click",(e)=>{
        if(isRain==false){
            initial=true;
            clearInterval(currentTimerId)
            isPaused=false;
            //  clearAllIntervals();
            Timer.innerText="";
            // playAndPause.innerText="Play";
            playButton.classList.remove("hide");
            pauseButton.classList.add("hide");
            isRain=true;
            beachVideo.pause();
            beachVideo.currentTime=0;
            beachSong.pause();
            beachSong.currentTime=0;
            rainVideo.classList.remove("hide");
            beachVideo.classList.add("hide");
        }
     })
     
     twoMins.addEventListener("click",(e)=>{
        clearInterval(currentTimerId)
        // clearAllIntervals();
        initial=false;
        time=120;
        timer(time);
     })
     fiveMins.addEventListener("click",(e)=>{
            clearInterval(currentTimerId)
            // clearAllIntervals();
            initial=false;
        time=300;
        timer(time);
     })
     tenMins.addEventListener("click",(e)=>{
            clearInterval(currentTimerId);
            // clearAllIntervals();
            initial=false;
        time=600;
        timer(time);
     })
    
     function timer(time,isResume=false){
        
        let currentVideo=isRain?rainVideo:beachVideo;
        let currentSong=isRain?rainSong:beachSong;
         
        if(isResume==false){
            Timer.innerText="";
            currentSong.currentTime=0;
            currentVideo.currentTime=0;
        }
        currentSong.play();
        currentVideo.play();
        // playAndPause.innerText="Pause";
        pauseButton.classList.remove("hide");
        playButton.classList.add("hide");
      let timerId=setInterval(()=>{
        let minutes=Math.floor(time/60);
     let seconds=Math.floor(time%60);
     Timer.innerText=`${minutes>=10?minutes:"0"+minutes} : ${seconds>=10?seconds:"0"+seconds}`;
     time--;
      remainingTime=time;
      if(time<0){
        currentSong.pause();
        currentVideo.pause();
        currentSong.currentTime=0;
        currentVideo.currentTime=0;
        // playAndPause.innerText="Play";
        playButton.classList.remove("hide");
        pauseButton.classList.add("hide");
        Timer.innerText="";
        clearInterval(timerId);
      }
      },1000)
    //   let allTimerIds=[];
    //   allTimerIds.push(timerId);
    //    setTimeout(()=>{
    //     console.log("Inside set Timeout");
    //     clearInterval(allTimerIds[0]);
    //    },2000)
    //  allTimerIds.push(timerId);
    currentTimerId=timerId;
     }