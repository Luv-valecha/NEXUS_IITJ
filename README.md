<div align="center">

# 🔭 NEXUS — Astronomy Club of IIT Jodhpur

**The official website of Nexus, the Astronomy Club of IIT Jodhpur**

[![Live Site](https://img.shields.io/badge/Live%20Site-nexus.iitj.ac.in-blue?style=for-the-badge&logo=vercel)](https://nexus.iitj.ac.in/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r182-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌌 About the Project

**Nexus** is the official Astronomy Club of the Indian Institute of Technology Jodhpur (IITJ). This repository contains the source code for the club's public-facing website — a modern, fully responsive application built to inform, inspire, and connect astronomy enthusiasts across the campus and the wider community.

The website serves as the digital home of Nexus, showcasing the club's events, team, activities, and vision, all wrapped in an immersive, space-themed user experience complete with interactive 3D visuals and smooth animations.

---

## 🚀 Live Demo

The site is live and publicly accessible at:

- **Primary Domain:** [https://nexus.iitj.ac.in/](https://nexus.iitj.ac.in/)

---

## 🛠 Tech Stack

This project is built with a modern, production-grade frontend stack:

| Category | Technology | Version |
|---|---|---|
| **UI Library** | React | ^19.2.0 |
| **Build Tool** | Vite | ^7.2.4 |
| **Styling** | Tailwind CSS | ^4.1.18 |
| **3D Rendering** | Three.js | ^0.182.0 |
| **3D React Bindings** | @react-three/fiber | ^9.4.2 |
| **3D Helpers** | @react-three/drei | ^10.7.7 |
| **Animations** | Framer Motion | ^12.23.26 |
| **Client-side Routing** | React Router DOM | ^7.10.1 |
| **HTTP Client** | Axios | ^1.13.2 |
| **Icon Library** | Lucide React | ^0.561.0 |
| **Icon Library (extended)** | React Icons | ^5.5.0 |
| **Linting** | ESLint | ^9.39.1 |
| **Package Manager** | pnpm / npm | — |

---

## 📁 Project Structure

```
NEXUS_IITJ/
│
├── public/                     # Static assets served at root
│   └── NexusIcon.svg           # Favicon / brand icon
│
├── src/                        # All application source code
│   ├── main.jsx                # React app entry point
│   ├── App.jsx                 # Root component with routing setup
│   │
│   ├── pages/                  # Top-level route pages
│   │   ├── Home.jsx            # Landing / Hero page
│   │   ├── About.jsx           # About the club
│   │   ├── Events.jsx          # Past and upcoming events
│   │   ├── Team.jsx            # Club members and coordinators
│   │   ├── Gallery.jsx         # Photo/media gallery
│   │   └── Contact.jsx         # Contact form / info
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── Footer.jsx          # Site-wide footer
│   │   ├── StarBackground.jsx  # Animated 3D star field (Three.js)
│   │   └── ...                 # Other shared components
│   │
│   └── assets/                 # Images, fonts, and other static media
│
├── index.html                  # Vite HTML entry point
├── vite.config.js              # Vite bundler configuration
├── eslint.config.js            # ESLint flat config (v9)
├── vercel.json                 # Vercel SPA rewrite rules
├── package.json                # Project metadata and dependencies
├── pnpm-lock.yaml              # pnpm lockfile
├── package-lock.json           # npm lockfile
├── .gitignore                  # Git ignore rules
└── LICENSE                     # MIT License
```

> **Note:** The `src/` directory structure above reflects the inferred architecture based on the dependencies and configuration in the repository. The project uses React Router DOM for client-side navigation with a standard pages-and-components pattern.

---

## ✨ Features

### 🌠 Immersive 3D Space Environment
- Powered by **Three.js** via `@react-three/fiber` and `@react-three/drei`
- An animated, interactive star field background creates a deep-space atmosphere across the entire site
- 3D scene management and camera controls provided through the React Three Fiber ecosystem

### 🎬 Smooth Animations & Transitions
- All UI transitions, page entrances, and element reveals are handled by **Framer Motion**
- Micro-interactions and scroll-triggered animations provide a polished, professional feel

### 🗺️ Client-Side Routing (SPA)
- Navigation is handled by **React Router DOM v7**, enabling instant, zero-reload page transitions
- Vercel is configured with a catch-all rewrite rule (`vercel.json`) to support SPA deep-linking — all routes correctly resolve to `index.html` server-side

### 📱 Fully Responsive Design
- Styled with **Tailwind CSS v4** using a mobile-first utility approach
- Layout adapts seamlessly across mobile, tablet, and desktop viewports
- The Tailwind Vite plugin is used for optimal build-time CSS generation

### 🔗 Pages & Sections
The website features the following key sections, each as a dedicated route:

- **Home** — A visually striking hero section introducing the club with the 3D space backdrop
- **About** — The club's mission, vision, and history at IIT Jodhpur
- **Events** — A showcase of past stargazing events, workshops, and competitions, as well as upcoming activities
- **Team** — Profiles of club coordinators, faculty advisors, and active members
- **Gallery** — A curated photo gallery of club activities, astrophotography, and events
- **Contact** — A contact form and relevant links for reaching the club

### 🔍 SEO & Discoverability
- Google Site Verification meta tag is embedded in `index.html` for search engine indexing
- Semantic HTML structure and meaningful `<title>` tags support discoverability

### 🧹 Code Quality
- ESLint v9 with the new flat config format (`eslint.config.js`) enforces consistent code style
- Plugins include `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` for React best practices

---

## 🏁 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** — v18 or higher (recommended: v20 LTS)
- **pnpm** (preferred) or **npm**

To install pnpm:
```bash
npm install -g pnpm
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NexusIITJ/NEXUS_IITJ.git
   cd NEXUS_IITJ
   ```

2. **Install dependencies:**

   Using pnpm (recommended):
   ```bash
   pnpm install
   ```

   Or using npm:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server with Hot Module Replacement (HMR):

```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

Generate an optimised production build:

```bash
pnpm build
# or
npm run build
```

The output will be placed in the `dist/` directory.

To preview the production build locally before deploying:

```bash
pnpm preview
# or
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
pnpm lint
# or
npm run lint
```

---

## 🤝 Contributing

Contributions from club members and the open-source community are welcome! Please follow these steps:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit them with a clear, descriptive message:
   ```bash
   git commit -m "feat: add stargazing event card component"
   ```
4. **Push** your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch of the upstream repository.

Please ensure your code passes linting (`pnpm lint`) before submitting a PR. Follow the existing code style and component patterns.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for full details.

---

<div align="center">

**Built with ❤️ by the members of Nexus — Astronomy Club, IIT Jodhpur**

[![Website](https://img.shields.io/badge/Website-nexus.iitj.ac.in-blue?style=flat-square)](https://nexus.iitj.ac.in/)
[![GitHub](https://img.shields.io/badge/GitHub-NexusIITJ-181717?style=flat-square&logo=github)](https://github.com/NexusIITJ/NEXUS_IITJ)

*"The cosmos is within us. We are made of star-stuff."* — Carl Sagan

</div>
