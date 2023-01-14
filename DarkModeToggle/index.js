const inputEl=document.querySelector(".input");
const  bodyEl=document.querySelector("body");
updateBody();
function updateBody()
{
    if(inputEl.checked){
        bodyEl.style.background="white";

    }
    else{
        bodyEl.style.background="orange";

    }
}
inputEl.addEventListener("input",()=>
{
    updateBody();
})