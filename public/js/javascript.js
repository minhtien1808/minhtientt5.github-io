window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop < 20) {
        document.querySelector('.header').style.background = "none";


    } else {
        document.querySelector('.header').style.backgroundColor = "#161619";

        document.querySelector("heade.r").style.zindex = "10000";
    }
}
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 4
        }
    }
});