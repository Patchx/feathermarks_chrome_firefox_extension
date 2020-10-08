'use strict';

import { runtime } from 'utils/Runtime.js'

class Background {
	constructor() {
		const omnibox = runtime.api('omnibox');
		const tabs = runtime.api('tabs');

		// omnibox.onInputEntered.addListener(function(text) {
		// 	// Encode user input for special characters , / ? : @ & = + $ #
		// 	var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
		// 	tabs.create({ url: newURL });
		// });

		// This event is fired each time the user updates the text in the omnibox,
		// as long as the extension's keyword mode is still active.
		omnibox.onInputChanged.addListener(function(text, suggest) {			
			suggest([
				{content: text + " one", description: "the first one"},
				{content: text + " number two", description: "the second entry"}
			]);
		});

		// This event is fired with the user accepts the input in the omnibox.
		omnibox.onInputEntered.addListener(function(text) {
			alert('You just typed "' + text + '"');
		});
	}
}

export const background = new Background();
