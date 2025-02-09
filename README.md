AltAware 🖼️🔍 – AI-Powered Alt Text Generator for Web Accessibility
AltAware is a Chrome extension that detects missing alt text on images and automatically generates accurate descriptions using Gemini AI. This ensures a more accessible web experience for visually impaired users.

🚀 Features
✅ Detects images without alt text and highlights them
✅ Uses Google Gemini AI to generate accurate descriptions
✅ Automatically inserts AI-generated alt text into the webpage
✅ Ensures better web accessibility for screen readers
✅ Easy-to-use popup UI for quick alt text generation

🛠️ Installation
1️⃣ Download the source code or clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/AltAware.git
2️⃣ Open Chrome and go to:
🔗 chrome://extensions/
3️⃣ Enable Developer Mode (toggle in the top right).
4️⃣ Click "Load unpacked" and select the AltAware folder.
5️⃣ The AltAware extension is now installed! 🎉

📌 How It Works
1️⃣ Visit any webpage with images.
2️⃣ Click on the AltAware extension icon in Chrome.
3️⃣ Click “Generate AI Alt Text” – the extension will:

Identify images without alt text
Send them to Gemini AI for description
Insert the generated alt text into the page
Highlight fixed images for easy visibility
4️⃣ Inspect (F12) → Elements to verify the updated alt attributes.
🖥️ Technologies Used
JavaScript (Vanilla JS) – DOM manipulation & storage
Chrome Extensions API – Inject scripts into webpages
Google Gemini AI API – Image analysis & alt text generation
HTML & CSS – Popup UI for user interaction

🔧 Configuration
Setting Up Gemini API Key
1️⃣ Go to Google AI Studio
2️⃣ Generate a new API key
3️⃣ Replace "YOUR_GEMINI_API_KEY" in content.js with your actual key
