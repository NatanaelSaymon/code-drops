const carouselSimple = document.querySelector(".js-carousel--simple")

new Glider(carouselSimple, {
    slidesToShow: 2,
    slidToScroll: 2,
    draggable: true,
    dots: '.js-carousel--dots',
    arrows: {
        prev: '.js-carousel--simple-prev',
        next: '.js-carousel--simple-next',
    },
    scrollLock: true,
})

const carouselResponsive = document.querySelector(".js-carousel--responsive")

new Glider(carouselResponsive, {
    slidesToShow: 1,
    slidToScroll: 1,
    draggable: true,
    dots: '.js-carousel--responsive-dots',
    arrows: {
        prev: '.js-carousel--responsive-prev',
        next: '.js-carousel--responsive-next',
    },
    scrollLock: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }
    ]
})