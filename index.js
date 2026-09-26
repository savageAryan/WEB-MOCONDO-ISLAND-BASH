const upperdiv = document.getElementById("upper-div")
const extender = document.querySelector(".fa-angles-down")
let holdtime;
let streached = false;
upperdiv.addEventListener("mousedown",()=>{
    streached = false
    console.log("mousedown1")
    upperdiv.classList.add("stretching")
    holdtime = setTimeout(() => {
        console.log("mousedown")
        streached = true
        upperdiv.classList.remove("stretching")
        upperdiv.classList.add("stretched")
    },700);
});
upperdiv.addEventListener("mouseup",()=>{
    clearTimeout(holdtime)
    if(!streached) {
        upperdiv.classList.remove("stretching")
        upperdiv.classList.remove("stretched")
    }
    
})
upperdiv.addEventListener("mouseleave",()=>{
    clearTimeout(holdtime)
    if(streached){
        upperdiv.classList.remove("stretching")
    }
});
extender.addEventListener("clicked",() => {
    if(streached){
        upperdiv.classList.remove("stratching")
        upperdiv.classList.remove("stretched")

    }
    
})