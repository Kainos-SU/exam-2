$(".header__slider.slider-upDown").slick({
    dots: true,
    arrows: false,
    dotsClass: "slider-upDown__dots",
    vertical: true,
    verticalSwiping: true,
});

$(".card__text-description").each((index, element)=>{
    $clamp(element, {clamp:2})
});

$(".horisontal-slider").slick({
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: '<button type="button" class="horisontal-slider__prev icon"><span class=" icon__circle"><span class=" icon__arrow"></span></span></button>',
    nextArrow: '<button type="button" class="horisontal-slider__next icon"><span class=" icon__circle"><span class=" icon__arrow"></span></span></button>',
    dots: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "horisontal-slider__dots",
});