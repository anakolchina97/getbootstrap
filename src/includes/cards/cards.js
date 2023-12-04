import Swiper, { Pagination, Navigation, Mousewheel } from 'swiper';
Swiper.use([Pagination, Navigation, Mousewheel]);

// const same = {
// 	direction: 'horizontal',
// 	slidesPerGroup: 1,
// 	loop: true,
// 	grabCursor: true,
// 	slidesPerView: 'auto',
// 	breakpoints: {
// 		320: {
// 			spaceBetween: 8,
// 			cssMode: true,
// 		},
// 		768: {
// 			spaceBetween: 25,
// 			cssMode: false,
// 		},
// 	},
// 	mousewheel: true,
// };

class Cards {
	constructor() {
		this.init();
	}
	init() {
		new Swiper('.swiper', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 4,
			spaceBetween: 40,
		});
	}
}

export default new Cards();
