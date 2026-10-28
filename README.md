# 🚀 Astro Starter Template

Starter template con **Astro + Tailwind CSS + React + SEO básico** listo para desarrollo.

---

## 📦 Stack incluido

- Astro
- Tailwind CSS
- React
- astro-seo
- astro-robots-txt
- astro-sitemap

---

## 🚀 Instalación

Puedes crear un nuevo proyecto usando este template:

```sh
pnpm create astro@latest -- --template <tu-user>/astro-tailwind-starter
```

O clonarlo directamente:

```sh
git clone https://github.com/<tu-user>/astro-tailwind-starter.git
cd astro-tailwind-starter
pnpm install
```

---

## 📁 Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   └── index.astro
│   └── styles/
├── astro.config.mjs
└── package.json
```

- `pages/` → rutas automáticas
- `components/` → componentes reutilizables
- `layouts/` → layouts base
- `styles/` → estilos globales (Tailwind)

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Command          | Action                             |
| ---------------- | ---------------------------------- |
| `pnpm install`   | Instala dependencias               |
| `pnpm dev`       | Servidor local en `localhost:4321` |
| `pnpm build`     | Build de producción en `./dist/`   |
| `pnpm preview`   | Preview del build                  |
| `pnpm astro ...` | Comandos CLI de Astro              |

---

## ⚙️ SEO y optimización

Este template incluye:

- Sitemap automático
- robots.txt generado automáticamente
- Configuración base SEO (`astro-seo`)

Solo necesitas configurar:

- dominio del sitio en `astro.config.mjs`
- metadata base

---

## 🎨 Tailwind CSS

Tailwind ya está configurado y listo para usar.

Puedes empezar directamente en tus componentes:

```html
<div class="flex items-center justify-center min-h-screen">
  <h1 class="text-3xl font-bold">Hello world</h1>
</div>
```

---

## 🧩 React

Puedes usar componentes React dentro de Astro:

```astro
---
import Counter from '../components/Counter.jsx'
---

<Counter client:load />
```

---

## 📌 Notas

- Este template está pensado como base para proyectos rápidos y escalables
- Puedes extenderlo con autenticación, CMS, etc.

---

## 👨‍💻 Autor

_Hecho por_ **Carlos Lizarzaburu** - [LizarzaburuCarlos](https://github.com/LizarzaburuCarlos)

---

## 📚 Recursos

- https://docs.astro.build
- https://tailwindcss.com

---
