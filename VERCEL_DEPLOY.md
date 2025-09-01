# Деплой на Vercel - Пошаговая инструкция

## 🚀 Быстрый старт

### 1. Подготовка проекта
Проект уже настроен для деплоя на Vercel:
- ✅ Установлен `@sveltejs/adapter-vercel`
- ✅ Настроен `vercel.json`
- ✅ Обновлен `svelte.config.js`
- ✅ Создан `.vercelignore`

### 2. Деплой через веб-интерфейс (Рекомендуется)

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Создайте аккаунт или войдите**
3. **Нажмите "New Project"**
4. **Импортируйте ваш репозиторий:**
   - Подключите GitHub/GitLab/Bitbucket
   - Выберите репозиторий `picmi`
5. **Настройки проекта (автоматически определятся):**
   - Framework Preset: `SvelteKit`
   - Build Command: `npm run build`
   - Output Directory: `.svelte-kit/output/client`
   - Install Command: `npm install`
6. **Нажмите "Deploy"**

### 3. Деплой через CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Деплой
vercel

# Для продакшена
vercel --prod
```

## ⚙️ Конфигурация

### vercel.json
```json
{
  "framework": "sveltekit",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### svelte.config.js
```javascript
import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x',
      edge: false
    })
  }
};
```

## 🔧 Переменные окружения

Если нужны переменные окружения, добавьте их в настройках проекта Vercel:
- `NODE_ENV=production`
- Другие специфичные для вашего проекта

## 📁 Структура деплоя

Vercel автоматически:
- Установит зависимости
- Соберет проект
- Создаст serverless функции
- Развернет статические файлы

## 🚨 Возможные проблемы

### Проблема с Windows
На Windows может быть проблема с Vercel адаптером. В этом случае:
1. Деплойте напрямую с GitHub
2. Vercel автоматически соберет проект на своих серверах

### Ошибки сборки
1. Проверьте логи в Vercel
2. Убедитесь, что все зависимости в `package.json`
3. Проверьте, что проект собирается локально

## 🌐 После деплоя

1. **Получите URL проекта** (например: `https://picmi.vercel.app`)
2. **Настройте домен** (если нужно)
3. **Настройте автоматический деплой** при push в main ветку

## 📱 Мониторинг

- **Analytics**: Встроенная аналитика Vercel
- **Logs**: Логи функций и сборки
- **Performance**: Метрики производительности

## 🔄 Обновления

При каждом push в main ветку:
1. Vercel автоматически запустит сборку
2. Создаст preview деплой
3. После merge в main - продакшн деплой

## 📞 Поддержка

- [Vercel Documentation](https://vercel.com/docs)
- [SvelteKit Deployment](https://kit.svelte.dev/docs/adapters#supported-environments-vercel)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
