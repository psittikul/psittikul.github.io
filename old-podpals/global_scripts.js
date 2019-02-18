/* Scripts for front page */

function openModal() {
    $("#imgModal").fadeIn(300);
}

function openModal2() {
    $("#imgModal2").fadeIn(300);
}

function closeModal() {
    $("#imgModal").fadeOut(300);
}

function closeModal2() {
    $("#imgModal2").fadeOut(300);
}

var imgIndex = 0;

function slideControls(n) {
    showSlides(imgIndex += n);
}

function slideControls2(n) {
    showSlides2(imgIndex += n);
}

function currentSlide(n) {
    showSlides(imgIndex = n);
}

function currentSlide2(n) {
    showSlides2(imgIndex = n);
}

function showSlides(n) {
    var i;
    var slides = $(".imgSlides");
    if (n > slides.length - 1) {
        imgIndex = 0;
    }
    if (n < 0) {
        imgIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //    for (i = 0; i < dots.length; i++) {
    //        dots[i].className = dots[i].className.replace(" active", "");
    //    }
    slides[imgIndex].style.display = "grid";
    //dots[imgIndex - 1].className += " active";
}

function showSlides2(n) {
    var i;
    var slides = $(".imgSlides2");
    if (n > slides.length - 1) {
        imgIndex = 0;
    }
    if (n < 0) {
        imgIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //    for (i = 0; i < dots.length; i++) {
    //        dots[i].className = dots[i].className.replace(" active", "");
    //    }
    slides[imgIndex].style.display = "grid";
    //dots[imgIndex - 1].className += " active";
}
