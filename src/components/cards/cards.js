import Swiper, { Pagination, Navigation, Mousewheel } from 'swiper';
Swiper.use([Pagination, Navigation, Mousewheel]);

class Cards {
	constructor() {
		this.init();
	}
	init() {
		new Swiper('[data-slider-cards]', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 4,
			spaceBetween: 40,
		});
	}
}

export default new Cards();
