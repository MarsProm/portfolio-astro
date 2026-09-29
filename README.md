# Portfolio de Mariano Ledesma

Portfolio comercial construido con Astro, Tailwind CSS y TypeScript. Presenta trabajos reales como casos de estudio y utiliza contenido local tipado, sin backend ni base de datos.

## Stack

- Astro 7
- Tailwind CSS 4
- TypeScript
- Content Collections
- Vercel

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:4321`.

## Validación

```bash
npm run check
npm run build
```

## Contenido

Los casos de estudio se encuentran en `src/content/projects`. Cada archivo Markdown contiene título, resumen, rol, stack, desafío, solución, resultados e imágenes.

Los datos de contacto están centralizados en `src/data/profile.ts`.

## Publicación

El proyecto genera un sitio estático en `dist/` y está preparado para despliegue automático en Vercel.
