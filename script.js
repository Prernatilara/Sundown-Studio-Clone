// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function page4Animation(){
    const elemC = document.querySelector("#elem-container");
    const fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter",()=>{
        fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave",()=>{
        fixed.style.display = "none";
    })
    const elems = document.querySelectorAll(".elem");
    elems.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}

const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const rightDiv = document.querySelector(".right-div");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const leftDivp1 = document.querySelector(".left-divp1");
const leftDivp2 = document.querySelector(".left-divp2");
const leftDivp3 = document.querySelector(".left-divp3");

h1.addEventListener("click",()=>{
    rightDiv.style.backgroundImage = "url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg)";
    h1.style.color = "white";
    h2.style.color = "#504A45";
    h3.style.color = "#504A45";
    line1.style.backgroundColor = "red"
    line2.style.backgroundColor = "#504A45"
    line3.style.backgroundColor = "#504A45"
    leftDivp1.style.display = "block";
    leftDivp2.style.display = "none";
    leftDivp3.style.display = "none";

})
h2.addEventListener("click",()=>{
    rightDiv.style.backgroundImage = "url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp)";
    h2.style.color = "white";
    
    h1.style.color = "#504A45";
    h3.style.color = "#504A45";
    line1.style.backgroundColor = "#504A45";
    line2.style.backgroundColor = "red";
    line3.style.backgroundColor = "#504A45";
    leftDivp1.style.display = "none";
    leftDivp2.style.display = "block";
    leftDivp3.style.display = "none";
})
h3.addEventListener("click",()=>{
    rightDiv.style.backgroundImage = "url(https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg)";
    h3.style.color = "white";
    
    h2.style.color = "#504A45";
    h1.style.color = "#504A45";
    line1.style.backgroundColor = "#504A45";
    line2.style.backgroundColor = "#504A45";
    line3.style.backgroundColor = "red";
    leftDivp1.style.display = "none";
    leftDivp2.style.display = "none";
    leftDivp3.style.display = "block";
})

// responsiveness
function menuAnimation(){
    const blackBox = document.querySelector(".black-box");
    const menu = document.querySelector(".menu");
    const bars = document.querySelector(".fa-bars");
    const cut = document.querySelector("nav .menu .fa-xmark");
    const navImg = document.querySelector("nav img");
    bars.addEventListener("click",()=>{
        blackBox.style.top = "30vw";
        bars.style.display="none";
        cut.style.display="inline";
    
        navImg.style.opacity = "0";
    });
    cut.addEventListener("click",()=>{
        blackBox.style.top = "-100%";
        bars.style.display = "inline";
        cut.style.display= "none";
        navImg.style.opacity = "100%";
    })
}
function loaderAnimation(){
    const loader = document.querySelector("#loader");
    setTimeout(() => {
        loader.style.top = "-100%";
    }, 3300);
}
page4Animation();
menuAnimation();
loaderAnimation();