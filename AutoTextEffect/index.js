const containerEl= document.querySelector(".container");
const careers=["Youtuber","Dancer","Developer","Writer","Singer"]
let careerIndex=0;
let characterIndex=0;
containerEl.innerHTML= `
<h1>
            I am a Data Science Enthusiast.
        </h1>
`
updateText()
function updateText(){
    characterIndex++;

    containerEl.innerHTML= `
    <h1> I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`
    if(characterIndex==careers[careerIndex].length)
    {
        characterIndex=0;
        careerIndex++;

    }
    if(careerIndex==careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400)
}