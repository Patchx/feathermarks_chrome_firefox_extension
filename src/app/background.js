import { runtime } from 'utils/Runtime.js'

class Background {
	constructor() {
		const omnibox = runtime.api('omnibox');
		const tabs = runtime.api('tabs');

		omnibox.onInputEntered.addListener(function(text) {
			// Encode user input for special characters , / ? : @ & = + $ #
			var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
			tabs.create({ url: newURL });
		});
	}
}

export const background = new Background();
