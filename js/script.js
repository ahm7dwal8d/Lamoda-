
// Setting Box Section 

let settingBox = document.querySelector(".setting-box")
let settingBoxIcon = document.querySelector(".setting-box .icon")

settingBoxIcon.addEventListener("click", function () {
    settingBox.classList.toggle("active")
    this.classList.add("active")
})

let colorEl = document.querySelectorAll(".setting-box .color ul li")

let mainColor = localStorage.getItem("color-option")

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-Color", mainColor)
    colorEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.color === mainColor) {
            el.classList.add("active")
        }
    })
}

colorEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        colorEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.documentElement.style.setProperty("--main-Color", e.target.dataset.color)
        localStorage.setItem("color-option", e.target.dataset.color)
    })
})

let themeEl = document.querySelectorAll(".setting-box .theme li")

let mainBackground = localStorage.getItem("background-option")

if (mainBackground !== null) {
    themeEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.theme === mainBackground) {
            el.classList.add("active")
            document.body.style.background = el.dataset.theme;
        }
    })
}


themeEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        themeEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.body.style.background = e.target.dataset.theme;
        localStorage.setItem("background-option", e.target.dataset.theme)
    })
})

let sliderEl = document.querySelectorAll(".setting-box .slider-option li") 

sliderEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        sliderEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        sliderStatus = e.target.dataset.slider
        if (sliderStatus === "true") {
            sliderStatus = true;
            randomSlider()
            console.log(sliderStatus)
        } else {
            sliderStatus = false;
            console.log(sliderStatus)
            clearInterval(sliderInterval)
        }
    })
})

let sliderStatus;
let sliderInterval;

function randomSlider() {
    if (sliderStatus === true) {
        sliderInterval = setInterval(() => {
            lanSlider.append(lanSlide[0])
            document.querySelector(".landing .container").classList.add("active")
        }, 5000)
    } else {
        
    }
}

randomSlider()

let fontEl = document.querySelectorAll(".setting-box .fonts li")

let mainFont = localStorage.getItem("font-option")

if (mainFont !== null) {
    fontEl.forEach((el) => {
            el.classList.remove("active")
            if (el.dataset.font === mainFont) {
                el.classList.add("active")
                document.body.style.setProperty("font-family", mainFont)
            }
        })
}

fontEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        fontEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.body.style.setProperty("font-family", e.target.dataset.font)
        localStorage.setItem("font-option", e.target.dataset.font)
    })
})

let resetButton = document.querySelector(".setting-box button")

resetButton.addEventListener("click", function () {
    localStorage.removeItem("color-option")
    localStorage.removeItem("background-option")
    localStorage.removeItem("font-option")
    window.location.reload()
})

// Header Section 
let header = document.querySelector(".header")
let burgerIcon = document.querySelector(".header .burger-icon")
let headerLinks = document.querySelector(".header ul")


burgerIcon.addEventListener("click", function () {
    let overly = document.createElement("div")
    overly.className = "header-overly"
    document.body.appendChild(overly)
    overly.appendChild(headerLinks)
    let closeButton = document.createElement("span")
    closeButton.className = "close-button"
    let buttonText = document.createTextNode("X")
    closeButton.appendChild(buttonText)
    headerLinks.appendChild(closeButton)
    document.addEventListener("click", function (el) {
        if (el.target.className === "close-button" || el.target.className === "header-overly") {
            overly.remove()
        }
    })
})

// Make Scrolling Animation 

$(".header ul a").on("click", function () {
    $("html, body").animate({
        scrollTop: $("." + $(this).data("scroll")).offset().top - $(".header").innerHeight()
    })
    $(".header-overly").remove()
})

// Landing Section 
// Make Landing Animation After Page Make Refress
window.onload = function () {
    document.querySelector(".landing .container").classList.add("active")
}


let lanSlider = document.querySelector(".landing .slider")
let lanSlide = lanSlider.getElementsByClassName("slide")

function lanPrev () {
    lanSlider.prepend(lanSlide[lanSlide.length - 1])
    document.querySelector(".landing .container").classList.add("active")
}
function lanNext () {
    lanSlider.append(lanSlide[0])
    document.querySelector(".landing .container").classList.add("active")
}

$(".landing .main").click(() => {
    $("html, body").animate({
        scrollTop: $("." + $(".landing .main").data("lan")).offset().top - $(".header").innerHeight()
    })
})

// Facts Section 

let factsSection = document.querySelector(".facts")
let factsSpan = document.querySelectorAll(".facts span")
let factsSectionOffSetTop = factsSection.offsetTop;
let windowHeight = window.innerHeight;
let started = false

function startCounter (el) {
    let goal = el.dataset.goal;
    let counte = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(counte)
        }
    })
}

// Section Section 

let sectionHead = document.querySelectorAll(".section .section-head span")
let sectionBoxs = document.querySelectorAll(".section .section-content .all")

sectionHead.forEach((span) => {
    span.addEventListener("click", function () {
        sectionHead.forEach((span) => {
            span.classList.remove("active")
        })
        this.classList.add("active")
    })
    span.addEventListener("click", function () {
        sectionBoxs.forEach((box) => {
            box.style.display = "none"
        })
        document.querySelectorAll(span.dataset.section).forEach((el) => el.style.display = "flex")
    })
})

let sectionResSlider = document.querySelector(".section .section-content .responsive .slider")
let sectionResSlide = sectionResSlider.getElementsByClassName("slide")

setInterval(() => {
        sectionResSlider.append(sectionResSlide[0])
}, 5000)

function resPrev () {
    sectionResSlider.prepend(sectionResSlide[sectionResSlide.length - 1])
}

function resNext () {
    sectionResSlider.append(sectionResSlide[0])
}

// Our Work Section 
let workSpans = document.querySelectorAll(".work .work-head span")
let workBoxs = document.querySelectorAll(".work .row > div")

workSpans.forEach((span) => {
    span.addEventListener("click", function () {
        workSpans.forEach((span) => {
            span.classList.remove("active")
            this.classList.add("active")
        })
    })
    span.addEventListener("click", function () {
        workBoxs.forEach((box) => {
            box.style.display = "none"
        })
        document.querySelectorAll(span.dataset.work).forEach((el) => el.style.display = "block")
    })
})

let workImg = document.querySelectorAll(".work img")

workImg.forEach((img) => {
    img.addEventListener("click", function (e) {
        let overly = document.createElement("div")
        overly.className = "overly-box"
        document.body.appendChild(overly)
        let slider = document.createElement("div")
        slider.className = "slider"
        overly.appendChild(slider)
        for (let i = 0; i < workImg.length; i++) {
            let boxImg = document.createElement("div")
            boxImg.className = `box-img`
            slider.appendChild(boxImg)
            if (img.alt !== "") {
                let head = document.createElement("h3")
                head.className = `box-head`
                let headText = document.createTextNode(`${img.alt}-${i + 1}`)
                head.appendChild(headText)
                boxImg.appendChild(head)
            }
            let imgBox = document.createElement("img")
            imgBox.src = workImg[i].src
            boxImg.appendChild(imgBox)
        }
        let workSlider = document.querySelector(".overly-box .slider")
        let workBox = workSlider.getElementsByClassName("box-img")
        let btn = document.createElement("div")
        btn.className = "btn"
        overly.appendChild(btn)
        let prevButton = document.createElement("button")
        prevButton.className = "prev"
        let prevSpan = document.createElement("span")
        prevSpan.className = "fas fa-angle-left"
        prevButton.appendChild(prevSpan)
        btn.appendChild(prevButton)
        let nextButton = document.createElement("button")
        nextButton.className = "next"
        let nextSpan = document.createElement("span")
        nextSpan.className = "fas fa-angle-right"
        nextButton.appendChild(nextSpan)
        btn.appendChild(nextButton)
        prevButton.addEventListener("click", function () {
            workSlider.prepend(workBox[workBox.length - 1])
        })
        nextButton.addEventListener("click", function () {
            workSlider.append(workBox[0])
        })
        let closeButton = document.createElement("span")
        closeButton.className ="close-button"
        let closeButtonText = document.createTextNode("X")
        closeButton.appendChild(closeButtonText)
        overly.appendChild(closeButton)
        document.addEventListener("click", function (e) {
            if (e.target.className === "close-button" || e.target.className === "overly-box") {
                overly.remove()
            }
        })
    })
})

// Skills Section 

let skillsSection =  document.querySelector(".skills")
let skillsOffsetTop = skillsSection.offsetTop
let skillsSpan = document.querySelectorAll(".skills .prog span")
let counteSpan = document.querySelectorAll(".skills .prog-head span")

function counteDown(e) {
    let goal = e.dataset.num;
    let counte = setInterval(() => {
        e.textContent++
        if (e.textContent === goal) {
            clearInterval(counte)
        }
    })
}

// Choose Section 
let tapHead = document.querySelectorAll(".choose .tap-head span")
let tapContent = document.querySelectorAll(".choose .tap-content p")

tapHead.forEach((span) => {
    span.addEventListener("click", function () {
        tapHead.forEach((span) => {
            span.classList.remove("active")
            this.classList.add("active")
        })
    })
    span.addEventListener("click", function () {
        tapContent.forEach((box) => {
            box.style.display = "none"
        })
        document.querySelectorAll(span.dataset.tap).forEach((el) => el.style.display = "block")
    })
})

let panel = document.querySelectorAll(".choose .panel")

panel.forEach((box) => {
    box.addEventListener("click", function () {
        panel.forEach((box) => {
            box.classList.remove("active")
            this.classList.add("active")
        })
    })
})

// Testimonlis Section 

let testimonlisSlider = document.querySelector(".testimonlis .slider")
let testimonlisSlide = testimonlisSlider.getElementsByClassName("slide")

setInterval(() => {
    testimonlisSlider.append(testimonlisSlide[0])
}, 5000)

function testPrev() {
    testimonlisSlider.prepend(testimonlisSlide[testimonlisSlide.length - 1])
}

function testNext() {
    testimonlisSlider.append(testimonlisSlide[0])
}

// Client Section 
let clientSlider = document.querySelector(".client .slider")
let clientSlide = clientSlider.getElementsByClassName("slide")

setInterval(() => {
    clientSlider.append(clientSlide[0])
}, 5000)

// Button To Top 
let buttonToTop = document.querySelector("span.up")

buttonToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

// Scrolling 

window.onscroll = function () {
    // Header Section 
        window.scrollY >= 800 ? header.classList.add("active") : header.classList.remove("active")
    // Facts Section 
    if (window.scrollY >= factsSectionOffSetTop - 400) {
        if (!started) {
            factsSpan.forEach((span) => {
                startCounter(span)
            })
        }
        started = true;
    }
    // Skills Section 
    if (window.scrollY >= skillsOffsetTop) {
        skillsSpan.forEach((span) => {
            span.style.width = span.dataset.prog
        })
        if (!started) {
            counteSpan.forEach((span) => {
                counteDown(span)
            })
        }
        started = true
    }
    // Button To Top 
    window.scrollY >= 800 ? buttonToTop.classList.add("active") : buttonToTop.classList.remove("active")
}

