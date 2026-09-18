# CLAUDE.md — Repo the-b-context

## Ce projet

Site Astro pour **the-b-context.com** — vitrine commerciale The B Context, recentrée sur une offre unique : la **Mission Savoir Critique**.

Le frontstage commercial est : Home · À propos · FAQ. La home porte tout le pitch.
Le backstage (doctrine) est : Thèse · AI Practice Steward, hors navigation principale.

Ce repo est **séparé** de `Formation_prompting` (contenu formation, hors site depuis le pivot) et de `knowledge_extraction` (skills).

---

## Principe de base — charte graphique

**Charte graphique** : light theme, blanc, Inter, fonds sombres en aplat `slate-900`, cards.
→ Tokens de couleur : `src/styles/tokens.css`. Règles d'usage : `docs/design-system.md` (violet réservé au « B » du logo, pas de texte en dégradé ni de halo décoratif).
→ Ne pas adopter le dark theme Lovable.

**Logo** : wordmark SVG « The B Context », le « B » en `--accent-500` (violet), le reste selon le fond (inline dans `Layout.astro`, fichiers `public/wordmark-color.svg` et `public/wordmark-white.svg`).

---

## Stack

- Astro 6 + Tailwind v4 (`@tailwindcss/vite`, sans `tailwind.config`), site statique
- TypeScript strict (`tsconfig.json`), vérification : `npm run check`
- GitHub Pages via GitHub Actions, aucune variable d'environnement requise au build
- Domaine : the-b-context.com (`site: 'https://the-b-context.com'` dans `astro.config.mjs`)

---

## Sources contenu

| Source | Contenu |
|--------|---------|
| `_chantier-pivot/the-b-context-strategie-etape1.md` | Stratégie du pivot (offre unique, invariants, statut de S.F.O.I., IMIA, LPBIA) |
| `_chantier-pivot/the-b-context-arborescence-etape2.md` | Arborescence cible et orientation des contenus |
| `_chantier-pivot/the-b-context-contenus-etape3.md` | Contenus complets : home, patches À propos, FAQ, Thèse, AI Practice Steward, pages légales |
| `01-positionning/Definition-Role-AI-Practice-Steward.md` | Texte complet définition rôle |

---

## Architecture des pages

```
/                                   → home : pitch complet, seule page commerciale
/a-propos                           → fondateur + cabinet
/faq                                → 4 questions (JSON-LD FAQPage identique aux questions affichées)
/framework/these                    → thèse fondatrice (backstage, avec notes de mise à jour datées)
/framework/ai-practice-steward      → rôle APS (backstage)
/cgu, /politique-confidentialite, /mentions-legales → légal
/404

Redirections (astro.config.mjs, exclues du sitemap) :
/interventions/  → /          (liens externes déjà diffusés)
/mainteneurs/    → /a-propos/ (ADR-006)
```

Pages supprimées au pivot : `/formation/` (et ses 5 blocs), `/inscription/`, `/connexion/`, `/contact/`, `/interventions/`, `/framework/` (hub), `/framework/manifeste/`, `/framework/methode-sfoi/`, `/framework/imia/`.

Home (`src/pages/index.astro`, composants dans `src/components/home/`) : Hero · Constat · Pivot · Offre · Ce qui reste (LPBIA) · Pour aller plus loin · FAQ · CTA final.

---

## Navigation

```
Header :
  Logo : "The B Context" → /
  Nav  : À propos · FAQ
  CTA  : "Discuter →" → Calendly (nouvel onglet)
  Mobile : menu hamburger sous 1024 px, mêmes entrées

Footer (3 colonnes) :
  Col 1 — Brand : logo "The B Context" + description proposition de valeur
  Col 2 — Navigation : Accueil · À propos · FAQ
          Pour aller plus loin : Thèse · AI Practice Steward
  Col 3 — Suivre : LinkedIn (uniquement dans le footer, jamais dans le header)
          Légal : Mentions légales · CGU · Politique de confidentialité
  Bottom : © 2026 The B Context. Tous droits réservés.
```

Aucun dropdown, aucun lien vers une page interne de contact : toute prise de contact ouvre Calendly (`CALENDLY_URL`, `src/lib/links.ts`).

---

## Positionnement commercial

Le site fonctionne sur deux niveaux :
- **Frontstage** (vente) : Home · À propos · FAQ
- **Backstage** (doctrine) : Thèse · AI Practice Steward

Règles :
- **Offre unique : Mission Savoir Critique.** Pas de palier produit, pas de Diagnostic IMIA ni de Mission Équipe/Organisation vendus séparément.
- **L'AI Practice Steward n'est pas un livrable de la Mission Savoir Critique.** C'est un accompagnement d'équipe et d'entreprise séparé, à un tout autre ordre de grandeur économique, et il ne sert jamais d'argument de vente de la mission. Ce que la mission laisse, c'est le document pivot et les compétences IA.
- Le rôle AI Practice Steward n'apparaît ni dans le hero, ni dans les titres, ni dans aucune accroche, ni dans le narratif de la Mission Savoir Critique : le visiteur doit reconnaître son problème avant d'avoir à décoder un nom propriétaire. Sur la home, il n'apparaît que dans « Pour aller plus loin », comme piste vers un accompagnement plus large. Référence : ADR-016.
- **Le titre AI Practice Steward n'est jamais porté par The B Context ni par Fayaz** : il désigne un collaborateur du client, formé dans le cadre d'un accompagnement distinct.
- **S.F.O.I.** : notoriété, pas prérequis. Plus enseignée sur le site (chaîne YouTube en préparation), aucune étape de la mission n'en dépend.
- **La Petite Boîte IA** : mentionnée une seule fois en frontstage, dans la section « Ce qui reste après notre départ » de la home, comme produit indépendant qui fait vivre le document pivot. Jamais en accroche, jamais dans le title ni la meta description.
- Les CTA de prise de contact pointent vers Calendly : « Discuter de votre situation → » (ou « Discuter → » dans le header) et « Réserver un appel de cadrage → » en clôture.

Source autoritaire du positionnement : `_chantier-pivot/the-b-context-strategie-etape1.md`.

---

## Conventions

- **Jamais "Coach IA"** — toujours "AI Practice Steward"
- **Terminologie vitrine** : « compétences IA », jamais « Agent Skills » (home, FAQ). Les pages `/framework/` gardent leur registre technique.
- **IMIA ne se développe jamais en externe.** Glose canonique obligatoire à la première occurrence de chaque page publique : « IMIA, l'instrument qui mesure l'écart entre l'intention stratégique de la direction et les pratiques IA réelles ». IMIA est désormais une grille légère de qualification (environ 15 minutes, 5 dimensions), remplie à l'entrée et rejouée à la livraison : pas de score sur 100 ni de suivi trimestriel affichés. Référence : ADR-013.
- **Un délai ne se présente jamais comme subi du fait du dispositif.** Il s'attribue à l'agenda du client ou au périmètre. Référence : ADR-015.
- **FGIT Conseil** est nommé comme entité juridique dans les mentions légales, les CGU, la politique de confidentialité, la page À propos, et dans le bloc d'attribution de marque (« The B Context est la marque de conseil de FGIT Conseil »). Cette attribution est un signal de crédibilité, elle est admise en frontstage. FGIT Conseil n'est en revanche jamais l'émetteur d'un contenu éditorial ou d'une offre.
- **Pages légales** : elles engagent juridiquement FGIT Conseil. Aucune modification n'est mise en ligne sans relecture humaine, idéalement juridique.
- Pages courtes, texte dense, pas de remplissage marketing

---

## Supabase — retiré

L'authentification (comptes, progression de la formation) et le formulaire de contact ont été retirés avec le pivot Mission Savoir Critique : plus aucun code, dépendance, variable d'environnement ni migration Supabase dans ce dépôt.

Note historique : le site utilisait les tables `user_profiles` (avec le trigger `handle_new_user()`), `formation_progress` et `contact_messages`. Les migrations SQL restent consultables dans l'historique git (dossier `supabase/migrations/`, supprimé). Les tables peuvent être supprimées manuellement du dashboard Supabase, de même que les secrets `PUBLIC_SUPABASE_URL` et `PUBLIC_SUPABASE_ANON_KEY` du dépôt GitHub.

---

## Déploiement

`.github/workflows/deploy.yml` : build Astro puis publication sur GitHub Pages à chaque push sur `main`.

`public/CNAME` : `the-b-context.com`
