# JobTracker

JobTracker is a React + Vite application for tracking job applications. The dashboard provides application summaries, filtering, editing, deletion, and a form for adding applications. Analytics presents application status and timeline charts.

## Live Demo

- [https://matyaselit07.github.io/Job-Tracker/]

## Main functions

The application includes:

- Dashboard summary of total applications, interviews, and offers
- Add, edit, delete, and filter application records
- Browser local storage persistence so application data survives page refreshes
- Analytics page with status pie chart and applications-over-time bar chart
- Responsive layout for desktop and mobile screens
- Component-based structure with shared header, footer, summary, and application list components

## Preview

![Screenshot](/src/assets/job-tracker-screenshot.png)
![Screenshot](/src/assets/job-tracker-screenshot-1.png)

## Project Structure

The application is organized into a clear component-based structure to keep the interface modular and maintainable:

```text
src/
├── app/
│   ├── App.jsx
│   └── App.css
├── assets/
├── Components/
│   ├── Footer/
│   ├── Header/
│   ├── RecentApplications/
│   └── Summary/
├── data/
│   └── applications.js
├── pages/
│   ├── AnalyticsPage/
│   └── DashboardPage/
└── main.jsx
```

## Technologies

- React 19
- Vite
- React Router with `BrowserRouter`, `Routes`, and `Route`
- Recharts for the analytics pie and bar charts
- Browser `localStorage` for persistent application data
- CSS for styling and responsive layout
- Oxlint for linting
- GitHub Pages with `gh-pages` for deployment

### Icons

- Font Awesome: https://fontawesome.com
- Icons8: https://icons8.com/icons/set/favicon

### Fonts

- **Roboto** – Google Fonts
  - URL: https://fonts.google.com/specimen/Roboto
  - License: Apache License 2.0

<!-- ## Libraries -->

## Description

This project was created to practice React application structure, client-side routing, local data persistence, form handling, reusable components, responsive design, and deployment to GitHub Pages.
