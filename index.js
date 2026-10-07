const upperdiv = document.getElementById("upper-div")
const extender = document.querySelector(".fa-angles-down")
let holdtime;
streached = false;
upperdiv.addEventListener("mousedown",()=>{
    streached = false
    console.log("mousedown1")
    upperdiv.classList.add("stretching")
    navlogs.classList.add("stretching")
    holdtime = setTimeout(() => {
        console.log("mousedown")
        streached = true
        upperdiv.classList.remove("stretching")
        upperdiv.classList.add("stretched")
        navlogs.classList.remove("stretching")
        navlogs.classList.add("stretched")
    },300);
});
upperdiv.addEventListener("mouseup",()=>{
    clearTimeout(holdtime)
    if(!streached) {
        upperdiv.classList.remove("stretching")
        upperdiv.classList.remove("stretched")
        navlogs.classList.remove("stretching")
        navlogs.classList.remove("stretched")
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
const navlogs = document.getElementById("nav-logs")
console.log(navlogs)
const aboutsec = document.getElementById("about")
const aboutcon = document.querySelectorAll(".aboutcon")
aboutcon.forEach(content =>{
    aboutsec.addEventListener("mouseenter",()=>{
    content.classList.add("arranged")
    console.log("loloput")
    })
    aboutsec.addEventListener("mouseleave",()=>{
    content.classList.remove("arranged")
    })
})

let images = ["img/image.png",
    "img/image.png",
    "img/image1.png",]
let currentimage = 0;
let hovertime = null;
    

const aboutimg = document.querySelector("#imagediv img")
aboutimg.addEventListener("mouseenter",()=>{
    if(hovertime) clearInterval(hovertime);

    hovertime = setInterval(() => {
        currentimage = (currentimage + 1) % images.length;
        aboutimg.src = images[currentimage];

    },700);
});
aboutimg.addEventListener("mouseleave",()=>{
    clearInterval(hovertime)
})
