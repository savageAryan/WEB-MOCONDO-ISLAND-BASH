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
const mobs = {
    capybara:{
        name: "capybara",
        image: "img/capybara.png",
        discription: "Capybara is the sacred mob of the Macondo land,They are friendly and cute until you disturb their slumber, then they become aggressive and nobody can hit them since they are sacred,When they sleep glowflys sit on them and rest making them look even cute"
    },
    glowfly:{
        name: "capybara",
        image: "img/.png",
        discription: "Capybara is the sacred mob of the Macondo land,They are friendly and cute until you disturb their slumber, then they become aggressive and nobody can hit them since they are sacred,When they sleep glowflys sit on them and rest making them look even cute"
    },
    penny:{
        name: "Penny",
        image: "img/penny.png",
        discription: "Capybara is the sacred mob of the Macondo land,They are friendly and cute until you disturb their slumber, then they become aggressive and nobody can hit them since they are sacred,When they sleep glowflys sit on them and rest making them look even cute"
    },
    theblob:{
        name: "Blob",
        image: "img/blob.png",
        discription: "Capybara is the sacred mob of the Macondo land,They are friendly and cute until you disturb their slumber, then they become aggressive and nobody can hit them since they are sacred,When they sleep glowflys sit on them and rest making them look even cute"
    },
    chicken:{
        name: "Farmer Chicken",
        image: "img/chicken.png",
        discription: "Capybara is the sacred mob of the Macondo land,They are friendly and cute until you disturb their slumber, then they become aggressive and nobody can hit them since they are sacred,When they sleep glowflys sit on them and rest making them look even cute"
    },
    monkeyking:{
        name: "MonkeyKing",
        image: "img/monkeysolo.png",
        discription: "Capybara is the sacred mob of the Macondo land,They are friendly and cute until you disturb their slumber, then they become aggressive and nobody can hit them since they are sacred,When they sleep glowflys sit on them and rest making them look even cute"
    }
}
const ids = document.querySelectorAll(".ids")
const idimg = document.getElementById("idimg")
const idname = document.querySelector("#popup h2")
const iddis = document.querySelector("#popup p")
const bg = document.getElementById("bg")
const cross = document.getElementById("cross")
ids.forEach(id =>{
    id.addEventListener("click",()=>{
        const mobid = id.dataset.mob;
        const mob = mobs[mobid]
        console.log(iddis)
        idimg.src = mob.image
        idname.textContent = mob.name
        iddis.textContent = mob.discription


        bg.classList.add("show")
    })

})

cross.addEventListener("click",()=>{
    bg.classList.remove("show")
})


