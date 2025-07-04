
# 🌟 Events Explorer

A stunning, responsive event discovery platform built with **Next.js 13+ App Router**, **TypeScript**, and **Tailwind CSS**. Explore curated tech, business, design, and community events across India with a beautifully crafted UI.

---

## ✨ Features

- 🔍 Filter events by **location**, **category**, or **search**
- 🎨 Interactive and modern **landing page** layout
- 🌓 Light/Dark theme compatible
- 📸 Rich media support with high-quality event visuals
- ⚡ Built using **Next.js App Router** and **TypeScript**
- 💅 Styled with **Tailwind CSS** only (no external UI kits)
- 🚀 Easily deployable via Vercel

---

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── layout.tsx             # Global layout
│   ├── page.tsx               # Landing page with filters and event cards
│   └── events/[id]/page.tsx   # Dynamic route for each event
├── components/
│   └── EventCard.tsx          # Reusable event UI card
├── data/
│   └── events.ts              # Static JSON-like array of event objects
public/
└── event-images/              # All static images for events
```

---

## 🚀 Getting Started

### Clone and Install

```bash
git clone https://github.com/Krishi1211/event_management.git
cd events-explorer
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🖼️ Required Images in `public/event-images/`

- `nextjs.jpg`
- `react.jpg`
- `aiml.jpg`
- `startup.jpg`
- `design.jpg`
- `security.jpg`
- `cloud.jpg`
- `women-tech.jpg`
- `hero.jpg` (optional for landing banner background)

You can replace them with your own, just keep the filenames consistent.

---

## 🛠️ Built With

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (for hosting)

---

## 🧠 Improvements (Optional Ideas)

- Add Framer Motion or AOS animations
- Integrate maps/location pins
- Create an event submission form (client + backend)
- Add user authentication with Supabase/Firebase

---

## 🧾 License

Licensed under the [MIT License](LICENSE).

---

## 💌 Contact

Built with ❤️ by [Krishi Shah]  
Feel free to reach out via [krishishah1211@gmail.com](mailto:krishishah1211@gmail.com)
