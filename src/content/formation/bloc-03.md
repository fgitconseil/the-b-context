---
bloc: 3
titre: "Choisir le bon prompt"
duree_estimee: "~13 min"
accroche: "Les 4 intentions de prompt — Production, Exploration, Structuration, Vérification. Un mauvais type de prompt génère une mauvaise catégorie de réponse."
categorie: "Choisir"
takeaway: "/assets/takeaways/bloc-03.png"
slides:
  - index: 0
    titre: "Accroche · 4 intentions"
    audio: "/assets/audio/blocs/3.1.mp3"
    duration: 70.411
    visuels:
      - { fichier: "Diapositive23.PNG", t_start: 0 }
      - { fichier: "Diapositive24.PNG", t_start: 58, marqueurs: ["4-intentions", "intention-exploration", "intention-structuration", "intention-production", "intention-verification"] }
  - index: 1
    titre: "Exploration · gabarit"
    audio: "/assets/audio/blocs/3.2.mp3"
    duration: 192.510
    visuels:
      - { fichier: "Diapositive25.PNG", t_start: 0, marqueurs: ["gabarit-exploration"] }
  - index: 2
    titre: "Structuration · gabarit"
    audio: "/assets/audio/blocs/3.3.mp3"
    duration: 106.891
    visuels:
      - { fichier: "Diapositive26.PNG", t_start: 0, marqueurs: ["gabarit-structuration"] }
  - index: 3
    titre: "Production · gabarit"
    audio: "/assets/audio/blocs/3.4.mp3"
    duration: 114.043
    visuels:
      - { fichier: "Diapositive27.PNG", t_start: 0, marqueurs: ["gabarit-production"] }
  - index: 4
    titre: "Vérification · gabarit"
    audio: "/assets/audio/blocs/3.5.mp3"
    duration: 141.019
    visuels:
      - { fichier: "Diapositive28.PNG", t_start: 0, marqueurs: ["gabarit-verification"] }
  - index: 5
    titre: "Synthèse · tableau 4 types"
    audio: "/assets/audio/blocs/3.6.mp3"
    duration: 129.643
    visuels:
      - { fichier: "Diapositive29.PNG", t_start: 0, marqueurs: ["synthese-4-types"] }
quiz_inline:
  - after_slide: 1
    question: "Un manager demande à l'IA : « Dis-moi quelle stratégie adopter face à ce concurrent. » Il obtient une recommandation définitive, bien argumentée, mais inadaptée à son contexte réel. L'erreur la plus probable est :"
    options:
      - "Le prompt était trop court — il fallait donner plus de contexte"
      - "Il a utilisé un prompt de production (« dis-moi quelle stratégie ») pour une situation qui nécessitait une exploration"
      - "L'IA n'est pas fiable pour les questions stratégiques"
      - "Il fallait utiliser un modèle IA plus puissant"
    answer: 1
    explanation: "Un prompt de production demande à l'IA de produire un livrable défini. Mais ici, le manager n'avait pas encore défini ses critères — il avait besoin de comprendre ses options. Le bon type était l'exploration. Un mauvais type de prompt génère une mauvaise catégorie de réponse, même avec un prompt bien rédigé."
  - after_slide: 2
    question: "En prompt d'exploration, pourquoi est-il indispensable de terminer par « hiérarchise par impact » ou « conclue par 3 recommandations » ?"
    options:
      - "Pour limiter la longueur de la réponse"
      - "Pour forcer l'IA à ne pas sortir du périmètre"
      - "Pour éviter la dispersion et transformer l'exploration en aide à la décision"
      - "Pour respecter le format Markdown"
    answer: 2
    explanation: "Sans instruction de hiérarchisation, l'exploration produit un catalogue exhaustif sans priorisation. La valeur vient de la recommandation finale, pas de l'exhaustivité."
  - after_slide: 3
    question: "Vous utilisez un prompt de structuration pour organiser les notes d'une réunion importante. Quelle instruction est indispensable ?"
    options:
      - "« Synthétise les points les plus importants » — pour obtenir un document concis"
      - "« Ne supprime aucune information — ajoute une section Points à clarifier pour les éléments ambigus »"
      - "« Réfléchis étape par étape avant de structurer »"
      - "« Utilise le format SWOT pour organiser le contenu »"
    answer: 1
    explanation: "La règle d'or du prompt de structuration est zéro perte d'information. L'IA a tendance à synthétiser quand elle structure — ce n'est pas ce qu'on lui demande. « Ne supprime aucune information » prévient ce biais. La section « Points à clarifier » évite que l'IA résolve arbitrairement les ambiguïtés."
  - after_slide: 4
    question: "Vous avez besoin d'une analyse des forces et faiblesses de trois offres fournisseurs avant une réunion de décision. Quel type de prompt est adapté ?"
    options:
      - "Production — vous demandez à l'IA de choisir la meilleure offre"
      - "Vérification — vous demandez à l'IA de contrôler la conformité des offres"
      - "Exploration — vous demandez à l'IA de cartographier les options et leurs critères"
      - "Structuration — vous donnez les offres brutes et demandez à l'IA de les réorganiser"
    answer: 2
    explanation: "Vous n'avez pas encore de livrable défini ni de contenu à organiser. Vous avez besoin de comprendre le terrain avant de décider. C'est la définition du prompt d'exploration : cartographier les options, pas produire une décision."
quiz_final:
  - question: "Votre direction vous demande d'analyser 4 offres logicielles concurrentes avant de choisir. Vous n'avez pas encore de critères définis. Quel type de prompt utilisez-vous ?"
    options:
      - "Production — vous savez ce que vous voulez obtenir"
      - "Exploration — vous avez besoin de cartographier les options avant de décider"
      - "Vérification — vous voulez contrôler des documents existants"
      - "Structuration — vous avez du contenu brut à organiser"
    answer: 1
    explanation: "Quand le livrable n'est pas encore défini et que vous avez besoin de comprendre le terrain, c'est de l'exploration. La production s'utilise quand vous savez exactement ce que vous voulez produire."
  - question: "Vous avez 4 pages de notes prises pendant une réunion stratégique. Vous devez en faire un compte rendu structuré. Quel type de prompt ?"
    options:
      - "Production — vous produisez un livrable"
      - "Exploration — vous cherchez à comprendre vos notes"
      - "Structuration — vous organisez du contenu brut sans le recréer"
      - "Vérification — vous contrôlez si les notes sont complètes"
    answer: 2
    explanation: "La distinction clé : dans la structuration, vous fournissez toute la matière — l'IA organise sans inventer. Dans la production, l'IA crée à partir de vos consignes."
  - question: "Votre juriste vous a envoyé un projet de contrat fournisseur. Vous voulez vérifier s'il couvre bien vos exigences de confidentialité. Quel type de prompt ?"
    options:
      - "Production — demandez à l'IA de réécrire le contrat"
      - "Exploration — cartographiez les clauses possibles"
      - "Structuration — réorganisez le contrat"
      - "Vérification — contrôlez le document existant sur des critères précis"
    answer: 3
    explanation: "La vérification s'utilise quand vous avez un document existant à soumettre à des critères précis. L'IA ne produit pas — elle contrôle et identifie les écarts."
  - question: "Un manager utilise ce prompt : « Rédige un email de présentation de notre nouvelle offre pour nos clients PME ». Quel type est-ce — et quel champ critique manque ?"
    options:
      - "Exploration — il manque le périmètre d'analyse"
      - "Production — il manque le format attendu et les contraintes"
      - "Structuration — il manque le contenu source à organiser"
      - "Vérification — il manque les critères de contrôle"
    answer: 1
    explanation: "C'est un prompt de production (livrable défini : un email), mais sans format ni contraintes précisées. L'IA va choisir la longueur, le ton, la structure à sa place."
  - question: "Quelle est la règle d'or du prompt de structuration ?"
    options:
      - "Toujours fournir un exemple de document similaire"
      - "Zéro perte d'information — ne rien supprimer, ajouter une section « Points à clarifier »"
      - "Demander à l'IA de reformuler pour améliorer la clarté"
      - "Limiter le contenu source à une page maximum"
    answer: 1
    explanation: "La valeur de la structuration réside dans l'organisation sans perte. L'IA tend à synthétiser — l'instruction « ne supprimer aucune information » contre cette tendance."
  - question: "Un responsable RH demande à l'IA : « Vérifie si notre processus de recrutement respecte le RGPD » sans joindre ni le document du processus ni les articles RGPD pertinents. Quelle est la conséquence probable ?"
    options:
      - "L'IA refusera de répondre faute de sources"
      - "L'IA produira une vérification superficielle basée sur des connaissances générales, sans garantie"
      - "L'IA demandera automatiquement les documents manquants"
      - "L'IA produira une réponse correcte si elle est bien entraînée sur le RGPD"
    answer: 1
    explanation: "Sans documents fournis, l'IA vérifie à partir de sa connaissance générale — elle peut rater des obligations récentes (cut-off) et produire une validation sans garantie. La vérification sans source = vérification superficielle."
  - question: "Un manager a besoin d'un support de présentation pour le COMEX sur la stratégie IA. Il dispose de plusieurs analyses internes désorganisées. Quelle séquence de prompts est la plus efficace ?"
    options:
      - "Production directement — demander la présentation finale"
      - "Vérification → Production — contrôler d'abord, puis créer"
      - "Structuration → Production — organiser la matière, puis créer le livrable"
      - "Exploration → Vérification → Production"
    answer: 2
    explanation: "La séquence optimale pour transformer des analyses désorganisées en livrable : d'abord structurer le contenu brut (zéro perte), puis produire le support sur une base organisée."
  - question: "En prompt d'exploration, pourquoi est-il indispensable de terminer par « hiérarchise par impact » ou « conclue par 3 recommandations » ?"
    options:
      - "Pour limiter la longueur de la réponse"
      - "Pour forcer l'IA à ne pas sortir du périmètre"
      - "Pour éviter la dispersion et transformer l'exploration en aide à la décision"
      - "Pour respecter le format Markdown"
    answer: 2
    explanation: "Sans instruction de hiérarchisation, l'exploration produit un catalogue exhaustif sans priorisation. La valeur vient de la recommandation finale, pas de l'exhaustivité."
---

## Accroche

Je vais vous raconter une erreur que je vois chaque semaine.

Un manager a une tâche à faire — analyser trois offres concurrentes avant une réunion stratégique. Il ouvre l'IA et écrit : « Analyse ces trois offres et dis-moi laquelle choisir. »

L'IA produit une réponse longue, bien structurée, avec des comparaisons. Mais quelque chose cloche. Les critères d'analyse ne sont pas les siens. Le format n'est pas ce dont il avait besoin. Et la recommandation finale est trop catégorique.

Il recommence. Même résultat. Il se dit que l'IA n'est pas vraiment utile pour ce genre de tâche.

Ce qu'il ne savait pas, c'est qu'il utilisait le mauvais type de prompt.

Il avait besoin d'un prompt d'exploration — « cartographie-moi les options avec leurs critères ». Il a utilisé un prompt de production — « fais le choix à ma place ».

Ce module va vous apprendre à distinguer les 4 types de prompts. Parce qu'un mauvais type de prompt génère une mauvaise catégorie de réponse, même si le prompt est parfaitement rédigé.

Les 4 types ne sont pas des niveaux de complexité. Ce sont des intentions différentes : Production, Exploration, Structuration, Vérification.

## Type 1 — prompt de production

Le premier type, c'est le prompt de production. Vous l'utilisez quand vous savez exactement ce que vous voulez obtenir et que vous avez besoin que l'IA le produise pour vous.

Un email. Une synthèse. Un plan. Un compte rendu. Une proposition commerciale. Un script. Une fiche produit. La condition : le livrable est défini.

Le gabarit de production a 7 champs : Rôle / Objectif / Contexte / Données / Format / Contraintes / Exemples.

Le champ Exemples est celui que la plupart des gens oublient. Et c'est souvent le plus efficace. L'IA produit par imitation autant que par instruction. Lui montrer un exemple — une réponse déjà validée, un format que vous aimez — est la méthode la plus fiable pour cadrer son livrable.

C'est ce que les experts appellent le « few-shot prompting » : quelques exemples suffisent pour aligner l'IA sur votre standard.

Le point clé : si vous ne précisez pas le format, l'IA choisit. Et son choix n'est pas toujours le vôtre.

## Type 2 — prompt d'exploration

Le deuxième type, c'est le prompt d'exploration. Vous l'utilisez quand vous ne savez pas encore ce que vous voulez produire, mais que vous avez besoin de comprendre un sujet, de cartographier des options, d'identifier des risques ou de préparer une décision.

La distinction avec la production : dans l'exploration, le livrable attendu est une cartographie d'options ou une analyse structurée, pas une décision finale.

Le gabarit d'exploration : Rôle / Sujet / Périmètre / Cadre d'analyse / Critères / Format / Réflexion.

Le champ Réflexion change tout. Quand vous demandez à l'IA de « montrer son raisonnement », elle ralentit sa prédiction et décompose son analyse étape par étape. C'est le Chain of Thought — l'IA commence par identifier les éléments pertinents, les organise, teste ses hypothèses, puis conclut. Les sources d'Anthropic qualifient cette technique d'« arme secrète » pour les prompts d'exploration.

Le risque principal de l'exploration : la dispersion. L'IA peut générer trop de critères, trop de scénarios. Pour éviter ça, ajoutez toujours : « Conclue par 3 recommandations prioritaires » ou « Hiérarchise par impact décroissant ».

Sans cette instruction, vous obtenez un catalogue. Avec elle, vous obtenez un outil d'aide à la décision.

## Type 3 — prompt de structuration

Le troisième type, c'est le prompt de structuration. Vous l'utilisez quand vous avez du contenu brut — notes de réunion, transcription, email long — et que vous voulez l'organiser sans rien perdre.

La différence avec la production : vous ne demandez pas à l'IA de créer. Vous lui donnez une matière brute et vous lui demandez de la mettre en ordre. C'est l'un des usages les plus puissants et les moins risqués.

Le gabarit : Rôle / Contenu source / Objectif / Format cible / Contraintes / Suivi.

Le champ Suivi est utile pour les documents longs : demandez à l'IA de lister ce qui a été traité et ce qui reste, pour ne pas perdre le fil entre sessions.

La règle d'or : zéro perte d'information. L'IA a tendance à synthétiser quand elle structure — ce n'est pas ce que vous lui demandez. La formulation « Ne supprimer aucune information » doit être présente dans tous vos prompts de structuration.

Ajoutez systématiquement la demande d'une section « Points à clarifier » — c'est là que l'IA signale les ambiguïtés plutôt que de les résoudre arbitrairement.

## Type 4 — prompt de vérification

Le quatrième type, c'est le prompt de vérification. Vous l'utilisez quand vous avez un document existant et que vous voulez le soumettre à un contrôle — vérifier sa conformité, identifier ses lacunes, détecter des incohérences.

La différence fondamentale avec les trois autres types : vous ne demandez pas à l'IA de produire ni d'organiser. Vous lui demandez de contrôler.

Le gabarit : Rôle / Élément / Critères / Retour / Règle / Réflexion.

Sur un prompt de vérification, le champ Réflexion n'est pas optionnel. Sans lui, l'IA peut valider un passage ambigu parce qu'il ressemble à quelque chose de conforme. Avec le raisonnement explicité, vous voyez comment l'IA a interprété chaque critère.

La règle critique : « Cite les passages utilisés · Si absent, indique-le · Signale les zones d'incertitude ». Sans ça, la vérification est superficielle.

Avertissement important : la vérification par l'IA ne remplace pas la vérification par un expert humain. Sur des sujets à fort enjeu réglementaire, la relecture d'un expert reste indispensable. L'IA est un premier filtre, pas un certificat de conformité.

## Synthèse

Voilà la carte mentale des 4 types. Production : créer un livrable défini. Exploration : comprendre un sujet ouvert. Structuration : organiser du contenu brut. Vérification : contrôler un document existant.

La question clé avant de prompter : « Qu'est-ce que je veux que l'IA fasse : créer, comprendre, organiser ou contrôler ? » La réponse détermine le gabarit à utiliser. Et le gabarit détermine la qualité du résultat.

Un manager qui sait distinguer ces 4 intentions obtient en moyenne un résultat utilisable dès le premier prompt. Celui qui ne les distingue pas passe en moyenne 3 tentatives à reformuler.

Ces 4 types s'inscrivent dans la progression S.F.O.I. : 🟢 Structurer (le moins risqué), 🟡 Fiabiliser (vérification des sorties), 🔵 Optimiser (analyse rigoureuse), 🟣 Industrialiser (délégation de mission).

En 2026, un 5e type émerge dans les usages avancés : le prompt agentique, qui confie une mission entière à l'IA avec autonomie de recherche et d'exécution. Ce type exige une infrastructure technique différente — c'est le champ de la Partie 3.
