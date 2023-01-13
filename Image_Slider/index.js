const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");

let currentImage=1;
const imgsEl=document.querySelectorAll("img");
const imageContainerEl= document.querySelector(".image_container")
nextEl.addEventListener("click",()=>
{
    currentImage++
    updateImg();

})
prevEl.addEventListener("click",()=>{
    currentImage--;
    updateImg();
})
function updateImg(){
    if(currentImage>= imgsEl.length)
    {
        currentImage=1;
    }
    else if(currentImage<1){
        currentImage=imgsEl.length;
    }
imageContainerEl.style.transform=`translateX(-${(currentImage-1)*500}px)`
}