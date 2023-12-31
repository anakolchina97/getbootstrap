const utils = {
	now() {
		if (window.performance && window.performance.now) {
			this.now = () => {
				return window.performance.now();
			};
		} else {
			this.now = () => {
				return +new Date();
			};
		}
		return this.now();
	},

	cubicProgress(value) {
		value = value < 0 ? 0 : value;
		value = value > 1 ? 1 : value;
		value /= 1 / 2;

		if (value < 1) {
			return (1 / 2) * value * value * value;
		}

		value -= 2;

		return (1 / 2) * (value * value * value + 2);
	},

	debounce(func, wait = 100, immediate = false) {
		let timeout;
		return function () {
			const context = this;
			const args = arguments;

			const later = () => {
				timeout = null;
				!immediate && func.apply(context, args);
			};

			const callNow = immediate && !timeout;
			clearTimeout(timeout);

			timeout = setTimeout(later, wait);

			callNow && func.apply(context, args);
		};
	},

	// Функция throttle будет принимать 2 аргумента:
	// - callee, функция, которую надо вызывать;
	// - timeout, интервал в мс, с которым следует пропускать вызовы.
	throttle(callee, timeout) {
		// Таймер будет определять,
		// надо ли нам пропускать текущий вызов.
		let timer = null;

		// Как результат возвращаем другую функцию.
		// Это нужно, чтобы мы могли не менять другие части кода,
		// чуть позже мы увидим, как это помогает.
		return function perform(...args) {
			// Если таймер есть, то функция уже была вызвана,
			// и значит новый вызов следует пропустить.
			if (timer) return;

			// Если таймера нет, значит мы можем вызвать функцию:
			timer = setTimeout(() => {
				// Аргументы передаём неизменными в функцию-аргумент:
				callee(...args);

				// По окончании очищаем таймер:
				clearTimeout(timer);
				timer = null;
			}, timeout);
		};
	},

	formatNumber(number) {
		number = number.toString();
		let result = '';

		for (let k = number.length - 1, c = 0; k >= 0; k--, c++) {
			if (c === 3) {
				c = 0;
				result = number.substr(k, 1) + ' ' + result;
			} else {
				result = number.substr(k, 1) + result;
			}
		}

		return result;
	},

	declOfNum(number, titles) {
		const cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
		];
	},
};

export default utils;
