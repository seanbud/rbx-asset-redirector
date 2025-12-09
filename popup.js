document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputField');
  const btn = document.getElementById('redirectBtn');

  // Parse ID from various formats
  function extractId(text) {
    // 1. Raw number
    if (/^\d+$/.test(text)) return text;
    // 2. rbxassetid://
    let match = text.match(/rbxassetid:\/\/(\d+)/);
    if (match) return match[1];
    // 3. URL params ?id=
    match = text.match(/[?&]id=(\d+)/);
    if (match) return match[1];
    // 4. library/asset/ path
    match = text.match(/(?:library|asset|catalog)\/(\d+)/);
    if (match) return match[1];
    
    return null;
  }

  function handleRedirect() {
    const val = input.value.trim();
    const id = extractId(val);
    
    if (id) {
      const url = `https://www.roblox.com/library/${id}`;
      // Use 'browser' for Firefox, fallback to 'chrome'
      const api = window.browser || window.chrome;
      
      // Update the active tab
      api.tabs.update(undefined, { url: url });
      window.close();
    } else {
      input.style.border = "1px solid #ff4444";
      setTimeout(() => {
        input.style.border = "1px solid transparent"; // Reset to css var via inheritance/removal?
        // Actually just clearing inline style will revert to CSS class
        input.style.removeProperty('border');
      }, 500);
    }
  }

  btn.addEventListener('click', handleRedirect);
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleRedirect();
    }
  });
});
