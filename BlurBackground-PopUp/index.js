const containerEl=document.querySelector(".container");
const clickBtn= document.querySelector(".btn");
const PopupEl=document.querySelector(".popup-container");
const closeIconEl=document.querySelector(".close-icon");
clickBtn.addEventListener("click",()=>
{
    PopupEl.classList.remove("active");
    containerEl.classList.add("active");
})
closeIconEl.addEventListener("click",()=>{
    PopupEl.classList.add("active");
    containerEl.classList.remove("active");

})