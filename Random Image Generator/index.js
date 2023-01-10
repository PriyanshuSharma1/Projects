const ImgContainerEl= document.querySelector(".image-container");
const btnEl=document.querySelector(".btn");
btnEl.addEventListener("click",()=>{
addNewImg();
})
function addNewImg(){
const newImg=document.createElement("img");
newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*200)}`
ImgContainerEl.appendChild(newImg);
}