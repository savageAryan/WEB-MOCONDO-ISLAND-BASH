const upperdiv = document.getElementById("upper-div")
const extender = document.querySelector("#extender")
const dis = document.getElementById("dis")
let holdtime;
streached = false;
upperdiv.addEventListener("mousedown",()=>{
    if(streached) return
    streached = false
    upperdiv.classList.add("stretching")
    navlogs.classList.add("stretching")
    holdtime = setTimeout(() => {
        streached = true
        upperdiv.classList.remove("stretching")
        upperdiv.classList.add("stretched")
        navlogs.classList.remove("stretching")
        navlogs.classList.add("stretched")
        dis.classList.add("stretched")
        dis.textContent = "Mocondo ISLAND bash is a Hackclub Mocondo Event Themed game,You are Trapped on an island called MOCONDO it's a magical island,with different talking animals some are friendly some not so much,You have to survive and escape to Human world"
    },300);
});
upperdiv.addEventListener("mouseup",()=>{
    clearTimeout(holdtime)
    if(!streached) {
        upperdiv.classList.remove("stretching")
        upperdiv.classList.remove("stretched")
        navlogs.classList.remove("stretching")
        navlogs.classList.remove("stretched")
        dis.classList.remove("stretched")
    }
    
})
upperdiv.addEventListener("mouseleave",()=>{
    clearTimeout(holdtime)
    if(streached){
        upperdiv.classList.remove("stretching")
    }
});
extender.addEventListener("click",()=>{
    upperdiv.classList.remove("stretching")
    upperdiv.classList.remove("stretched")
    navlogs.classList.remove("stretched")
    dis.classList.remove("stretched")
    streached = false
    
})
const navlogs = document.getElementById("nav-logs")
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

let images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png"]
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
        name: "Glowfly",
        image: "img/mocondo butterfly.png",
        discription: "Glow fly are flowing butterflies or Moths that Roam around the Island and Glow at night, They form Swarms and Soar through the sky, Makes the Macondo world More magical"
    },
    penny:{
        name: "Penny",
        image: "img/Penny.png",
        discription: "A Human stranded in the Island of macondo, She was a office worker while she was in Human world, now she hunts monsters"
    },
    theblob:{
        name: "Blob",
        image: "img/blob.png",
        discription: "Blob are Cute hostile Monster ready to take a bite from any humans they see, They are part of the demon realm and guard the Island  and The demon town gate"
    },
    chicken:{
        name: "Farmer Chicken",
        image: "img/chicken.png",
        discription: "A farmer with only one goal to produce as much as he can for the Macondo island's monsters or else they will Not spare his life"
    },
    monkeyking:{
        name: "MonkeyKing",
        image: "img/monkeysolo.png",
        discription: "The sole animal On macondo island who is not scared of the Monsters and fights them, he won't try to engage with them unless they ask for it,Mean time he runs a handy-dandy workshop"
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
const glowfly = document.ElementById("glowfly")
 document.addEventListener("mousemove",()=>{
    var mousex = 
 })

