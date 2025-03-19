# Sandbox 5; (Cookies, Charts, Maps, Carousel and TailwindCSSV4)

Sandbox app for Cookies, Charts, Maps, Carousel and TailwindCSSV4

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Your task is to build a sandbox environment that integrates various frontend features, including cookie management, dynamic charts, interactive maps, and an image carousel, all styled with Tailwind CSS v4. Implement client-side storage using js-cookie for managing cookies, allowing users to store and retrieve small data efficiently. Use a charting library to visualize data interactively and integrate Leaflet with OpenStreetMap for an engaging mapping experience. Develop a customizable image carousel for seamless browsing of image collections. Ensure the UI is responsive and modern by leveraging Tailwind CSS v4, and structure your components for easy navigation and scalability.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/sandbox-cookies-charts-maps-carousel-tailwind4](https://github.com/traez/sandbox-cookies-charts-maps-carousel-tailwind4)
- Live Site URL: [https://sandbox-cookies-charts-maps-carousel-tailwind4.vercel.app/](https://sandbox-cookies-charts-maps-carousel-tailwind4.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Typescript
- Nodejs
- Tailwind CSS
- bprogress/next
- chart.js
- react-chartjs-2
- js-cookie
- leaflet
- react-leaflet
- react-alice-carousel

### What I learned

**1 Cookie Management in TypeScript**  
Install dependencies: `npm i js-cookie` and `npm i -D @types/js-cookie` for TypeScript support  
Must use client-side components in Next.js when working with cookies  
Follow documentation from current version v3.0.5

**2 Top 5 Cookie Use Cases**

- [A] Authentication & Sessions
  Store JWTs or session tokens securely with expiration  
  Enhanced security over localStorage by reducing XSS risks  
  Prevents persistent sessions for inactive users
- [B] User Preferences & Personalization
  Save settings like theme preference, language, or layout choices  
  Ensures preferences persist across sessions  
  No authentication or backend storage required
- [C] Shopping Cart & E-commerce  
  Maintain cart contents between sessions  
  Improves user experience by preserving selections  
  Reduces cart abandonment rates
- [D] Remember Me & Auto-login
  Enable persistent login across browser sessions  
  Store tokens with appropriate expiration  
  Balance convenience with security considerations
- [E] Rate Limiting & Preventing Spam
  Track form submissions or API requests  
  Prevent multiple submissions in short periods  
  Ensure fair use of application

**3 Chart.js Integration**  
Useful resources:

- [https://blog.logrocket.com/using-chart-js-react/](https://blog.logrocket.com/using-chart-js-react/)
- [https://react-chartjs-2.js.org/](https://react-chartjs-2.js.org/)

**4 Tailwind CSS v4 Global Styling**  
Global stylesheet is teh new approach replacing tailwind.config.ts  
Use `@layer base { }` for default styling:  
`@layer base {`
` * {`
`  margin: 0;`
`  padding: 0;`
`  box-sizing: border-box;`
`  scroll-behavior: smooth;`
` }`
`}`  
Use `@theme inline {}` to extend Tailwind for custom colors and fonts

**5 Tailwind CSS Animation**  
`animate-pulse` utility applies a subtle pulsing animation  
Commonly used for loading skeletons or to indicate background processes  
Example: `<div class="w-32 h-32 bg-gray-300 animate-pulse"></div>`  
Best for skeleton loaders, button feedback, and loading indicators

**6 UI Enhancement Tools**  
BProgress: A successor to Next NProgress Bar for page loading indicators

**7 Next.js Advanced Features**  
Implemented nested layouts for complex page structures  
First experience with dynamic imports using next/dynamic

**8 Next.js Authentication Middleware**  
Checks for "user" cookie to manage authentication-based redirects  
Redirects unauthorized users from protected routes to /login  
Prevents authenticated users from accessing /login or /register  
Uses NextResponse from "next/server" for handling redirects at the Edge

**9 Map Integration**  
Leaflet + react-leaflet + OpenStreetMap (OSM) provides a free alternative to Mapbox  
Similar functionality with more setup required  
Added type definitions with `npm install -D @types/leaflet`

**10 State Management Debugging**  
Redux DevTools Chrome extension works with any state management solution  
Supports custom implementations when integrated with its API

**11 Zustand Middleware**  
`persist(...)`: Saves store state to localStorage for persistence across page reloads  
`devtools(...)`: Enables Redux DevTools support for debugging store changes

**12 VS Code Productivity Tips**  
On Windows, hover over undefined terms and press Ctrl + Space for autocomplete  
Press Enter to auto-import the module  
Alternative: Ctrl + . to open Quick Fix and select "Add Import"  
Ensure auto-imports are enabled in settings

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Zeeofor Technologies](https://zeeofortech.vercel.app/)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
