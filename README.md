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

## Déploiement Vercel

1. Pousser le dépôt sur GitHub (`AbdouazizDEV/Promatel`).
2. Sur [vercel.com](https://vercel.com), **Add New Project** → importer le repo **Promatel**.
3. Vercel détecte **Next.js** automatiquement :
   - **Framework Preset** : Next.js
   - **Build Command** : `npm run build` (défaut)
   - **Output Directory** : `.next` (défaut)
   - **Install Command** : `npm install` (défaut)
4. Aucune variable d'environnement n'est requise pour l'instant (contenu dans `src/lib/constants.ts`).
5. Déployer. Pour le domaine `promatelsn.com`, ajouter le domaine dans **Project Settings → Domains** et configurer les DNS chez le registrar.

### CLI (optionnel)

```bash
npx vercel
npx vercel --prod
```

Les redirections (`/partenaires`, `/a-propos-de-nous`) sont définies dans `next.config.ts`.
