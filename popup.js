document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("missingAltImages", (data) => {
        const count = data.missingAltImages?data.missingAltImages.length : 0;
        document.getElementById("missingCount").textContent = `${count} images missing alt text.`;
    });

    document.getElementById("generateAlt").addEventListener("click", async () => {
        chrome.storage.local.get("missingAltImages", async (data) => {
            if (data.missingAltImages && data.missingAltImages.length > 0) {
                const resultContainer = document.getElementById("altTextResults");
                resultContainer.innerHTML = ""; // Clear previous results
                let altTextList = [];

                for (const imageUrl of data.missingAltImages) {
                    const altText = await generateAltText(imageUrl);
                    altTextList.push(`${altText}`);

                    // Find the image in the DOM and update the alt attribute
                    const img = document.querySelector(`img[src="${imageUrl}"]`);
                    if (img) {
                        img.setAttribute("alt", altText); // ✅ Insert AI-generated alt text
                        console.log(`✅ Alt text added for: ${imageUrl} -> ${altText}`); // Log success
                        
                        img.style.border = "3px solid green"; // ✅ Highlight fixed images

                        // Display generated alt text below the image
                        const altTextDisplay = document.createElement("div");
                        altTextDisplay.textContent = `Alt Text: ${altText}`;
                        altTextDisplay.style.color = "blue";
                        img.parentNode.insertBefore(altTextDisplay, img.nextSibling);
                    } else {
                        console.warn(`⚠️ Image not found in DOM: ${imageUrl}`);
                    }
                }

                // Show an alert pop-up with all AI-generated alt texts
                alert(`✅ AI-generated alt text added! Check Inspect > Elements to verify.\n\nGenerated Alt Texts:\n\n${altTextList.join("\n")}`);
            } else {
                alert("No images missing alt text.");
            }
        });
    });
});

// Function to Generate AI Alt Text
async function generateAltText(imageUrl) {
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAQONqZtj8s43jeqpkaG5H-OjUbfi7NJv0`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        contents: [{"parts":[{"text":`Describe the image in short and clear: ${imageUrl}`}]}],
        })
    });

    const result = await response.json();
    return result?.candidates[0].content.parts[0].text || "No description available";
}
