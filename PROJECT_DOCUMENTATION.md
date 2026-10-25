# Portfolio Website Documentation

## 1. Purpose of the Project
The `first_website_portfolio` is a personal portfolio web application built to professionally showcase the software development experience, projects, skills, education, and contact information of the project owner. It serves as an interactive and responsive digital resume for potential recruiters or clients.

## 2. Technologies Used
- **React.js (v19)**: Core JavaScript library used for building the component-based user interface.
- **Vite (v8)**: Extremely fast frontend build tool and development server used to scaffold and bundle the project.
- **Tailwind CSS**: Utility-first CSS framework (configured via PostCSS and Autoprefixer) for rapid, responsive UI styling.
- **Framer Motion**: Animation library used to create smooth interactive transition effects.
- **Lucide React**: Icon library used for elegant, scalable SVG icons.

## 3. Dependencies and Commands

**Installation Command:**
To install all required dependencies from the `package.json`, run:
```bash
npm install
```

**Core Dependencies:**
These are the libraries strictly required for the application to function in production:
- `react`, `react-dom`
- `framer-motion`
- `lucide-react`

**Development Dependencies:**
These are the tools used to build, format, and serve the application during development:
- `vite`, `@vitejs/plugin-react`
- `eslint` (with various React plugins for linting)
- `postcss`, `autoprefixer` (used alongside Tailwind CSS)

**Useful Scripts:**
- Start Development Server: `npm run dev`
- Build for Production: `npm run build`
- Preview Production Build: `npm run preview`
- Run Linter: `npm run lint`

## 4. Key Functionalities Explained

### Screen Navigation
The project employs **State-Based Navigation** rather than relying on an external routing library like `react-router-dom`. By avoiding heavy router dependencies, the application remains lightweight and inherently acts as a Single Page Application (SPA).
- **How it works**: Inside `App.jsx`, a React `useState` hook (`const [activeSection, setActiveSection] = useState('home');`) keeps track of the currently active screen. 
- A `renderSection()` function uses a `switch` statement to dynamically swap out UI components (`Hero`, `Projects`, `About`, `Resume`, `Contact`) depending on the value of the `activeSection` state.

### Downloading the Resume
The resume downloading feature is straightforward, reliable, and avoids unnecessary complex API calls or Blob generation.
- **How it works**: In `Resume.jsx`, the actual PDF file is imported locally from the assets directory: 
  `import resumeFile from '../assets/pranesh_s.pdf'`
- An HTML anchor tag (`<a>`) is rendered with the `href` pointing to the imported file. The `download` attribute is utilized (`download="Pranesh_S_Resume.pdf"`), which instructs the browser to download the file directly to the user's local disk rather than navigating to it.

### Data Painting (Dynamic Rendering)
The application adheres to the DRY (Don't Repeat Yourself) principle by avoiding redundant HTML blocks, leveraging React's data mapping capabilities instead.
- **How it works**: Hardcoded data is stored in structured JavaScript objects or arrays (e.g., the `resumeData` object inside `Resume.jsx` stores arrays for `experience`, `skills`, and `education`). 
- The UI maps over this structured data using the JavaScript `.map()` function. For instance, `{resumeData.experience.map(exp => ...)}` iterates over the employment history and generates repetitive UI templates on the fly cleanly and efficiently.
