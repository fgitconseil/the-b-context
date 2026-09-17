# The B Context — Arborescence cible & orientation des contenus (Étape 2)

*Construit à partir de `the-b-context-strategie-etape1.md`, verrouillé. Version resserrée : `/interventions/` et le hub `/framework/` disparaissent.*

---

## 1. Arborescence cible

```
/                                  Home — pitch complet, seule page commerciale
/a-propos/                         Fondateur + cabinet
/faq/                              Objections + compatibilité LLM
/framework/these/                  Thèse fondatrice — backstage, hors nav principal
/framework/ai-practice-steward/    Le rôle — backstage, hors nav principal
/mentions-legales/                 Inchangé
/cgu/                              Toilettage (retrait clauses compte formation)
/politique-confidentialite/        Toilettage (retrait collecte formation_progress)
/404/                              Inchangé, vérifier liens morts après purge
```

**Supprimées** : `/formation/` (+ 5 blocs), `/inscription/`, `/connexion/`, `/contact/`, `/interventions/`, `/framework/` (hub), `/framework/manifeste/`, `/framework/methode-sfoi/`, `/framework/imia/`.

**Redirection à prévoir** : `/interventions/` → `/` (liens externes déjà postés).

9 pages de contenu, deux niveaux de profondeur maximum (`/framework/these/`, `/framework/ai-practice-steward/`), aucun dropdown.

---

## 2. Page par page

### `/` — Home
**Statut : réécriture majeure, page centrale du site.**
- Hero sur le savoir tacite en danger (ex-hook Cas 3), pas sur les deux dérives.
- Bloc offre complet, repris intégralement de l'ancien Cas 3 d'`/interventions/` :
  - le hook (expert qui part, savoir non écrit, délai d'intégration 6-12 mois) ;
  - la mécanique (Offre / Pour qui / Ce que nous faisons / Ce que vous engagez / Ce qui reste / Durée) ;
  - l'encadré « Un cas » (cas client retail, narratif + tableau), la preuve la plus concrète du site.
- Mention courte de la grille IMIA (qualification ~15 min, rejouée en sortie de mission), sans détail des 5 dimensions.
- Aucune mention LPBIA dans le hero ni dans les deux premiers écrans (étape 1 §5) ; un seul paragraphe de fin de page, ton « et ensuite ».
- CTA unique : « Discuter de votre situation » → Calendly.
- Bloc de fin « Pour aller plus loin » → Thèse, AI Practice Steward.
- FAQ teaser aligné sur les nouvelles questions de `/faq/`.

### `/a-propos/`
**Statut : retouche de précision.** Corriger « premier praticien du rôle d'AI Practice Steward » (Fayaz ne porte pas ce titre, étape 1 §4). Reformuler en fondateur de la méthode.

### `/faq/`
**Statut : réécriture partielle.**
- Retirer les questions sur le Diagnostic IMIA comme produit séparé et sur Mission Équipe/Organisation.
- Reformuler la question « à qui s'adressent les interventions » : plus de mot « interventions » au pluriel, une seule offre.
- Supprimer la contradiction « formation sans inscription », sans objet (formation hors site).
- Ajouter : compatibilité avec les IA déjà utilisées (ChatGPT, Claude, Copilot, Mistral...) — absente aujourd'hui, directement pertinente puisque le livrable s'y injecte.
- Ajouter, en option : une question sur LPBIA, seul endroit du frontstage où la mention est admise hors bas de page, puisqu'elle répond à une question posée, pas à une accroche.

### `/framework/these/`
**Statut : amendement, pas réécriture (point ouvert, voir §3).**
- Garder le texte daté intact dans son diagnostic (les deux dérives, le précédent Data Steward, la posture APS).
- Amender les sections V (IMIA) et VI (S.F.O.I.) : elles documentent un instrument scoré et une méthode multi-page qui n'existent plus sous cette forme. Ajouter un encart renvoyant vers la version actuelle (grille légère mentionnée sur la home, S.F.O.I. hors site).
- Toiletter le bloc « Pour aller plus loin » en fin de page : retirer les cartes IMIA et méthode-S.F.O.I. (pages supprimées), garder la carte AI Practice Steward, ajouter un lien vers la home.

### `/framework/ai-practice-steward/`
**Statut : retouche de précision + toilettage des liens.**
- Appliquer partout la définition unique de l'étape 1 §4.
- Retirer les passages qui présentent S.F.O.I. comme une méthode enseignée en profondeur sur le site (elle est hors site) et IMIA comme un instrument à page dédiée (il n'en a plus).
- Retirer les liens internes vers les pages supprimées.

### `/cgu/`, `/politique-confidentialite/`
**Statut : toilettage mineur.** Retirer les clauses liées à la création de compte formation (collecte prénom/nom/entreprise, `formation_progress`), à vérifier en étape 3.

### `/mentions-legales/`, `/404/`
**Statut : inchangé.** Vérifier les liens morts (formation, contact, inscription, interventions) après la purge.

---

## 3. Navigation cible

**Header** : Logo · À propos · FAQ · CTA « Discuter →»

Plus de dropdown Framework. Thèse et AI Practice Steward sortent du nav principal.

**Footer** : Accueil, À propos, FAQ / Pour aller plus loin (Thèse, AI Practice Steward) / LinkedIn / Légal.

---

## 3bis. Point encore ouvert

**Le sort de `/framework/these/`** : amender (recommandé, ci-dessus) vs réécrire complètement vs archiver hors navigation. Le texte est daté et public (juillet 2026) ; l'amender plutôt que le réécrire silencieusement respecte l'exigence de traçabilité datée que le site revendique par ailleurs. À confirmer avant l'étape 3.

---

## Housekeeping (exécution, aucune décision requise)

- Supprimer les deux fichiers d'audit orphelins (`AUDIT-sfoi-imia.md`, `_AUDIT-corrige-sfoi-imia.md`), obsolètes depuis ce pivot.
- Mettre à jour `CLAUDE.md` (navigation, formation à 5 blocs → 0 bloc, architecture des pages).
- Redirection `/interventions/` → `/`.

---

## Prochaine étape

Étape 3 : document de contenus complets, page par page, base du prompt Claude Code.
