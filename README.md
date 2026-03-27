# Amin Srraj Portfolio

## Project Description
This project is a fully responsive personal web portfolio built utilizing HTML, CSS, and vanilla JavaScript. It is designed to act as an digital resume showcasing my skills, past projects, and providing an easy method of contacting me. 

Key interactive features included are:
- A seamless "Dark/Light" theme toggle to adapt to user preferences.
- Smooth scrolling navigation bars that hook to `#id` fragments correctly.
- A dynamic, personalized time-based greeting for the visitor based on their browser system clock.
- An interactive, asynchronously fetched "Random Quote" section hooked into the DummyJSON open API.
- Live client-side validation logic for the Contact me form, checking multiple inputs efficiently to avoid incomplete or improperly formatted email data processing.

## Setup Instructions
To view this project locally:
1. Download or clone this repository to your local machine.
2. Open the main directory.
3. Because the project does not require a backend logic server, you can double-click on `index.html` to open it locally directly in your favorite web browser (e.g. Chrome, Firefox, Safari).
   - Alternatively, you can use the **VS Code Live Server** extension by right-clicking on `index.html` and choosing "Open with Live Server" to test dynamic file loading over standard HTTP/s network simulation instead of `file:///`.

## AI Usage Summary
During the development and enhancement phases of this portfolio, an AI coding assistant  Google Gemini was utilized to provide suggestions, debug JavaScript logic, and recommend UX structure layouts, such as ensuring full-width and full-height consistency (`100vh`) using semantic structure.

The AI assistant securely supported writing the `fetch()` API calls, creating standard error messages for missing networks, and scaffolding the regex variables used in form validation checks.

> For a complete, detailed explanation on how AI was leveraged for UI/UX elements and Javascript execution blocks, see `docs/ai-usage-report.md`.
