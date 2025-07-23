# Mini Blog

A multilingual mini-blog built with Next.js 15, demonstrating SSG/SSR, i18n, error handling, and a clean UI.

**Live demo:**  
[https://mini-blog-nine-liart.vercel.app](https://mini-blog-nine-liart.vercel.app)

**Repository:**  
[https://github.com/valentyna88/mini-blog](https://github.com/valentyna88/mini-blog)

---

## Features

- 🌐 **Internationalization (i18n):** English & Ukrainian, easy to add more languages
- ⚡ **Static Generation (SSG)** for posts, **SSR** for individual post pages
- 📰 **Posts:** Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- 🗂️ **Routing:** Main (`/`), About (`/about`), Posts (`/posts/[id]`)
- 🚦 **Error Handling:** Custom 404, error, and loading pages
- 🌙 **Clean, adaptive UI:** Responsive, modern styles with CSS Modules
- 🏗️ **Modular structure:** Reusable components (Header, Footer, Loader, Language Switcher)
- 🔥 **Loader/Spinner** on page transitions and data loading

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- CSS Modules
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/valentyna88/mini-blog.git
cd mini-blog
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- Use the language switcher in the header to change languages.
- Click "Read more" to view a full post.
- The About page contains team/project info and is statically generated.
- Error, loading, and not-found pages are handled via dedicated components.

## Author

- [Valentyna Taranchuk](https://github.com/valentyna88)

## License

This project is for demo/testing purposes only.
