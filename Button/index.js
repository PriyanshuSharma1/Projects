const btnelement= document.querySelector(".button");
 btnelement.addEventListener("mouseover",(event)=>{
    const x= event.pageX - btnelement.offsetLeft;
    const y= event.pageY - btnelement.offsetTop;

    btnelement.style.setProperty("--xPos", x + "px");
    btnelement.style.setProperty("--yPos", y + "px");

 });