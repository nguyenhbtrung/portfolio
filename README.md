# Portfolio Website

A modern personal portfolio built with React, Vite, Material UI, and Framer Motion to showcase a developer’s background, skills, projects, and contact information.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-7-007FFF?logo=mui&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## About the Project

This portfolio presents a polished, responsive view of a web developer’s work and experience. It highlights core skills, featured projects, and a contact section designed for recruiters and potential collaborators.

## Features

- Responsive one-page layout for desktop and mobile
- Hero section with personal introduction and CV download
- About, skills, projects, and contact sections
- Project showcase with detailed project views
- Dark/light theme support
- Smooth motion and scroll-based interactions
- Contact form powered by EmailJS with toast notifications

## Tech Stack

### Frontend

- React 19
- React Router DOM
- Framer Motion
- Material UI
- React Icons
- React Toastify

### Styling

- Emotion
- MUI theming

### Tooling

- Vite
- ESLint
- gh-pages for deployment publishing

## Project Structure

- [src/components](src/components) contains the main UI sections such as hero, about, skills, projects, and contact.
- [src/data](src/data) stores portfolio content including projects, skills, and contact placeholders.
- [src/pages](src/pages) contains the app layout and route-based pages.
- [public](public) holds static assets, project images, and the profile image.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/nguyenhbtrung/portfolio.git
cd portfolio
yarn
```

Start the development server:

```bash
yarn dev
```

Build the project for production:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

Deploy the built site to GitHub Pages:

```bash
yarn deploy
```

## Customization

Update the portfolio content by editing:

- Personal details and CV link in [src/components/hero/Hero.jsx](src/components/hero/Hero.jsx)
- About content in [src/components/about/About.jsx](src/components/about/About.jsx)
- Projects in [src/data/projects/projects.js](src/data/projects/projects.js)
- Skills in [src/data/skills](src/data/skills)
- Contact links and footer info in [src/components/layout/Footer.jsx](src/components/layout/Footer.jsx)
- Theme styling in [src/theme.js](src/theme.js)

For the contact form, configure the following environment variables in a `.env` file:

```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## Deployment

The project is configured for GitHub Pages deployment through Vite and the gh-pages package. The build script publishes the generated site from the `dist` folder.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
