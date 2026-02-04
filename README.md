# ICS Security Hub 

A professional web resource dedicated to the security and architecture of Industrial Control Systems (ICS).

**Live Site:** [View Project Here](https://jackelinebdm.github.io/ics-security-hub/)

## Responsive Design Preview
The ICS Security Hub is designed to be fully responsive across all modern devices.

![Website Mockup](./images/website_mockup.png)
## Technical Quality Scorecard (Google Lighthouse)

| Category | Score | Status |
| :--- | :--- | :--- |
| **Accessibility** | ![100%](https://img.shields.io/badge/Accessibility-100%25-brightgreen) | Pass |
| **Best Practices** | ![100%](https://img.shields.io/badge/Best_Practices-100%25-brightgreen) | Pass |
| **Performance** | ![100%](https://img.shields.io/badge/Performance-100%25-brightgreen) | Pass |
| **SEO** | ![100%](https://img.shields.io/badge/SEO-100%25-brightgreen) | Pass |

---

## UX (The 5 Planes)

### 1. Strategy Plane
**Goal:** To provide a professional web resource for ICS security professionals to understand the Purdue Model and OT protection.
- **User Needs:** Quick access to security standards (NIST) and architectural models.
- **Business Goal:** Build a high-performance, accessible information hub.

### 2. Scope Plane
**Features Included:**
- 3-Page Structure (Home, Architecture, Threats).
- Purdue Model Reference Gallery.
- Responsive Navigation Bar.

### 3. Structure Plane
**Information Architecture:**
- **Level 1:** Home (Executive overview of ICS security).
- **Level 2:** Architecture (Deep dive into the Purdue Model).
- **Level 3:** Threats (Analysis of common attack vectors).

### 4. Skeleton Plane
**Wireframes:**
I used Figma to design mobile-first layouts, ensuring technical diagrams remain clear on small screens.
![Project Wireframes](./images/wireframes.png)

### 5. Surface Plane
**Visual Design:**
- **Colors:** Professional dark-theme palette for high contrast.
- **Typography:** Clean sans-serif fonts for technical clarity.
- **Key Diagram:** ![Purdue Model Architecture](./images/Purdue_Model_Reference.png)

## Design Justifications & Rationale
To achieve a "publishable" professional quality, specific design choices were made and justified:

* **Advanced Layout (CSS Grid):** I implemented **CSS Grid** for the Purdue Model lists on the Architecture page. This provides a robust, two-column hierarchy on desktop that automatically stacks on mobile, ensuring a seamless user experience for engineers on the factory floor.
* **Color Palette:** The dark theme (#00274c) and high-contrast gold (#ffcb05) were chosen to ensure readability in low-light industrial environments. This is justified by the 100% Accessibility score.
* **Separation of Concerns:** All inline styles were refactored into dedicated CSS classes (e.g., `.info-box`, `.sl-box`). This ensures the code is maintainable, scalable, and follows professional "Clean Code" standards.
* **Static Architecture:** A static site was intentionally chosen to ensure a "zero-attack surface." In cybersecurity, reference tools should not introduce new vulnerabilities to an OT environment.

---

## User Stories
* **As a Plant Manager:** I want to see a high-level visual of network layers to understand where security investments are required.
* **As a Security Engineer:** I want a mobile-responsive resource to verify security best practices while on the factory floor.

---

## Technologies and Deployment
* **Languages:** HTML5, CSS3 (including Advanced CSS Grid and Media Queries).
* **Tools:** VS Code, GitHub Desktop, Figma, Google Lighthouse, [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
* **Hosting:** Deployed via GitHub Pages.

---

## Testing

I have performed rigorous manual and automated testing to ensure the ICS Security Hub is fully functional and compliant with W3C standards.

* **Automated Testing:** The site achieves 100% scores across all Google Lighthouse categories.
* **Validation:** All HTML and CSS files have been validated through the W3C Nu HTML Checker and Jigsaw Validator with zero errors.
* **Manual Testing:** Verified all navigation links, external resource links, and responsive layouts on multiple devices.

## Robustness and Defensive Design
As a static site, runtime errors are eliminated. However, potential user/technical errors are handled gracefully:
* **Image Load Failures:** Descriptive `alt` text provides full context for all diagrams (e.g., the Purdue Model) if the asset fails to load.
* **Broken Links:** All external and internal links were manually verified.
* **Cross-Browser Integrity:** The site was evaluated across Chrome, Firefox, and Safari to ensure consistent layout performance.

> [!IMPORTANT]
> For the full testing report, including all validator screenshots and detailed manual test cases, please refer to the **[TESTING.md](TESTING.md)** file.

---
## Full Development Lifecycle
This project followed an iterative development process over two weeks:
1. **Strategy:** Defined user stories for Plant Managers and Security Engineers based on NIST standards.
2. **Design:** Created mobile-first wireframes in Figma to plan the information architecture and info-hierarchy.
3. **Implementation:** Developed using semantic HTML5. Refactored code iteratively to move from inline styling to a professional class-based system for better maintainability.
4. **Testing & Evaluation:** Performed a continuous testing loop (Manual + Automated) to resolve UI bugs and achieve 100% Lighthouse scores.

## Credits and Attribution
* **Media:** Purdue Model diagram adapted from [Palo Alto Networks](https://www.paloaltonetworks.com/cyberpedia/what-is-the-purdue-model-for-ics-security).
* **Tools:** [Website Mockup Generator](https://websitemockupgenerator.com/) was used to create the responsive design preview.
* **Technical Content:** Standards derived from [NIST SP 800-82r3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf) and [NIST SP 1800-10](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1800-10.pdf).
* **Educational Context:** Developed as part of the [Code Institute](https://codeinstitute.net/) Milestone 1 Project.

---

## Recent Updates & Bug Fixes
* **Mobile UI:** Fixed navigation bar overlapping content by adjusting CSS z-index.
* **Accessibility:** Updated color contrast and increased navigation padding to meet WCAG touch-target standards.
* **Semantic HTML:** Refactored Architecture page to use dl (Description Lists) instead of divs for full W3C compliance.
* **Layout:** Resolved alignment issues in the Security Level (SL 2) requirement tables.
* **Tables:** Implemented responsive CSS styling for the Threats table to improve readability on mobile.
* **Code Craftsmanship:** Refactored all HTML files to remove inline styles, moving them to centralized CSS classes for better maintainability and separation of concerns.
* **Advanced Layout:** Implemented CSS Grid on the Architecture page to enhance content structure and ensure professional responsiveness across devices.