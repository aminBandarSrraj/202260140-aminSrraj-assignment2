# Technical Details

This document outlines the technical architecture, design decisions, and core technologies used to build this personal portfolio web application.

## 1. Technologies Used
- **HTML5**: Provides the structural semantic markup of the web application (`<header>`, `<nav>`, `<section>`, `<footer>`).
- **CSS3**: Handles all visual styling without the use of external CSS frameworks (like Bootstrap or Tailwind).
- **Vanilla JavaScript**: Manages frontend interactive functionality, APIs, DOM manipulation, form validation, and thematic toggling without requiring modern UI libraries (like React or Vue.js).

## 2. Core Technical Features

### Modern CSS Styling & Theming
- **Flexbox Layout Support**: Makes heavy use of `display: flex` properties throughout the application to appropriately align text, navigation links, and the project cards recursively. Utilizing Flexbox prevents manual rigid sizes and provides better scaling on smaller resolutions. 
- **Dark Mode CSS Overlay**: Uses a centralized vanilla class toggle methodology (`body.dark`). CSS is written using specific targeted states on elements when `body.dark` is structurally applied via JS, eliminating complex CSS custom variable recalculations.
- **Component Consistency**: Standardized UI container patterns (`.about-container`, `.project-card`, `.contact-container`) enforce reusability, matching `box-shadow` styles across multiple components to preserve standard lighting conditions.

### Dynamic JavaScript Capabilities
- **Time/State Based Greeting Engine**: Uses the native JavaScript `Date` API object, specifically checking `new Date().getHours()`, executing conditional boolean `if/else` logic to calculate semantic greetings (morning vs. afternoon vs. evening). It uses generic template literals to merge time strings alongside custom text inputs in real-time.
- **Asynchronous API Integration**: Focuses heavily on network requesting standards by querying the public *DummyJSON Quotes API*. Uses native asynchronous JS keywords (`async`/`await`) wrapping the native generic `fetch()` syntax. Includes strict structural error-handling (`try...catch`) verifying `response.ok` property codes and returning fallbacks in case of bad connection drops.
- **Automated Client-Side Form Validation**: Reduces useless bandwidth requests by handling errors prior to theoretical processing server submission. Focuses on checking standard `.trim()` data for empty string values while concurrently using powerful `Regex` (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) algorithms to specifically parse correct syntax within the simulated Contact Email payload. Modifies DOM text context (`element.textContent`) and element stylistic DOM `classLists` live upon keystroke listener implementations.

## 3. Deployment & Setup Infrastructure
The application has no specific compile-time build configuration. Because it operates cleanly using only local client-side assets (Local Assets: `images`, `scripts.js`, `styles.css`), the website works natively as statically generated assets straight from user `file:///` protocols locally without a localhost testing Node environment if preferred.
