(function() {
    const images = document.querySelectorAll("img");
    let missingAltImages = [];

    images.forEach(img => {
        if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
            missingAltImages.push(img.src);
            img.style.border = "3px solid red"; // Highlight missing alt text images

            // Add a placeholder alt text for visibility in Inspect
            img.setAttribute("alt", "Generating alt text...");
        }
    });

    // Store missing images in chrome storage
    chrome.storage.local.set({ missingAltImages });

    // Notify background script
    if (missingAltImages.length > 0) {
        chrome.runtime.sendMessage({ action: "missingAltFound", count: missingAltImages.length });
    }
})();
