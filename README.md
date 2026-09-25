# AUREX Web Engineering Internship - Week 4

## Intern Information
- **Intern Name:** Faiz Ul Hassan
- **Domain:** Full-Stack Web Development
- **Week Number:** Week 4
- **Live Deployment Link (Vercel):** https://faiz-ul-hassan-portfolio.vercel.app/

---

## Task Overview
This project fulfills the Week 4 practical requirement of the AUREX Frontend Foundation track. It is a complete, responsive Task Management Web Application built strictly using semantic HTML5, CSS3, and Pure Vanilla JavaScript (ES6+). The application manages state in-memory and persists all modifications locally using the browser's `localStorage` API, with zero reliance on external frameworks or utility libraries.

---

## Core Technologies Used
- **Semantic HTML5:** Accessible form controls, landmark regions, and aria-live announcements.
- **Modern CSS3:** Fluid dashboard styling, flex layouts, custom status badges, and mobile-first responsive breakpoints.
- **Vanilla JavaScript (ES6+):** Arrow functions, array transformation methods (`map`, `filter`), template literals, destructuring, and DOM manipulation.
- **Browser APIs:** `localStorage` for JSON data persistence and retrieval across page refreshes.

---

## Features Implemented
1. **Add Task:** Captures task descriptions along with user-selected priority levels (High, Medium, Low).
2. **Edit Task:** Populates existing tasks back into the control form for seamless inline updates.
3. **Delete Task:** Completely removes tasks from both the active UI and browser memory.
4. **Mark as Complete:** Toggles task completion state with visual strikethrough styling and metric adjustments.
5. **Dynamic Filtering:** Filters tasks by `All`, `Pending`, and `Completed` without requiring network reloads.
6. **Form Validation:** Guard clauses prevent whitespace-only entries and minimum character length violations with immediate error clearance on user input.
7. **Data Persistence (`localStorage`):** Synchronizes array states using `JSON.stringify()` and restores valid schemas on startup via `JSON.parse()`.
8. **Metrics Dashboard:** Live pending-task counter updates automatically across all CRUD operations.

---

## Completed JavaScript Fundamentals & Exercises
- **Variables & Scoping:** Applied `const` for immutable DOM references and storage keys; used `let` for component filters and dynamic data arrays.
- **Conditional Logic:** Built validation guards (`if (!titleValue)`), filter branching, and ternary status assignments.
- **Loops & Iteration:** Employed `forEach` for array rendering and event listener binding across NodeLists.
- **Functions:** Implemented declarative handler pipelines, arrow utility predicates, and pure data sanitization functions (`escapeHTML`).
- **Arrays & Methods:** Utilized `.map()` for immutable updates, `.filter()` for search criteria, and `.unshift()` for chronologically prioritized task additions.
- **Objects & State:** Structured consistent task entity schemas containing `id`, `title`, `priority`, `completed`, and timestamp properties.

---

## Challenges Faced & Key Learnings
- **Inline Editing vs. Creation:** Managed dual-purpose form submission by tracking hidden state identifiers (`task-edit-id`) to seamlessly switch between `.unshift()` (addition) and `.map()` (updating) without code duplication.
- **State Synchronization with localStorage:** Overcame edge cases where corrupt or empty storage keys could crash parsing routines by utilizing standard `try...catch` safety blocks.

---

## Repository Structure
```text
aurex-web-internship-faiz-ul-hassan/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── README.md