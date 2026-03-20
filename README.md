# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# portfolio



# Project Documentation: First Website Portfolio

## 1. Purpose of the Project
This project is a modern, responsive single-page professional portfolio website built for **Pranesh S**, a Senior Software Developer. The primary goal of this application is to showcase professional experience, educational background, core technical skills, and key projects to potential employers or clients. It provides an intuitive, interactive, and seamless user experience without full-page reloads, effectively representing a professional digital presence.

## 2. Dependencies and Installation
The project is bootstrapped with **Vite** and built using **React**. Below are the key dependencies used in the project, along with the commands to install them.

### Core Dependencies
- **React & React DOM**: The core library for building the declarative, component-based user interface.
- **Framer Motion**: An animation library used for smooth, declarative animations and module transitions across the application.
- **Lucide React**: Provides beautiful, easily scalable vector icons used throughout the UI.

**Installation Command:**
```bash
npm install framer-motion lucide-react react react-dom
```

### Development Dependencies
- **Vite**: A fast, modern frontend build tool and development server, offering optimal hot module replacement (HMR).
- **ESLint**: A linter used to ensure code quality and prevent syntax issues or anti-patterns in React development.
- **Tailwind CSS (via PostCSS/Autoprefixer)**: Used for processing CSS, applying vendor prefixes, and rapid UI styling using utility classes.

**Installation Command:**
```bash
npm install -D vite @vitejs/plugin-react eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals postcss autoprefixer
```
*(Note: Tailwind CSS is used alongside PostCSS and Autoprefixer for styles.)*

## 3. Core Functionalities and their Roles

### Navigation Mechanism
**Role:** Enables seamless transitioning between different portfolio sections without reloading the entire page, ensuring the fast feel of a Single Page Application (SPA).
**Implementation:** 
Navigation is managed in `App.jsx` using React's `useState` hook (`activeSection`), acting as an in-app state router. The `Navbar` component updates this active state to the id of the clicked item. The central `renderSection` function listens to state changes and dynamically mounts or unmounts functional components such as `Hero`, `Projects`, `About`, `Resume`, and `Contact`.

### Data Painting (Dynamic Rendering)
**Role:** Minimizes hardcoding of repetitive UI elements and ensures better maintainability by keeping content decoupled from the markup.
**Implementation:** 
Instead of repeatedly writing UI block codes, JavaScript arrays and literal objects map out the layout:
- In `Projects.jsx`, all professional experience and project details are stored in an array of objects (`experiences`). This array is mapped over to dynamically render cards representing each job role, timeline, and associated projects.
- In `About.jsx`, the `education` arrays and `skills` objects are mapped to generate the educational background block and skills grid layout.
- In `Resume.jsx`, the `resumeData` object acts as a localized, centralized data source containing experience highlights and professional summaries.

### Resume Download
**Role:** Allows recruiters or clients to easily obtain a local copy of the developer's resume in a standard format (PDF).
**Implementation:** 
This is handled inside the `Resume.jsx` component. An anchor (`<a>`) tag leverages the HTML5 `download` attribute (`download="Pranesh_S_Resume.pdf"`). It links directly to the imported local static PDF asset (`resumeFile`), forcing the browser to download the file rather than trying to display it in a new window.

### UI Animations and Transitions
**Role:** Enhances the overall user experience by providing smooth visual feedback as users load pages or hover over elements.
**Implementation:** 
The application makes use of local animation classes (like `animate-in`, `slide-in-from-bottom`, `fade-in-up`) from CSS frameworks alongside **Framer Motion** utilities to create clean mount animations when switching between the active sections. Layout components fade or slice in dynamically based on interaction.

### Contact / Feedback Handling
**Role:** Provides a medium for visitors or recruiters to reach out directly to the developer.
**Implementation:** 
Managed in `Contact.jsx`, this component handles the structured contact form UI state (e.g., maintaining inputs, checking submission intent, and showing states like "Sending..." or "Sent!" with proper layout alignment and feedback).
