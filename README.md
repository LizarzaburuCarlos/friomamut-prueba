# 🚀 Friomamut Prueba by Carlos Lizarzaburu

Código fuente del desarrollo del proyecto prueba de Friomamut, realizado por Carlos Lizarzaburu.

---

## 📦 Stack incluido

- Astro
- Tailwind CSS
- React
- astro-seo
- astro-robots-txt
- astro-sitemap

---

## 🚀 Cómo verla

```sh
pnpm install
pnpm dev
```

Abrir http://localhost:4321. La página lee el archivo `public/docs/proceso-133.csv`.

---

## 🧞 Que hice

Arriba hay un **SÍ o NO** grande para responder la pregunta de si se llegó al objetivo, con cuántas sondas llegaron, cuántas faltan y cuál es la más caliente.

Abajo hay una tarjeta por sonda, ordenadas de la más caliente a la más fría, con su temperatura y cuántos grados le faltan. Las rojas faltan, las verdes llegaron y las grises están sin señal.

---

## ⚙️ Problemas en los datos

**Huecos:** uso la última lectura que hay. Si una sonda tiene más de 10 minutos sin datos antes del final, la marco como "sin señal".

---

## 🎨 Lo que encontré

1. **Ninguna sonda llegó a −1.0 °C.**
2. El Sensor 6 dejó de mandar datos a las 10:32.

---

## 🧩 Con más tiempo

- Ver el historial de cada sonda al hacer clic.
- Calcular cuánto tiempo le falta a cada una.
- Mostrar la pantalla en tiempo real mientras avanza el proceso (posiblemente en línea de tiempo).

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

## 👨‍💻 Autor

_Hecho por_ **Carlos Lizarzaburu** - [LizarzaburuCarlos](https://github.com/LizarzaburuCarlos)

---

## 📚 Recursos

- https://docs.astro.build
- https://tailwindcss.com

---
