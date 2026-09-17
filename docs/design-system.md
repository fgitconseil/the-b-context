# Design system — The B Context

Référence de la charte du site. Source des tokens : `src/styles/tokens.css`, importé par `src/styles/global.css`.

## Tokens de couleur

| Token | Valeur | Utilitaire Tailwind | Usage |
|---|---|---|---|
| `--primary-500` | `#3b82f6` | `primary-500` | Bleu clair, états secondaires |
| `--primary-600` | `#2563eb` | `primary-600` | Bleu principal : CTA, liens, filets d'accent |
| `--primary-700` | `#1d4ed8` | `primary-700` | Bleu foncé : survol, fin de dégradé des boutons |
| `--accent-500` | `#8b5cf6` | `accent-500` | Violet de marque : le « B » du logo |
| `--accent-600` | `#7c3aed` | `accent-600` | Violet foncé : survol ponctuel |
| `--slate-800` | `#1e293b` | `slate-800` (natif Tailwind) | Fonds sombres secondaires |
| `--slate-900` | `#0f172a` | `slate-900` (natif Tailwind) | Fonds sombres : heros, footer, texte principal |
| `--sfoi-s` | `#22c55e` | `sfoi-s` | S.F.O.I. — Structurer |
| `--sfoi-f` | `#eab308` | `sfoi-f` | S.F.O.I. — Fiabiliser |
| `--sfoi-o` | `#3b82f6` | `sfoi-o` | S.F.O.I. — Optimiser |
| `--sfoi-i` | `#a855f7` | `sfoi-i` | S.F.O.I. — Industrialiser |

Les gris intermédiaires (bordures, textes secondaires) utilisent la palette `slate` native de Tailwind.

**Règle d'écriture :**
- en CSS, `var(--primary-600)` ;
- dans le balisage, l'utilitaire (`bg-primary-600`, `border-sfoi-s`) ;
- ne jamais réécrire une valeur hexadécimale en dur.

Les tokens S.F.O.I. sont sémantiques : ils ne servent qu'à désigner les quatre actes de la méthode.

## Typographie

Inter Variable (`@fontsource-variable/inter`), seule famille. La hiérarchie se fait par graisse et taille, pas par une seconde police.

## Logo

Wordmark SVG « The B Context », le « B » en `#8B5CF6` (`--accent-500`). Version foncée dans le header, version blanche dans le footer. Fichiers : `public/wordmark-color.svg`, `public/wordmark-white.svg`.

## Jugement sur la charte (septembre 2026)

Le positionnement demande un registre de rigueur, de gouvernance et de preuve.

**La palette est conservée sans changement.**
- Le bleu profond et le slate sombre portent ce registre.
- Le violet, limité à la marque, reste distinctif.
- La palette S.F.O.I. est un vrai code sémantique, pas un décor.

Ce qui faisait lire le site comme un « SaaS IA générique » tenait à deux usages, pas aux couleurs :
- les halos radiaux bleu et violet en fond de hero ;
- le texte en dégradé bleu vers violet (`.gradient-text`).

Ce sont les marqueurs visuels les plus répandus des produits IA grand public. Ils signalent l'effet plutôt que la mesure.

### Évolution retenue : une règle d'usage, pas une nouvelle palette

1. **Le violet est réservé** au signal de marque (le « B ») et à un accent ponctuel. Il ne sert ni de fond ni de dégradé décoratif.
2. **Pas de texte en dégradé ni de halos décoratifs** sur les nouvelles sections. Les fonds sombres sont des aplats `slate-900`.
3. **Aplats et filets fins** (bordure `primary-600` de 2 px, séparateurs `slate-200`) pour structurer : c'est le registre du document de preuve, pas de l'affiche.

**Pourquoi :**
- un dirigeant qui évalue un dispositif de gouvernance lit la sobriété comme un indice de sérieux ;
- les effets lumineux associent au contraire la marque à des outils qu'elle vient justement encadrer.

**Périmètre :**
- la règle s'applique à la nouvelle home (`src/components/home/`) et aux pages refondues ensuite ;
- les classes globales existantes (`.btn-primary`, `.btn-secondary`, `.card`, `.gradient-text`) ne sont pas modifiées, et les autres pages gardent leur rendu actuel ;
- `.gradient-text` n'est plus utilisé nulle part et reste disponible, à ne pas réemployer.
