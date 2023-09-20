document.body.addEventListener("paste", function (e) {
	// Get the clipboard data
	let text = (e.clipboardData || window.clipboardData).getData("text");

	// Check if it matches the pattern
	let match = text.match(/^rbxassetid:\/\/(\d+)$/);

	if (match && match[1]) {
		let newUrl = "https://www.roblox.com/library/" + match[1];

		// Notify the background script to perform the redirect
		browser.runtime.sendMessage({
			type: "redirect",
			url: newUrl,
		});
	}
});
