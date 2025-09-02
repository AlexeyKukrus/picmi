# Деплой на Vercel

## Автоматический деплой

1. **Подключите репозиторий к Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Создайте аккаунт или войдите
   - Нажмите "New Project"
   - Импортируйте ваш GitHub/GitLab репозиторий
   - Vercel автоматически определит, что это SvelteKit проект

2. **Настройки проекта:**
   - Framework Preset: SvelteKit
   - Build Command: `npm run build`
   - Output Directory: `.svelte-kit/output/client`
   - Install Command: `npm install`

3. **Переменные окружения (если нужны):**
   - Добавьте необходимые переменные в настройках проекта

4. **Деплой:**
   - Нажмите "Deploy"
   - Vercel автоматически соберет и развернет проект

## Ручной деплой

1. **Установите Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Войдите в аккаунт:**

   ```bash
   vercel login
   ```

3. **Деплой:**
   ```bash
   vercel
   ```

## Локальная сборка

Для проверки сборки локально:

```bash
npm run build
npm run preview
```

## Структура проекта

- `vercel.json` - конфигурация Vercel
- `svelte.config.js` - настройки SvelteKit с Vercel адаптером
- `.gitignore` - исключения для Git

## Поддержка

При проблемах с деплоем:

1. Проверьте логи сборки в Vercel
2. Убедитесь, что все зависимости установлены
3. Проверьте, что проект собирается локально
