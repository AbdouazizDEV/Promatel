# PROMATEL — Site vitrine (refonte)

Refonte moderne du site [promatelsn.com](https://promatelsn.com/) avec **Next.js**, **Tailwind CSS** et **Framer Motion**.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Accueil (hero animé, services, partenaires, contact)
- `/a-propos` — À propos
- `/services` — Détail des 4 services
- `/contact` — Formulaire et carte

Redirections : `/partenaires` → `/services`, `/a-propos-de-nous` → `/a-propos`.

## Personnalisation

Modifier les coordonnées et textes dans `src/lib/constants.ts`.

## Build

```bash
npm run build
npm start
```
