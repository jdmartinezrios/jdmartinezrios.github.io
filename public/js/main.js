var indexSlider = 1;
var indexSliderSkills = 1;
var indexSliderProjects = 1;
var timer, timerSkills, timerProjects;

window.onload = onInit();

function onInit() {
    scrollUp();
    setTimeToWebSite();
    showSlides(indexSlider);
    showSlidesSkills(indexSliderSkills);
    showSlidesProjects(indexSliderProjects);
    initTimer();
    initTimerSKills();
    initTimerProjects();
}

function showSlides(index) {
    var i;
    const slides = document.getElementsByClassName('experience-slide');
    const dots = document.getElementsByClassName("dot");

    if (index > slides.length) indexSlider = 1;
    if (index < 1) indexSlider = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[indexSlider - 1].style.display = 'block';
    dots[indexSlider - 1].className += " active";
}

function plusSlides(value) {
    closeTimer();
    showSlides(indexSlider += value);
}

function currentSlide(value) {
    closeTimer();
    showSlides(indexSlider = value)
}

function setTimeToWebSite() {
    const date = new Date();
    const year = document.getElementById('year');
    year.innerHTML = date.getFullYear();
}

function initTimer() {
    timer = setInterval(() => plusSlides(1), 10000);
}

function closeTimer() {
    clearInterval(timer);
    initTimer();
}

function showSlidesSkills(index) {
    var i;
    const slides = document.getElementsByClassName('skills-slide');
    const dots = document.getElementsByClassName("dot_skilss");

    if (index > slides.length) indexSliderSkills = 1;
    if (index < 1) indexSliderSkills = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_skills", "");
    }
    slides[indexSliderSkills - 1].style.display = 'block';
    dots[indexSliderSkills - 1].className += " active_skills";
}

function plusSlidesSKills(value) {
    closeTimerSKills();
    showSlidesSkills(indexSliderSkills += value);
}

function currentSlideSKills(value) {
    closeTimerSKills();
    showSlidesSkills(indexSliderSkills = value)
}

function initTimerSKills() {
    timerSkills = setInterval(() => plusSlidesSKills(1), 10000);
}

function closeTimerSKills() {
    clearInterval(timerSkills);
    initTimerSKills();
}

function scrollUp() {
    const main = document.getElementById("main-container");
    const home = document.getElementById("home");
    home.addEventListener('click', (e) => {
        main.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
        e.preventDefault();
        e.stopPropagation();
        return;
    }, false);
}


function showSlidesProjects(index) {
    var i;
    const slides = document.getElementsByClassName('projects-slide');
    const dots = document.getElementsByClassName("dot_projects");

    if (index > slides.length) indexSliderProjects = 1;
    if (index < 1) indexSliderProjects = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_projects", "");
    }
    slides[indexSliderProjects - 1].style.display = 'block';
    dots[indexSliderProjects - 1].className += " active_projects";
}

function plusSlidesProjects(value) {
    closeTimerProjects();
    showSlidesProjects(indexSliderProjects += value);
}

function currentSlideProjects(value) {
    closeTimerProjects();
    showSlidesProjects(indexSliderProjects = value)
}

function initTimerProjects() {
    timerProjects = setInterval(() => plusSlidesProjects(1), 10000);
}

function closeTimerProjects() {
    clearInterval(timerProjects);
    initTimerProjects();
}