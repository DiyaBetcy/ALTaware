chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "missingAltFound") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon-48.png",
            title: "Alt Text Checker",
            message: `${message.count} images missing alt text! Click the extension icon to generate alt text.`,
        });
    }
});
