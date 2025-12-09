# Roblox Asset Redirector

A lightweight browser extension for quickly redirecting `rbxassetid://` links to their corresponding Roblox library pages.

## What is it?
Paste or enter any `rbxassetid://<ID>` link, and the extension redirects you to `https://www.roblox.com/library/<ID>`, making it easy to access Roblox assets.

## How to use
1. Open the extension popup.
2. Paste or type an `rbxassetid://` link.
3. Click **Redirect**.
4. You'll be sent directly to the correct asset page on Roblox.

![Demo GIF](docs/demo.gif)

```html
<!-- Example HTML usage (popup.html) -->
<p>Paste the rbxassetid:// link below:</p>
<input type="text" id="inputField" />
<button id="redirectBtn">Redirect</button>
```
