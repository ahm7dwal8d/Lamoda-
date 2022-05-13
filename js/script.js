
// Header Section 

$(".header .burger-icon").click(function () {

    $(".header ul").slideToggle()

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $(".header").addClass("active")

    } else {

        $(".header").removeClass("active")

    }

})

$(".header ul li a").click(function (Event) {

    Event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    $("html , body").animate({

        scrollTop: $("." + $(this).data("scroll")).offset().top - $(".header").innerHeight()

    })

})

$(window).ready(function () {

    $(".header .left").animate({

        left: 0,

        opacity: 1

    })

    $(".header .top").animate({

        top: 0,

        opacity: 1

    })

    $(".header .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    $(".header .right").animate({

        right: 0,

        opacity: 1

    })

})

// Landing Section 

let landingSlider = document.querySelector(".landing .slider")

let landingSlide = landingSlider.getElementsByClassName("slide")

function landingNext() {

    landingSlider.append(landingSlide[0])

}

function landingPrev() {

    landingSlider.prepend(landingSlide[landingSlide.length - 1])

}

setInterval(function () {

    landingSlider.append(landingSlide[0])

} , 10000)

$(window).ready(function () {

    $(".landing .top").animate({

        top: 0,

        opacity: 1

    })

    $(".landing .right").animate({

        right: 0,

        opacity: 1

    })

    $(".landing .bottom").animate({

        bottom: 0,

        opacity: 1

    })

    $(".landing .left").animate({

        left: 0,

        opacity: 1

    })

})

// Setting Box 

$(".setting-box .icon").click(function () {

    $(".setting-box").toggleClass("active")

})

$(".setting-box .color .color").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

})

document.body.classList.add(localStorage.getItem("bodyColor"))

let bodyColor = document.querySelectorAll(".setting-box .color .color")

let colorArrey = []

for (let i = 0; i < bodyColor.length; i++) {

    colorArrey.push(bodyColor[i].getAttribute("data-color"))

    bodyColor[i].addEventListener("click" , function () {

        document.body.classList.remove(...colorArrey)

        document.body.classList.add(bodyColor[i].getAttribute("data-color"))

        localStorage.setItem("bodyColor" , bodyColor[i].getAttribute("data-color") )

    })

}

// About Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        $(".about .right").animate({

            right: 0,

            opacity: 1

        })

        $(".about .left").animate({

            left: 0,

            opacity: 1

        })

        $(".about .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".about .top").animate({

            top: 0,

            opacity: 1

        })

    }

})

// Facts Section 

let factsSection = document.querySelector(".facts")

let factsOffsetTop = factsSection.offsetTop;

let factsNum = document.querySelectorAll(".facts .num")

let Started = false

function StartCounter(el) {

    let Goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++;


        if (el.textContent === Goal) {

            clearInterval(Counte)

        }

    })

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".facts").offset().top - 400) {

        $(".facts .right").animate({

            right: 0,

            opacity: 1

        })

        $(".facts .left").animate({

            left: 0,

            opacity: 1

        })

        $(".facts .top").animate({

            top: 0,

            opacity: 1

        })

        $(".facts .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Section Section 

$(".section ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var section = $(this).data("section")

    $(".section .section-content .all").fadeOut()

    $(".section .section-content ." + section ).fadeIn()

})

let sectionImg = document.querySelector(".section .img")

let sectionSlide = sectionImg.getElementsByClassName("slide")

function sectionNext() {

    sectionImg.append(sectionSlide[0])

}

function sectionPrev() {

    sectionImg.prepend(sectionSlide[sectionSlide.length - 1])

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".section").offset().top - 400) {

        $(".section .top").animate({

            top: 0,

            opacity: 1

        })

        $(".section .left").animate({

            left: 0,

            opacity: 1

        })

        $(".section .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".section .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// History Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".history").offset().top - 400) {

        $(".history .left").animate({

            left: 0,

            opacity: 1

        })

        $(".history .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Work Section 

$(".work ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var work = $(this).data("work")

    $(".work .row .all").fadeOut()

    $(".work .row ." + work).fadeIn()

})

$(".choose ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var choose = $(this).data("choose")

    $(".choose .list p").fadeOut()

    $(".choose .list ." + choose).fadeIn()

})

$(".choose .slide-1 h4").click(function () {

    $(".choose .slide-1  p").slideToggle()

})

$(".choose .slide-2 h4").click(function () {

    $(".choose .slide-2  p").slideToggle()

})

$(".choose .slide-4 h4").click(function () {

    $(".choose .slide-4 p").slideToggle()

})
$(".choose .slide-3 h4").click(function () {

    $(".choose .slide-3  p").slideToggle()

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".work").offset().top - 400) {

        $(".work .left").animate({

            left: 0,

            opacity: 1

        })

        $(".work .top").animate({

            top: 0,

            opacity: 1

        })

        $(".work .right").animate({

            right: 0,

            opacity: 1

        })

        $(".work .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Team Section 


$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".team").offset().top - 400) {

        $(".team .left").animate({

            left: 0,

            opacity: 1

        })

        $(".team .right").animate({

            right: 0,

            opacity: 1

        })

        $(".team .top").animate({

            top: 0,

            opacity: 1

        })

        $(".team .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Skills Section 

let skillsSection = document.querySelector(".skills")

let skillsOffsetTop = skillsSection.offsetTop;

let skillsNums = document.querySelectorAll(".skills .prog-holder .num")

let started = false

function SkillsCounter(e) {

    let Nums = e.dataset.nums;

    let Counte = setInterval(function () {

        e.textContent++;

        if (e.textContent === Nums) {

            clearInterval(Counte)

        }

    })

}

let progressSpan = document.querySelectorAll(".skills .prog span")

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".skills").offset().top - 600) {

        $(".skills .top").animate({

            top: 0,

            opacity: 1

        })

        $(".skills .left").animate({

            left: 0,

            opacity: 1

        })

        $(".skills .right").animate({

            right: 0,

            opacity: 1

        })

        $(".skills .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        $(".services .top").animate({

            top: 0,

            opacity: 1

        })

        $(".services .left").animate({

            left: 0,

            opacity: 1

        })

        $(".services .right").animate({

            right: 0,

            opacity: 1

        })

        $(".services .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Choose Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".choose").offset().top - 400) {

        $(".choose .right").animate({

            right: 0,

            opacity: 1

        })

        $(".choose .left").delay(600).animate({

            left: 0,

            opacity: 1

        })

        $(".choose .top").delay(500).animate({

            top: 0,

            opacity: 1

        })

        $(".choose .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Video Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".video").offset().top - 400) {

        $(".video .top").animate({

            top: 0,

            opacity: 1

        })

        $(".video .left").animate({

            left: 0,

            opacity: 1

        })

        $(".video .right").animate({

            right: 0,

            opacity: 1

        })

        $(".video .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Blog Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".blog").offset().top - 400) {

        $(".blog .left").animate({

            left: 0,

            opacity: 1

        })

        $(".blog .top").animate({

            top: 0,

            opacity: 1

        })

        $(".blog .right").animate({

            right: 0,

            opacity: 1

        })

        $(".blog .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Testimonlis Section 

let testimonlisSlider = document.querySelector(".testimonials .slider")

let testimonialsSlide = testimonlisSlider.getElementsByClassName("slide")

setInterval(function () {

    testimonlisSlider.append(testimonialsSlide[0])

} , 10000)

function testNext() {

    testimonlisSlider.append(testimonialsSlide[0])

}
function testPrev() {

    testimonlisSlider.prepend(testimonialsSlide[testimonialsSlide.length - 1])

}

let clientSlider = document.querySelector(".clients .slider")

let clientSlide = clientSlider.getElementsByClassName("slide")

function clientNext() {

    clientSlider.append(clientSlide[0])

}

function clientPrev() {

    clientSlider.prepend(clientSlide[clientSlide.length - 1])

}

setInterval(function () {

    clientSlider.append(clientSlide[0])

} , 10000)

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".testimonials").offset().top - 400) {

        $(".testimonials .top").animate({

            top: 0,

            opacity: 1

        })

        $(".testimonials .left").animate({

            left: 0,

            opacity: 1

        })

        $(".testimonials .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Clients Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".clients").offset().top - 400) {

        $(".clients .top").animate({

            top: 0,

            opacity: 1

        })

        $(".clients .left").animate({

            left: 0,

            opacity: 1

        })

        $(".clients .right").animate({

            right: 0,

            opacity: 1

        })

        $(".clients .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Button To Top 

$("span.up").click(function () {

    $("html , body").animate({

        scrollTop: 0

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 800) {

        $("span.up").addClass("active")

    } else {

        $("span.up").removeClass("active")

    }

})


window.onscroll = function () {

    // Facts Section 

    if (window.scrollY >= factsOffsetTop - 400) {

        if (!Started) {

            factsNum.forEach((num)=> {

                StartCounter(num)

            })

        }

        Started = true  

    }

    // Skills Section 

    if (window.scrollY >= skillsOffsetTop - 400) {

        if (!started) {

            skillsNums.forEach((span)=> {

                SkillsCounter(span)

            })

        }

        started = true

        progressSpan.forEach((prog)=> {

            prog.style.width = prog.dataset.prog

        })

    }

}