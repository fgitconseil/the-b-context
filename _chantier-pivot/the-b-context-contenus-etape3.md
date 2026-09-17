# The B Context — Contenus complets (Étape 3)

*Base du prompt Claude Code. Construit à partir de `the-b-context-strategie-etape1.md` et `the-b-context-arborescence-etape2.md`, tous deux verrouillés.*

---

## 0. Notes de méthode

- **Pas d'animation en v1** (confirmé) : les sections qui auraient pu être un flow scroll-animé (composant `ScrollSteps` actuel) sont écrites en sections statiques, cartes et tableaux simples.
- **Format** : patch OLD/NEW pour les pages qui ne changent que partiellement. Copie intégrale pour la home, entièrement réécrite.
- **Sourcing du chiffre d'ouverture** : tranché (§1). 80 % gardé, présenté comme estimation reprise dans la littérature de gestion des connaissances depuis Nonaka et Takeuchi (1995), pas comme citation verbatim du livre.
- **Pages légales** : relues intégralement (§6). Deux problèmes réels y ont été trouvés et traités, pas seulement des mentions de formation à retirer. **Ces trois pages engagent juridiquement FGIT Conseil (RGPD, LCEN) : une relecture par toi, ou un juriste, avant mise en ligne reste recommandée. Ce document ne remplace pas un avis juridique.**

---

## 1. Home — copie intégrale

### Hero

Titre (2 variantes) :
- Courte : *« Le savoir critique de vos experts n'est écrit nulle part. »*
- Descriptive : *« Capitalisez le savoir de vos experts avant qu'il ne parte avec eux. »*

Sous-titre :
> Un départ, une réorganisation, un cas limite : l'entreprise découvre alors que ce savoir n'existe que dans une tête. The B Context l'extrait par entretiens guidés et le transforme en Agent Skills, injectables directement dans ChatGPT, Claude ou Mistral, qui tiennent même sur les cas que personne n'a prévus.

CTA unique : « Discuter de votre situation → » (Calendly). Pas de CTA secondaire (Arbre de Décision et Formation supprimés, étape 1 §6).

### Le constat

> Un départ est annoncé, ou seulement pressenti. Une nouvelle recrue doit devenir opérationnelle sur un poste où l'essentiel ne s'apprend nulle part. Dans les deux cas, un processus métier clé dépend d'une personne que personne ne peut dupliquer, et les nouveaux collaborateurs mettent six mois à un an à devenir vraiment autonomes. Le savoir accumulé n'est pas formalisé : il est dans les têtes, dans des emails, dans des habitudes de travail invisibles.
>
> Cette urgence est réelle, qu'elle vienne d'un départ qui approche ou d'une intégration qui traîne. Il faut agir avant, pas après.

Stat callout (format figure/figcaption, cohérent avec le pattern déjà utilisé sur le site) :

> **80 %** de la valeur stratégique d'une entreprise n'est écrite dans aucun document. Elle vit dans la tête de quelques experts clés.
>
> — Estimation couramment reprise dans la littérature de gestion des connaissances depuis Nonaka et Takeuchi, *The Knowledge-Creating Company* (1995).

*(Repris et étendu de l'ancien Cas 3 d'`/interventions/`, adapté au singulier et élargi à l'onboarding.)*

### L'offre — Mission Savoir Critique

**Pour qui.** Une équipe dont un savoir critique repose sur une ou deux personnes : un départ annoncé, ou une intégration de nouveaux collaborateurs qui traîne parce que l'essentiel ne s'apprend nulle part.

**Ce que nous faisons.** Nous extrayons le savoir tacite par entretiens guidés, nous le formalisons dans un document pivot validé par l'équipe, puis nous le déclinons en Agent Skills injectables dans vos IA du quotidien. Un référent interne (AI Practice Steward) est formé pour tenir le cadre après notre départ.

**La qualification.** Une grille légère — IMIA, l'instrument qui mesure l'écart entre l'intention stratégique de la direction et les pratiques IA réelles, environ 15 minutes, 5 dimensions — cadre le besoin pendant l'appel, puis se rejoue à la livraison : un avant/après citable. *(Glose conforme ADR-013.)*

**Pour une organisation à plusieurs équipes** : la mission se répète par périmètre, pas de produit séparé à composer.

**Comment ça s'est passé, un exemple.** Repris tel quel de l'ancien encadré « Un cas · capitaliser avant d'outiller » :

> Chez un acteur du retail, une équipe RH devait fiabiliser un traitement qui reposait entièrement sur l'expérience de ses membres. Un modèle générique aurait produit une moyenne acceptable, pas leur manière de faire.
>
> Ni diagnostic préalable, ni feuille de route, ni PoC. Le premier livrable a été un document pivot : le raisonnement de l'équipe, extrait par entretiens guidés, écrit et validé par elle. Ce document est le contrat d'interface entre ce que l'équipe sait et ce que l'agent exécute. Il rend chaque sortie explicable et localise la correction quand elle est nécessaire.
>
> L'agent a été mis en production deux semaines après le premier atelier. Le seul délai du projet a été celui de leur agenda. Il n'exécute rien d'autre que ce qui avait été formalisé. La première livraison a été la livraison : pas de phase pilote, pas de version d'essai.
>
> Ce qui reste après la mission n'est pas l'agent. C'est le document pivot : relisable, transmissible, indépendant du modèle.

Tableau (repris tel quel, seul tableau de la page) :

| | |
|---|---|
| Engagement de l'équipe métier | 2 ateliers d'1h30, plus la relecture du livrable |
| Délai de mise en production | 2 semaines, dont l'essentiel tenu par l'agenda de l'équipe |
| Développement spécifique | Aucun |
| Maintenance | La mise à jour du livrable, rien d'autre |
| Adhésion observée | L'équipe a demandé à tester, corriger, retester |
| Nature des gains | Temps rendu, homogénéisation du traitement, attention humaine recentrée sur les cas qui la méritent |

*Note : la durée courante d'une Mission Savoir Critique est de 3 à 4 semaines ; ce client a été livré en 2, l'essentiel du délai restant celui de son propre agenda.*

### Pourquoi ça tient sur les cas imprévus

Repris et adapté de l'ancienne `Pivot.astro` :

| Dimension | L'approche outil : le « Bon Prompt » | L'approche actif : le « Savoir Capitalisé » |
|---|---|---|
| Cas prévus | Fonctionne | Fonctionne |
| Cas imprévus | Échoue (hallucination ou comportement aléatoire) | Tient (repose sur des règles, seuils et limites claires) |
| Départ de l'expert | Se dégrade (le savoir part avec la personne) | Reste opérationnel (transmissible et documenté) |
| Reprise par un tiers | Réécriture (on recommence à tâtons) | Évolution (le document pivot se versionne et s'enrichit) |

Citation (gardée, sourcée arXiv, toujours pertinente) :
> 47 150 skills publics analysés : note moyenne de 6,2/12. Écrire un SKILL.md est trivial. Extraire le raisonnement de votre meilleur expert exige une méthode.
> — SkillsBench, arXiv 2602.12670 (Stanford, CMU, Berkeley, Oxford)

Paragraphe de clôture :
> Les outils IA que vous utilisez sont les mêmes que ceux de vos concurrents. Ce qui ne l'est pas, c'est votre façon de faire. Un savoir capitalisé dans un skill garde cette avance ; un prompt générique la dissout. Ne laissez pas l'IA remettre tout le monde au même niveau.

### Et ensuite

*(Seul endroit du frontstage où LPBIA est mentionnée : elle répond à « et après la livraison ? », pas à une accroche.)*

> Le document pivot que vous obtenez est indépendant de tout outil. Si vous voulez le faire vivre en continu, à mesure que vos pratiques évoluent, La Petite Boîte IA est un produit indépendant conçu pour ça. Ce n'est jamais un prérequis à la Mission Savoir Critique.

### Ce qui reste après notre départ

> The B Context se retire, le rôle reste. Un collaborateur formé en interne (AI Practice Steward) tient le cadre.

*(Conforme ADR-016 : première mention du rôle ici, pas dans le hero.)*

CTA : « Discuter de votre situation → »

### Pour aller plus loin

Deux cartes seulement, jamais LPBIA ici (intention différente : comprendre la doctrine, pas prolonger un livrable) : **Thèse** (`/framework/these/`), **AI Practice Steward** (`/framework/ai-practice-steward/`).

### FAQ teaser

3-4 questions reprises de `/faq/` (§3 ci-dessous), lien « Voir toutes les questions → ».

---

## 2. `/a-propos/` — patch

**OLD** (section fondateur) :
> Fayaz Goulam est le fondateur de The B Context et le premier praticien du rôle d'AI Practice Steward.

**NEW** :
> Fayaz Goulam est le fondateur de The B Context et le concepteur de sa méthode.

Raison : le titre AI Practice Steward est réservé au référent interne formé en mission (étape 1 §4), jamais porté par TBC.

Reste inchangé : le paragraphe de parcours professionnel. La section « Le rôle et le framework » dit déjà correctement « le rôle que les organisations développent en interne, avec l'accompagnement de The B Context » — cohérent, pas de patch nécessaire.

---

## 3. `/faq/` — contenu intégral

1. **J'ai accès gratuitement à la formation S.F.O.I. sur YouTube, pourquoi faire appel à The B Context ?**
   La formation S.F.O.I. transmet une méthode individuelle pour mieux utiliser l'IA au quotidien. La Mission Savoir Critique est une intervention de conseil : nous venons extraire le savoir tacite de vos experts, construire le document pivot et livrer des Agent Skills immédiatement opérationnels. Nous formons également un référent (un AI Practice Steward) au sein de votre équipe pour maintenir ces actifs et garantir qu'ils restent fiables dans le temps. Vous ne payez pas pour un cours, mais pour la capitalisation et la sécurisation d'un patrimoine intellectuel.

2. **Est-ce compatible avec les IA que nous utilisons déjà ?**
   Oui. Les Agent Skills livrés s'injectent directement dans ChatGPT, Claude, Mistral ou tout autre assistant que vos équipes utilisent déjà. Aucun outil supplémentaire à déployer.

3. **Que reste-t-il après votre départ ?** *(inchangé)*
   C'est le critère de réussite de chaque mission : The B Context se retire, le rôle reste. Un référent interne est formé à tenir le cadre, les savoir-faire critiques sont capitalisés dans des actifs qui appartiennent à l'organisation.

4. **À qui s'adresse la Mission Savoir Critique ?**
   Aux PME et ETI françaises dont un savoir métier critique repose sur une ou deux personnes, ou dont l'intégration de nouveaux collaborateurs prend six mois à un an. La formation méthodologique publique (S.F.O.I.) est disponible gratuitement sur YouTube, sans lien avec la mission.

**Retirées** : la question sur la grille IMIA comme « audit » ; la question sur LPBIA (déplacée sur la home, §1 « Et ensuite ») ; les questions sur Diagnostic IMIA comme produit séparé et Mission Équipe/Organisation ; « formation sans inscription ».

---

## 4. `/framework/these/` — patches

### Amendement section V (L'instrument : l'IMIA)

À ajouter en fin de section, avant la section VI :

> **Note de mise à jour** *(à dater lors de la publication)*. Cette section décrit l'IMIA telle que conçue à l'origine : un score composite sur 100 points, cinq dimensions pondérées, un suivi trimestriel formalisé. En pratique de mission, l'instrument s'est révélé plus utile sous une forme plus légère : une grille de qualification d'environ 15 minutes, remplie à l'entrée et rejouée à la sortie de chaque Mission Savoir Critique, sans scoring publié ni suivi continu. Le principe reste inchangé (mesurer l'écart entre intention et pratique) ; la lourdeur de l'instrument a été retirée. Détail sur la home et dans le déroulé de l'offre.

### Amendement section VI (La méthode S.F.O.I.)

À ajouter en fin de section :

> **Note de mise à jour.** S.F.O.I. n'est plus enseignée sur ce site : le contenu est publié en accès libre sur la chaîne YouTube The B Context [lien à ajouter quand la chaîne existe]. Elle reste la méthode de référence pour le travail individuel avec un assistant IA, mais n'est plus une condition d'accès à la Mission Savoir Critique.

### Patch « Pour aller plus loin » (fin de page)

**OLD** : 3 cartes (Le rôle, L'instrument, La méthode) pointant vers `/framework/ai-practice-steward/`, `/framework/imia/`, `/framework/methode-sfoi/`.

**NEW** : 2 éléments.
- Carte « Le rôle » → `/framework/ai-practice-steward/` (inchangée)
- Lien texte : « Voir comment ça marche en mission → » vers `/`

---

## 5. `/framework/ai-practice-steward/` — patches

### Patch « Au niveau individuel »

**OLD** :
> Il transmet la méthode S.F.O.I. — une progression dans la pratique qui permet à chaque praticien de structurer, fiabiliser, optimiser et industrialiser ses usages IA. Ce niveau est le point d'entrée. Il n'est pas la destination.

**NEW** :
> Il s'appuie sur la méthode S.F.O.I. (Structurer, Fiabiliser, Optimiser, Industrialiser), disponible en accès libre, pour poser un premier réflexe individuel. Ce niveau est le point d'entrée. Il n'est pas la destination.

### Patch « Au niveau organisation »

**OLD** :
> Il s'appuie sur IMIA, l'instrument qui mesure l'écart entre l'intention stratégique de la direction et les pratiques IA réelles, et s'engage sur une réduction mesurable à T+90 jours. Il capitalise les savoirs tacites critiques sous forme de skills [...]

**NEW** :
> Il s'appuie sur une grille légère, IMIA, l'instrument qui mesure l'écart entre l'intention stratégique de la direction et les pratiques IA réelles, remplie à l'entrée et rejouée à la sortie de mission. Il capitalise les savoirs tacites critiques sous forme de skills [...] *(reste identique ensuite)*

### Patch CTA final

**OLD** : « Accéder à la formation gratuite → » vers `/formation/`

**NEW** : retiré (destination supprimée). Garder seulement « Discuter de votre situation → » vers Calendly.

---

## 6. `/cgu/`, `/politique-confidentialite/`, `/mentions-legales/` — patches

**Lues intégralement.** Deux problèmes réels trouvés, pas seulement des mentions de formation à retirer. Rappel en tête de document (§0) : relecture juridique recommandée avant mise en ligne.

### 6.1 `/mentions-legales/`

**Patch — section « Contact ».**
OLD : « Un canal de contact par courrier électronique est précisé dans les Conditions Générales d'Utilisation. »
NEW : phrase supprimée. Seul LinkedIn (The B Context et Fayaz Goulam) reste comme canal de contact.

**Patch — section « Hébergement des données utilisateurs ».**
OLD : section entière (Supabase, « données des utilisateurs inscrits à la formation »).
NEW : section supprimée. Plus de compte utilisateur, plus de données à héberger à ce titre.

**Patch — section « Propriété intellectuelle ».**
OLD : « Le framework The B Context et la méthode S.F.O.I. sont publiés en accès ouvert selon les principes explicités dans le Manifeste The B Context. »
NEW : « Le framework The B Context et la méthode S.F.O.I. sont publiés en accès ouvert. » *(retrait de la référence au Manifeste, page supprimée)*

### 6.2 `/cgu/`

**Article 1 — Objet.**
OLD : « Le Site héberge notamment une formation gratuite en ligne autour de la méthode S.F.O.I. et présente le framework The B Context et le rôle d'AI Practice Steward. [...] L'inscription à la formation suppose une acceptation explicite lors de la création du compte. »
NEW : « Le Site présente l'offre de conseil The B Context (Mission Savoir Critique), le rôle d'AI Practice Steward et la thèse fondatrice de la méthode. »

**Article 3 — Accès au service.**
Supprimer 3.2 (Formation). Reformuler 3.1 : « L'ensemble du Site est accessible librement, sans inscription ni création de compte. » 3.3 (Disponibilité) devient 3.2, inchangée.

**Article 4 — Inscription et compte utilisateur.**
Supprimé entièrement. Les articles suivants sont renumérotés (5→4, 6→5, 7→6, 8→7, 9→8).

**Article 5 devenu 4 — Propriété intellectuelle.**
Supprimer 5.2 (Contenus de formation) : le contenu pédagogique n'est plus hébergé sur le Site. Garder 5.1 et 5.3, renumérotées 4.1 et 4.2.

**Article 7 devenu 6, point 7.2 — Usage de l'IA générative.**
OLD : « La formation porte sur l'usage de l'intelligence artificielle générative. Les pratiques enseignées visent à sensibiliser l'utilisateur aux risques d'hallucination, de dérive et de dépendance cognitive. L'Éditeur ne saurait être tenu responsable des résultats produits par des outils tiers d'IA générative utilisés par l'utilisateur dans son contexte professionnel. »
NEW : « Les contenus du Site portent sur l'usage de l'intelligence artificielle générative et la capitalisation du savoir métier. L'Éditeur ne saurait être tenu responsable des résultats produits par des outils tiers d'IA générative utilisés par le client dans son contexte professionnel, y compris les Agent Skills livrés dans le cadre d'une Mission Savoir Critique, dont l'usage reste sous la responsabilité du client. »

*(Ce point mérite une attention particulière avant publication : c'est désormais une clause de limitation de responsabilité sur le livrable payant lui-même, pas seulement sur du contenu informatif. À faire relire.)*

**Article 8 devenu 7 — Modification des CGU.**
OLD : « [...] L'utilisateur inscrit est informé de toute modification substantielle via les canaux de contact qu'il a renseignés. »
NEW : « Les modifications sont applicables dès leur publication sur le Site. »

### 6.3 `/politique-confidentialite/`

**Section 2 — Données collectées.**
Supprimer 2.1 et 2.2 (inscription formation, progression pédagogique). Remplacer 2.3 par : « Le Site ne collecte aucune donnée personnelle par formulaire ou compte utilisateur. La seule donnée traitée est une mesure d'audience anonymisée (cookie Google Analytics 4), sous réserve de votre consentement préalable — voir section 9. La prise de rendez-vous s'effectue via Calendly, un service tiers dont l'usage est régi par sa propre politique de confidentialité, indépendante de celle du Site. »

**Section 3 — Finalités et bases légales.**
Le tableau se réduit à une ligne : mesure d'audience (GA4), base légale consentement. Les lignes compte utilisateur, progression, recontact commercial, authentification sont supprimées.

**Section 4 — Destinataires des données.**
Supprimer la ligne Supabase (sous-traitant du compte utilisateur, disparu). Garder GitHub (hébergement statique).

**Section 5 — Durées de conservation.**
Section supprimée, redondante avec la section 9 (rétention GA4 de 14 mois) une fois les données de compte retirées.

**Section 6 — Droits des personnes concernées.**
Gardée telle quelle (bonne pratique standard même avec peu de données traitées). Le renvoi « canaux de contact indiqués dans les CGU » dépend de la résolution du point ouvert §6.1 (email manquant).

**Section 7 — Sécurité des données.**
Retirer les puces « Mots de passe hachés » et « Authentification par le service Supabase ». Garder HTTPS et accès restreint.

**Section 8 — Cookies.**
Retirer la première phrase (« cookies techniques [...] authentification utilisateur »). Ne garde que le paragraphe GA4, déjà présent.

**Section 10.**
OLD : « [...] Les utilisateurs inscrits sont informés de toute modification substantielle via les canaux de contact qu'ils ont renseignés. »
NEW : « [...] La date de dernière mise à jour figure en tête du document. »

---

## 7. Pages supprimées (liste exhaustive)

`/formation/`, `/formation/bloc-01` à `bloc-05`, `/inscription/`, `/connexion/`, `/contact/`, `/interventions/`, `/framework/` (hub index), `/framework/manifeste/`, `/framework/methode-sfoi/`, `/framework/imia/`.

---

## 8. Notes d'exécution technique

- **Redirection** : `/interventions/` → `/` (301 ou équivalent Astro).
- **Nav (`Layout.astro`)** : header réduit à Logo · À propos · FAQ · CTA Calendly. Suppression du dropdown Framework, des liens Formation/Interventions/Contact. Footer : Accueil, À propos, FAQ, Pour aller plus loin (Thèse, AI Practice Steward), LinkedIn, Légal.
- **Supabase** : `user_profiles`, `formation_progress`, `contact_messages` ne sont plus lus par aucune page après la purge. Migration de suppression à créer, ou tables laissées inertes sans code y accédant — au choix de Fayaz au moment de l'exécution.
- **`CLAUDE.md`** : mettre à jour navigation, architecture des pages, retirer les références à la formation à 6/5 blocs.
- **Housekeeping** : supprimer `AUDIT-sfoi-imia.md` et `src/content/formation/_AUDIT-corrige-sfoi-imia.md`.
- **Pas d'animation en v1** (confirmé) : la home s'implémente en sections statiques.

---

## Prochaine étape

Tout est verrouillé. Rédaction du prompt Claude Code à partir de ce document, des deux précédents, et de l'audit initial du repo.
