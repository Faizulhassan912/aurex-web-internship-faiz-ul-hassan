<!-- # AUREX Web Engineering Internship - Week 1

## Intern Information
- **Intern Name:** Faiz Ul Hassan
- **Domain:** Full-Stack Web Development
- **Week Number:** Week 1

---

## Task Description
The objective of this assignment is to configure a professional development environment, master Git and GitHub version control workflows, and construct a structured Personal Profile webpage using semantic HTML5. Following internship guidelines, no CSS styling was applied to evaluate semantic hierarchy and standard HTML elements.

---

## Technologies Used
- HTML5 (Semantic Structure, Tables, Forms, Accessibility Labels)
- Git CLI (Version Control)
- GitHub (Remote Repository Hosting)

---

## Project Structure
```text
aurex-web-internship-faiz-ul-hassan/
├── index.html
└── README.md -->

<!-- # AUREX Web Engineering Internship - Week 2

## Intern Information
- **Intern Name:** Faiz Ul Hassan
- **Domain:** Full-Stack Web Development
- **Week Number:** Week 2
- **Live Deployment URL:** `https://Faizulhassan912.github.io/aurex-web-internship-faiz-ul-hassan/` (or Vercel Live URL)

---

## Task Overview
This project upgrades the Week 1 pure-HTML personal webpage into a modern, responsive web portfolio utilizing CSS3 standards, modern layout techniques (CSS Flexbox and CSS Grid), fluid typography, and media query breakpoints for Desktop, Tablet, and Mobile screens.

---

## Technologies & CSS Features Implemented
- **Modern CSS3:** CSS custom properties (variables), transitions, box shadows, and box-sizing resets.
- **CSS Box Model:** Precise margins, inner paddings, borders, and structured hierarchy.
- **Flexbox Layouts:** Applied to the sticky navigation bar, hero container, action buttons, form elements, and footer.
- **CSS Grid Layouts:** Multi-column responsive grids with auto-fitting columns for the **Skills** and **Projects** showcases.
- **Responsive Web Design (Media Queries):**
  - **Desktop (1024px+):** Full multi-column layout with dual-pane hero structure.
  - **Tablet (768px - 1023px):** Fluid stacking with centered profile imagery and 2-column grids.
  - **Mobile (under 640px):** Single-column stacked navigation, full-width inputs, and flexible touch targets.

---

## Project Folder Structure
```text
aurex-web-internship-faiz-ul-hassan/
├── index.html
├── style.css
└── README.md -->

# AUREX Web Engineering Internship - Week 3

## Intern Information
- **Intern Name:** Faiz Ul Hassan
- **Domain:** Full-Stack Web Development
- **Week Number:** Week 3
- **Live Deployment Link (Vercel):** https://faiz-ul-hassan-portfolio.vercel.app/

---

## Task Overview
This project represents the Week 3 progression of the AUREX Frontend Foundation track, transitioning the responsive portfolio into an interactive, high-performance web experience. It incorporates advanced CSS Grid specifications (`minmax()`, `auto-fit`), CSS keyframe animations, UI micro-interactions, fluid typography via `clamp()`, and a cleanly decoupled CSS architecture (`style/main.css` and `style/animation.css`).

---

## Architecture & Advanced CSS Features Implemented

### 1. Decoupled CSS Architecture
Organized styling logic into dedicated modular files to maximize maintainability:
- `styles/main.css`: Core layout styling, CSS variables (`:root`), Flexbox structures, and CSS Grid layouts.
- `styles/animations.css`: Keyframe definitions (`@keyframes`), page-load entrance transitions, floating avatar dynamics, and hover micro-interactions.

### 2. Advanced CSS Grid Layouts
- **Dynamic Card Sizing:** Utilized `repeat(auto-fit, minmax(240px, 1fr))` for technical skill components and `repeat(auto-fit, minmax(320px, 1fr))` for featured project modules.
- **Fluid Alignment:** Automatically rearranges grid tracks without manual media query intervention, eliminating layout overflow across ultra-wide, standard desktop, tablet, and mobile screens.

### 3. Keyframe Animations & Micro-Interactions
- **`fadeInDown` & `fadeInUp`:** Staggered natural page-load entrance animations for the sticky navbar, hero headlines, and action elements.
- **`floatGentle`:** Subtle 5-second harmonic floating keyframe on the hero portrait media wrapper.
- **`pulseGlow`:** Ambient, soft pulsation on the developer role badge.
- **Micro-Interactions:** 
  - Card hover elevations with dynamic cubic-bezier transitions (`translateY(-6px)`).
  - Skill icon scaling (`scale(1.18) rotate(4deg)`) upon hover.
  - Tactile button press feedback using `:active` pseudo-classes (`scale(0.98)`).

### 4. Fluid Typography & Responsiveness
- Implemented modern CSS `clamp()` functions for hero titles and section headers, eliminating awkward line wraps across viewport widths between 320px and 1440px.

---

## Live Deployment
- **Live Production URL:** https://faiz-ul-hassan-portfolio.vercel.app/
- **Hosting Platform:** Vercel (Continuous Deployment linked to GitHub `main` branch)

---

## Repository Structure
```text
aurex-web-internship-faiz-ul-hassan/
├── index.html
├── style/
│   ├── main.css
│   └── animation.css
├── profile.png
└── README.md