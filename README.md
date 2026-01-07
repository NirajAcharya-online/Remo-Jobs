# Remo-Jobs – Remote Job Finder

A production-style React application to search, filter, and explore remote jobs with real-world UX patterns:

- Debounced search
- Category filters
- Job details page
- Error and empty-state handling
- Skeleton loading UIs
- RTK Query data caching (no unnecessary refetching)

---

## 🚀 Live Demo

Adding Soon...!

---

## 🎯 Core Features

- 🔍 Search jobs with debounce  
  - avoids API spam  
  - fetch starts only when query length ≥ 3  

- 🎚️ Category-based filtering  
  - software, design, sales, product, finance, others  

- 📄 Job details page  
  - opened using URL params  

- ⏳ Skeleton loaders  
  - different loaders for different pages  

- 🚨 Centralized error component  
  - customizable message and navigation  

- ⚡ RTK Query caching  
  - instant reload on revisit  
  - prevents useless refetching  

- 🧩 Clean separation of concerns  
  - Search page and Filter page are independent  
  - logic not mixed together  

---

## 🛠️ Tech Stack

- React
- React Router
- Redux Toolkit + RTK Query
- Tailwind CSS
- Vite
- Custom React Hooks

---