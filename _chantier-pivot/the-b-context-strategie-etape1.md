# The B Context — Document de stratégie (Étape 1)

*Pivot de positionnement. Statut : verrouillé.*

---

## 0. Ce qui change

Avant : quatre offres en parallèle (Diagnostic IMIA → Mission Équipe, Diagnostic IMIA organisationnel → Mission Organisation, Mission Savoir Critique, Formation présentielle équipe), une formation S.F.O.I. en porte d'entrée universelle, et un site à 15 pages avec un hub Framework à 5 entrées.

Après : une offre unique, Mission Savoir Critique, portée entièrement par la home. Un site vitrine resserré, pas un site à onglets.

---

## 1. Positionnement

**Statut : confirmé.**

The B Context est un cabinet de conseil qui capitalise le savoir tacite critique des experts en Agent Skills injectables dans les IA du client (ChatGPT, Claude, Mistral...). Pas un intégrateur RAG, pas un organisme de formation, pas un cabinet de conseil stratégique classique.

| Type d'acteur | Ce qu'il vend | Sa limite | Pourquoi TBC gagne |
|---|---|---|---|
| ESN / outils RAG (Dust, Copilot...) | Connecter l'IA aux documents existants | Indexe du bruit si le savoir n'est pas écrit | TBC travaille en amont de l'outil : extrait le savoir non écrit avant tout outillage |
| Formateurs IA | Cours de prompt engineering individuel | Rien ne reste une fois le formateur parti | TBC livre un actif permanent (skill), pas une compétence individuelle volatile |
| Cabinets de conseil stratégique | Études, feuilles de route | Trop abstrait, aucun livrable exploitable par un LLM | TBC livre un `SKILL.md` concret, injectable le jour même |

Jamais de co-branding LPBIA en tête de funnel côté TBC (§5).

---

## 2. Invariants (à ne rouvrir dans aucune étape suivante)

**Statut : confirmé.**

- Signature de marque inchangée : *« The B Context se retire, le rôle reste. »*
- ADR-013 (glose IMIA obligatoire à la première mention), ADR-015 (un délai n'est jamais présenté comme subi du fait du dispositif), ADR-016 (AI Practice Steward absent du hero et des accroches) restent en vigueur.
- FGIT Conseil reste une mention d'attribution légale/crédibilité uniquement, jamais émetteur de contenu éditorial.

**Correction actée** : les deux dérives fondatrices (**Qualité Fantôme**, **Reddition Cognitive**) restent le socle intellectuel de la thèse (`/framework/these/`), mais ne sont plus le hook commercial. Elles diagnostiquent un problème de gouvernance des usages IA déjà généralisés, pas le problème de continuité du savoir que résout Mission Savoir Critique. Elles sortent du pitch (home, offre), elles restent en toile de fond doctrinale (thèse).

**Le hook commercial** est celui déjà écrit dans l'ancien Cas 3 d'`/interventions/` : 80 % du savoir stratégique n'est écrit nulle part, un expert part et son savoir part avec lui, un nouveau collaborateur met 6 à 12 mois à devenir opérationnel. Ce texte migre intégralement sur la home (§8).

---

## 3. L'offre unique : Mission Savoir Critique

**Statut : confirmé.**

**Entrée.** Appel de cadrage direct (canal principal). Diag Data IA Bpifrance en accélérateur conditionnel — dossier déposé, non validé, aucune mention « financé » avant validation officielle.

**Qualification.** Grille IMIA légère, ~15 minutes, 5 dimensions. Sert à cadrer le besoin, pas à produire un score publié ou suivi dans le temps. Pas de page dédiée (§7).

**Cœur de mission.**
1. Entretiens experts (méthode MASK).
2. Formalisation du document MASK.
3. Déclinaison en Agent Skills (`SKILL.md`), injectables directement dans les IA du client.
4. Formation d'un référent interne (AI Practice Steward) qui tient le cadre après le départ de TBC.

**Preuve.** Même grille IMIA rejouée à la livraison : un avant/après citable, sans construire d'outil de scoring lourd.

**Ce qui disparaît.**
- Mission Équipe et Mission Organisation comme offres séparées : absorbées en Missions Savoir Critique répétées par périmètre pour les organisations plus grosses.
- Cas 1 (« formation présentiel équipe ») : retiré, S.F.O.I. n'étant plus une offre payante sur site (§6).
- La page `/interventions/` elle-même (§8) : toute la mécanique de l'offre (engagement, durée, ce qui reste, cas client) migre sur la home.

---

## 4. AI Practice Steward

**Statut : confirmé.**

Nom conservé (déjà communiqué sur LinkedIn), page dédiée conservée, mais retirée du nav principal (§8 : « Pour aller plus loin »).

**Définition unique, à appliquer partout sur le site** : le référent interne formé par la mission, livrable humain de la Mission Savoir Critique. **The B Context n'endosse jamais ce titre**, ni en diagnostic, ni en mission.

Ça tranche la définition à trois têtes relevée dans l'audit initial (`/a-propos/` présentait Fayaz comme « premier praticien », `/framework/imia/` présentait l'APS comme meneur du Diagnostic).

---

## 5. La Petite Boîte IA (LPBIA)

**Statut : confirmé.**

Produit indépendant. Cross-sell en aval d'une Mission Savoir Critique, jamais co-brandé en tête de funnel côté TBC. La landing LPBIA peut continuer à référencer TBC dans son tunnel de conversion, c'est déjà la bonne architecture actée dans le chantier précédent.

**Point différé, hors scope de ce chantier TBC** : reformuler la FAQ LPBIA qui présente TBC comme une dépendance opérationnelle plutôt qu'une provenance, quand le contenu LPBIA sera repris.

---

## 6. S.F.O.I.

**Statut : confirmé.**

Retrait complet du site : `/formation/`, `/inscription/`, `/connexion/`, et l'infra Supabase liée (`user_profiles`, `formation_progress`). Contenu migré en format public (YouTube, guides), hors périmètre technique de ce chantier.

**Rôle : notoriété, pas prérequis.** Aucune étape de la Mission Savoir Critique ne dépend de ce que le client ait suivi le contenu S.F.O.I. Son rôle se réduit à poser le vocabulaire et l'autorité avant le premier contact, sans gating fonctionnel.

**Supprimés avec, sans remplacement** : l'Arbre de Décision (PDF), `/contact/` et la table Supabase `contact_messages` (le CTA Calendly du header suffit).

---

## 7. IMIA

**Statut : confirmé.**

Grille légère de qualification, ~15 minutes, 5 dimensions. Pas de score sur 100 points, pas de suivi trimestriel affiché publiquement. Pas de page dédiée : une mention courte dans le bloc offre de la home suffit (§8).

---

## 8. Architecture des pages

**Statut : confirmé.**

- `/framework/` : le hub à 5 entrées disparaît. Il reste deux pages, **Thèse** et **AI Practice Steward**, retirées du nav principal, regroupées en fin de home et en footer sous « Pour aller plus loin ».
- **Manifeste, méthode S.F.O.I., IMIA** : pages supprimées, contenu jugé redondant avec la thèse.
- **`/interventions/`** : supprimée. Son contenu (l'ancien Cas 3 : hook + mécanique d'offre + cas client retail) migre intégralement sur la home.
- Conséquence technique : redirection `/interventions/` → `/` à prévoir (liens externes déjà postés en prospection/LinkedIn), pas un 404 sec.
- Conséquence de contenu : `/framework/these/` et `/framework/ai-practice-steward/` référencent aujourd'hui des pages qui disparaissent (S.F.O.I., IMIA, méthode-sfoi) — toilettage de leurs liens internes en étape 3.

---

## Prochaine étape

Étape 2 (réécrite) : document d'arborescence cible + orientation des contenus, aligné sur cette version resserrée.
