// This script will listen for a paste event in the content script
// and redirect if the pasted text matches the pattern

browser.runtime.onMessage.addListener(function (request) {
	if (request.type === "redirect" && request.url) {
		browser.tabs.update({ url: request.url });
	}
});
