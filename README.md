# Curriculum Vitae — Paulo Mateo Salazar Espinoza

A bilingual Curriculum Vitae built with React, TypeScript, and Vite. It presents Full Stack development experience, cloud infrastructure work, secure development practices, selected projects, education, and contact information.

## Highlights

- Spanish and English interface with persisted language preference
- Light and dark themes
- Accessible motion that respects reduced-motion preferences
- Local SVG assets for project previews and technology icons
- Print-friendly layout for saving a PDF copy
- Download-ready slots for PDF and Word résumés

## Technology

- React 19
- TypeScript
- Vite 8
- Vanilla CSS
- Local SVG assets

## Project Structure

```text
src/
├── components/      Reusable UI components
├── constants/       Copy and tool icon mappings
├── data/            Portfolio content and configuration
├── hooks/           Preference and scroll-reveal behavior
├── App.tsx          Page composition
├── main.tsx         Application entry point
└── styles.css       Global styles and responsive layout
public/
├── documents/       PDF and Word résumé files
├── images/          Project preview artwork
└── tool-icons/      Local technology SVG assets
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Résumé Downloads

Place the final files in `public/documents/` using these names:

```text
CV-Paulo-Mateo-Salazar-Espinoza.pdf
CV-Paulo-Mateo-Salazar-Espinoza.docx
```

Then set `available` to `true` for each item in `src/data/profile.ts`.

## GitHub Pages

Every push to `main` runs a typed production build and publishes the site to:

```text
https://matezepam.github.io/curriculum-vitae/
```

## Vercel

Production deployment: [curriculum-vitae-paulo-salazar.vercel.app](https://curriculum-vitae-paulo-salazar.vercel.app)

## License

This repository contains personal portfolio material. Reuse is not permitted without explicit authorization.
