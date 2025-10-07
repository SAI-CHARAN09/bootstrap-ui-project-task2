```
# Task 2 — Nunjucks + Gulp Implementation
## Bootstrap UI Internship — Strict Tech Stack Implementation

**Developer:** Vennu Sai Charan

---

## 🎯 Objective
Recreate the Task 1 deliverables (the Internship Task Document) using:
- **Templating engine:** Nunjucks
- **Task runner:** Gulp

The final compiled output (`dist/`) matches Task 1 formatting, content, and styling.

---

## 📦 Project Structure

bootstrap-ui-task2/
│
├── package.json
├── gulpfile.js
├── README.md              
│
├── src/
│   ├── templates/
│   │   ├── index.njk
│   │   ├── about.njk
│   │   ├── contact.njk
│   │   └── partials/
│   │       ├── navbar.njk
│   │       └── footer.njk
│   │
│   └── assets/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── main.js
│       └── img/
│           ├── hero.jpg
│           ├── team1.jpg
│           └── contact.jpg
│
└── dist/                  ← Compiled output (generated after running build/dev)


**Compiled output:** `dist/` (generated after running build/dev)

---

## 🔧 Chosen Stack
- **Templating Engine:** Nunjucks
- **Task Runner:** Gulp
- **Other:** BrowserSync for live reload, imagemin/clean-css/uglify for production optimizations

---


---

## 🔧 Chosen Stack
- **Templating Engine:** Nunjucks  
- **Task Runner:** Gulp  
- **Other Tools:** BrowserSync (live reload), imagemin, clean-css, uglify for production optimizations  

---

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/<username>/<repo-name>.git
cd bootstrap-ui-task2

Install dependencies:

npm install


Run development server with live reload:

gulp


This will watch for changes in templates and assets and automatically rebuild files into dist/.

Build for production:

gulp build


Compiled HTML, CSS, and JS files will be generated in dist/.

🌐 Deployment

The dist/ folder contains the production-ready site.

You can deploy the contents of dist/ to GitHub Pages or any static hosting service.

GitHub Pages Example:

Branch: main

Folder: /dist

Live link: https://<username>.github.io/<repo-name>/

📌 References

Nunjucks Documentation

Gulp Documentation

Bootstrap 5 Documentation

Vennu Sai Charan
Bootstrap UI Internship — Task 2


```
