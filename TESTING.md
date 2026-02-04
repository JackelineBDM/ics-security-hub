# Testing - ICS Security Hub

Below is the detailed evidence for the scores reported in the README.

## HTML Validation
The following images show the W3C validation results for the HTML pages, confirming zero errors across the project.

### W3C Validation Pass for Index
![Index Pass](images/W3C_Index_Pass.png)

### W3C Validation Pass for Architecture
![Architecture Pass](images/W3C_architecture_Pass.png)

### W3C Validation Pass for Threats
![Threats Pass](images/W3C_Threats_Pass.png)

---

## Lighthouse Scores
The following images show the Lighthouse performance scores for the pages.

### Lighthouse Score for Home Mobile
![Home Lighthouse](images/Lighthouse_Home_Mobile.png)

### Lighthouse Score for Architecture
![Architecture Lighthouse](images/Lighthouse_Architecture_100.png)

### Lighthouse Score for Threats
![Threats Lighthouse](images/Lighthouse_Threats_100.png)

### W3C CSS Validator
I validated the `style.css` file using the W3C Jigsaw Validator. It passed with no errors.

![CSS Validation Result](images/css-validation.png)

## Manual Test Cases & Evaluation

| Feature | Test Performed | Expected Result | Actual Result | Justification |
| :--- | :--- | :--- | :--- | :--- |
| **Navigation** | Clicked all links in header. | Smooth transition between 3 pages. | PASS | Ensures user control and site continuity. |
| **Responsiveness** | Resized browser to 320px width. | Nav stacks; CSS Grid collapses to 1 column. | PASS | Ensures site integrity on handheld industrial devices. |
| **External Links** | Clicked NIST/CISA links. | Opens in new tab via `target="_blank"`. | PASS | Prevents user from losing their place on the Hub. |
| **W3C Cleanliness** | Re-validated after CSS Grid update. | 0 Errors in HTML/CSS. | PASS | Demonstrates code craftsmanship. |
| **Accessibility** | Ran WAVE Evaluation Tool. | WCAG 2.1 Compliant (0 Errors). | PASS | Ensures visually impaired access per guidelines. |