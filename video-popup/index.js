const btnel=document.querySelector(".btn");
const closeIcon=document.querySelector(".close-icon")
const trailerContainerel= document.querySelector(".trailer-container")
const videoel= document.querySelector("video")
btnel.addEventListener("click",()=>
{
    trailerContainerel.classList.remove("active");
})
closeIcon.addEventListener("click",()=>{
    trailerContainerel.classList.add("active");
    videoel.pause();
    videoel.currentTime=0;
})