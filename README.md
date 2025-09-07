<div align="center">
  <h1>Picmi Storefront</h1>
  <p>Modern SvelteKit storefront with glassy UI, rich content blocks and mobile-first navigation.</p>
</div>

---

## 🇬🇧 English

### Overview

Picmi is a SvelteKit-based storefront that showcases products, editorial content and brand storytelling with a clean, animated UI. The codebase is structured for clarity, fast iteration and production deployment.

- SvelteKit 2, Vite 7, TypeScript
- Modular components – Hero, Shop, History, Articles, Subscription
- Responsive header with mobile menu (overlay) and Age Gate modal
- Route-first architecture, easy to extend

### Project Structure

```
src/
  lib/
    components/
      layout/            # Header, Footer
      home/              # Page sections (Hero, Shop, History, Articles, ...)
    styles/              # tokens and globals
  routes/                # SvelteKit routes (/, /store, /articles, ...)
static/                  # assets (icons, images, backgrounds)
```

Key UX elements:
- `Header.svelte`: sticky header, burger → full-screen mobile menu
- `AgeGate.svelte`: session-based age confirmation modal (blocks UI until confirmed)
- `+layout.svelte`: global wiring (styles, age gate, footer)

### Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
# open http://localhost:5173
```

### Scripts

- `npm run dev` – start the dev server
- `npm run build` – build production assets
- `npm run preview` – preview the production build

### Deployment

This is a standard SvelteKit app – choose an adapter for your target (Vercel, Node, Static, etc.). Example: `@sveltejs/adapter-vercel` is already included in the repo; see `svelte.config.js` and `vercel.json`.

---

## 🇷🇺 Русский

### Обзор

Picmi — витрина на SvelteKit с современным интерфейсом, где сочетаются продуктовые карточки, редакционный контент и бренд‑истории. Код организован так, чтобы упрощать поддержку, расширение и деплой.

- SvelteKit 2, Vite 7, TypeScript
- Модульные компоненты: Hero, Shop, History, Articles, Subscription
- Адаптивный хедер с полноэкранным мобильным меню
- Модальное окно Age Gate (проверка возраста)

### Структура проекта

```
src/
  lib/
    components/
      layout/            # Header, Footer
      home/              # Блоки главной (Hero, Shop, History, Articles, ...)
    styles/              # токены и глобальные стили
  routes/                # Роуты SvelteKit (/, /store, /articles, ...)
static/                  # ассеты (иконки, изображения, фоны)
```

Основные элементы UX:
- `Header.svelte`: закреплённый хедер, бургер → полноэкранное мобильное меню
- `AgeGate.svelte`: модалка с подтверждением возраста, блокирует страницу до подтверждения
- `+layout.svelte`: глобальные стили, модалка, футер

### Быстрый старт

Требования: Node.js 18+ и npm.

```bash
npm install
npm run dev
# откройте http://localhost:5173
```

### Скрипты

- `npm run dev` — запуск локального сервера
- `npm run build` — продакшн-сборка
- `npm run preview` — предпросмотр продакшн-сборки


### Деплой

Это стандартное приложение SvelteKit. В репозитории деплой на Vercel — см. `svelte.config.js` и `vercel.json`.

---

### License / Лицензия

This project is provided “as is” for demonstration and educational purposes.
Проект предоставляется «как есть» для демонстрационных и учебных целей.
