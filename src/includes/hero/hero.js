import Swiper, { Pagination, Navigation, Mousewheel } from 'swiper';
Swiper.use([Pagination, Navigation, Mousewheel]);

class Hero {
	constructor() {
		this.init();
	}
	init() {
		new Swiper('[data-slider-hero]', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 1,
			spaceBetween: 40,
			pagination: {
				el: '[data-slider-hero] .swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '[data-slider-hero] .swiper-button-next',
				prevEl: '[data-slider-hero] .swiper-button-prev',
			},
		});
	}
}

export default new Hero();
