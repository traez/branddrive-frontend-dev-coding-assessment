# BrandDrive Frontend Dev Coding Assessment

A technical assessment to evaluate Developer skills

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

Building an intuitive and secure Business Intelligence (BI) Tool, this project focuses on delivering a seamless user experience with authentication, data visualization, and interactive dashboards. Users can register and log in, access protected pages, and view key business metrics such as total users, active sessions, and sales revenue through charts and data tables. The dashboard offers real-time insights with line, bar, and pie charts, while an auto-logout mechanism ensures session security. Developed with Next.js, Tailwind CSS, and Recharts/Chart.js, this project emphasizes responsive design, smooth state management, and clear data presentation, making it a robust, scalable, and visually engaging BI solution.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/branddrive-frontend-dev-coding-assessment](https://github.com/traez/branddrive-frontend-dev-coding-assessment)
- Live Site URL: [https://branddrive-frontend-dev-coding-assessment.vercel.app/](https://branddrive-frontend-dev-coding-assessment.vercel.app/)

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
- tanstack/react-table  
- better-auth  
- react-hook-form  
- hookform/resolvers  
- zod  
- postgres  
- drizzle-orm  
- dotenv  
- react-icons  
- sonner  

### What I learned

**1 Next.js Navigation Patterns**  
In Next.js, both `redirect()` and `router.push()` are used for navigation, but they work differently depending on whether you're working on the server or client side.  
✔ Use `redirect()` (server-side) when you need an immediate redirect and want to stop execution.  
✔ Use `router.push()` (client-side) when you need smooth, SPA-like navigation in response to user actions.  

**2 React Hooks: useTransition**  
`useTransition` is a React Hook that lets you defer state updates, improving UI responsiveness. It returns a tuple:  
`const [isPending, startTransition] = useTransition();`  
- `isPending` (boolean) – Indicates if a transition is ongoing.  
- `startTransition` (function) – Wrap expensive updates inside it to mark them as low-priority.  

**3 Authentication: BetterAuth**  
First use of BetterAuth after hearing much hype about it over Auth.js. BetterAuth is a framework-agnostic TypeScript authentication library that simplifies auth implementation across React, Next.js, Vue, Svelte, and more. It supports email/password, OAuth (Google, GitHub, Discord), two-factor authentication (2FA), and multi-tenancy for teams. With a plugin ecosystem and security-focused features, it ensures seamless authentication.  

**4 API Mocking: MSW**  
MSW (Mock Service Worker) is a powerful API mocking library for JavaScript and TypeScript. It intercepts network requests at the browser or Node.js level, enabling realistic API mocking without modifying application code. Ideal for testing and development, MSW supports REST and GraphQL, ensuring seamless integration with frontend and backend workflows. It improves developer experience by providing accurate, controlled responses.  

**5 Project Shortcomings**  
I couldn't fulfill the following project requirements:  
1. Include a "Keep me logged in" checkbox. If "Keep me logged in" is not selected, auto-logout the user after 1 minute of inactivity.
2. Mock API calls either with an external mocking service or with MSW (Mock Service Worker). Instead, I implemented a real backend with BetterAuth, Drizzle and Supabase.

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
