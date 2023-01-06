const animals=["Cow" , "Horse" , "Cat" , "Dog"];
const containerEl=document.querySelector(".container")
animals.forEach(animal=>{
    const btnEl= document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText=animal;
    btnEl.style.backgroundImage="url(images/"+animal+".jpg)"
    containerEl.append(btnEl);
    const audioEl= document.createElement("audio");
    audioEl_src="sounds/"+animal+".wav";
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click",()=>{
        audioEl.play();
    })



})