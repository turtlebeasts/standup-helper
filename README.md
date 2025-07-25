# 🧠 Standup-helper - A Scalable, Modular Joke App

**Standup-helper** is not your average joke-fetching project.

This app was built with a real-world mindset — focused on **clean architecture**, **global state management**, and **scalability**. It demonstrates how even a simple idea can be engineered like a production-grade application.

---

## 🚀 Features

- 🔁 Fetches 10 random jokes from a public API
- ➕ Add jokes to your personal favorites list
- 🔄 Refresh joke list from anywhere in the app
- ⬇️ Load more jokes dynamically with `Load More` button
- ❌ Remove jokes from favorites
- 💾 Zustand-powered global state for jokes and favorites
- ⚡ Tailwind CSS for a responsive, mobile-first UI

---

## 🛠 Tech Stack

- **React** (Functional Components + Hooks)
- **Zustand** for global state management
- **Tailwind CSS** for utility-first styling
- **Framer Motion** (optional for animation)
- **React Icons** for icons

---

## 🧠 Why It's Different

This isn't a toy app. Standup-helper is built like a **real product**:

### ✅ Scalable State Management

Zustand powers both the joke list and favorites with **fully isolated, reactive global state**. This means:

- Refreshing jokes from any component (like a Navbar button) works out-of-the-box
- No prop drilling
- No context hell

### ✅ Clean Separation of Concerns

- Components are **pure and dumb** — they just render what they're given
- Zustand stores handle all logic: fetching, appending, deduping, etc.
- Easy to plug in new features (search, pagination, infinite scroll)

### ✅ Designed for Growth

You can easily add:

- Joke search
- Joke categories or filters
- Routing (`/favorites`, `/about`, etc.)
- Persistent favorites via `localStorage`
- Toasts/snackbars with `react-hot-toast`

All **without breaking or refactoring anything**. That’s the power of modular architecture.

## ⚙️ Getting Started

```bash
git clone https://github.com/turtlebeasts/standup-helper.git
cd standup-helper
npm install
npm run dev
```
