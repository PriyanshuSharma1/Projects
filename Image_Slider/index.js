const nextEl=document.querySelector(".next");
let currentImage=0;
const imgsEl=document.querySelectorAll("img");
const imageContainerEl= document.querySelector(".image_container")
nextEl.addEventListener("click",()=>
{
    currentImage++
    updateImg();

})
function updateImg(){
    if(currentImage>= imgsEl.length)
    {
        currentImage=1;
    }
imageContainerEl.style.transform=`translateX(-${currentImage*500}px)`
}