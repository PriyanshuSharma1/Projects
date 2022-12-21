const hr= document.getElementById("hour");
const min=document.getElementById("minutes");
const sec= document.getElementById("seconds");
const ap= document.getElementById("ampm");

function updateClock()
{
    let h = new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm= "AM";
    if (h>12)
    {
        h=h-12;
        ampm="PM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;


hr.innerText=h;
min.innerText=m;
sec.innerText=s;
ap.innerText=ampm;
setTimeout(()=>
{
updateClock()
},1000)
}
updateClock();