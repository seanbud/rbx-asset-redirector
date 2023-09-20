document.getElementById("redirectBtn").addEventListener("click", function () {
	let inputVal = document.getElementById("inputField").value;
	let match = inputVal.match(/^rbxassetid:\/\/(\d+)$/);

	if (match && match[1]) {
		let newUrl = "https://www.roblox.com/library/" + match[1];
		browser.tabs.update({ url: newUrl });
	}
});
