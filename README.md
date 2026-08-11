# Portfolio

Portfolio personal construido con Astro, React, Tailwind CSS y TypeScript.

## Arquitectura

El proyecto sigue una estructura simple orientada a contenido:

```
src/
  data/portfolio.ts       # Contenido del portfolio: textos, enlaces y listas editables
  components/
    layout/               # Elementos compartidos de la estructura global
    ui/                   # Piezas visuales reutilizables, sin contenido propio
    sections/             # Secciones completas de la página
  layouts/                # Marco HTML común del sitio
  pages/                  # Rutas: sólo compone secciones
  styles/                 # Estilos globales y tokens visuales
```

Para actualizar contenido habitual, editá `src/data/portfolio.ts`. Para cambiar cómo se ve una sección, editá su archivo en `src/components/sections/`. Las piezas repetidas viven en `src/components/ui/`.

## Comandos

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Verificar tipos y componentes:

```bash
npm run check
```

Generar la build de producción:

```bash
npm run build
```

Previsualizar la build:

```bash
npm run preview
```
