import 'bootstrap';
import { gsap } from 'gsap';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

global.gsap = gsap;

// gsap.defaults({
// 	overwrite: 'auto',
// });

class Saurs {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			// Signal: require('./classes/Signal').default,
		};
		this.components = {
			Cards: require('../../components/cards/cards').default,
			Hero: require('../../includes/hero/hero').default,
		};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.Saurs = new Saurs();

if (module.hot) {
	module.hot.accept();
}
