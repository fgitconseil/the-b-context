---
bloc: 1
titre: "Comprendre les LLM"
duree_estimee: "~10 min"
accroche: "Ce qu'est un LLM, ce qu'est une plateforme. Mécanisme, cut-off, hallucinations, implications concrètes pour l'usage professionnel."
categorie: "Comprendre"
takeaway: "/assets/takeaways/bloc-01.png"
slides:
  - index: 0
    titre: "Accroche · ce qui se passe déjà"
    audio: "/assets/audio/blocs/1.1.mp3"
    duration: 57.776
    visuels:
      - { fichier: "Diapositive1.png", t_start: 0 }
  - index: 1
    titre: "Ce qu'est un LLM, ce qu'est une plateforme"
    audio: "/assets/audio/blocs/1.2.mp3"
    duration: 209.947
    visuels:
      - { fichier: "Diapositive2.png", t_start: 0,   marqueurs: ["llm-acronym", "llm-definition", "llm-predicts-not-understands"] }
      - { fichier: "Diapositive3.png", t_start: 38,  marqueurs: ["metaphore-stagiaire"] }
      - { fichier: "Diapositive4.png", t_start: 86,  marqueurs: ["plateforme-vs-llm", "plateforme-mecanismes"] }
      - { fichier: "Diapositive5.png", t_start: 148, marqueurs: ["hallucination-concept", "hallucination-exemple"] }
  - index: 2
    titre: "Trois limites à connaître"
    audio: "/assets/audio/blocs/1.3.mp3"
    duration: 120.110
    visuels:
      - { fichier: "Diapositive6.png", t_start: 0, marqueurs: ["limite-1-cutoff", "limite-2-fichiers", "limite-3-incertitude"] }
  - index: 3
    titre: "Les quatre implications"
    audio: "/assets/audio/blocs/1.4.mp3"
    duration: 153.843
    visuels:
      - { fichier: "Diapositive7.png", t_start: 0, marqueurs: ["implication-1-qualite-demande", "implication-2-verifier-faits", "implication-3-responsabilite", "implication-4-bons-outils"] }
  - index: 4
    titre: "Clôture"
    audio: "/assets/audio/blocs/1.5.mp3"
    duration: 66.976
    visuels:
      - { fichier: "Diapositive8.png", t_start: 0 }
quiz_inline:
  - after_slide: 1
    question: "Un LLM génère ses réponses en..."
    options:
      - "Cherchant la réponse correcte dans une base de données"
      - "Prédisant la suite de mots la plus probable après votre message"
      - "Raisonnant comme un expert humain dans chaque domaine"
      - "Accédant à des informations en temps réel sur le web"
    answer: 1
    explanation: "Un LLM est un moteur de prédiction statistique. Il ne comprend pas, il prédit. C'est pourquoi ses réponses peuvent sembler correctes sans l'être : elles sont plausibles, pas nécessairement vraies. Certaines plateformes ajoutent une recherche web par-dessus le LLM, mais c'est une couche supplémentaire, pas le LLM lui-même."
  - after_slide: 2
    question: "Vous demandez à un assistant le taux de TVA applicable à votre activité depuis le 1er janvier 2026. Quelle précaution s'impose ?"
    options:
      - "Aucune, la TVA est une donnée stable que l'assistant connaît parfaitement"
      - "Reformuler la question pour obtenir une réponse plus précise"
      - "Vérifier dans une source officielle récente, la date de coupure peut empêcher l'assistant de connaître un changement récent ; même si la plateforme ajoute une recherche web, la vérification reste nécessaire"
      - "Utiliser un autre outil IA spécialisé en fiscalité"
    answer: 2
    explanation: "La date de coupure du LLM peut le rendre aveugle aux évolutions postérieures à son entraînement. Si la plateforme ajoute une recherche web, elle peut compenser, mais cela demande plus de vigilance, pas moins. Pour les données normatives récentes, vérifier dans une source officielle reste obligatoire."
  - after_slide: 3
    question: "Une hallucination de l'IA, c'est quand..."
    options:
      - "L'assistant invente une réponse parce qu'il n'a pas compris la question"
      - "L'assistant produit quelque chose de faux avec une forme correcte, résultat de son mécanisme de prédiction"
      - "L'assistant refuse de répondre à une question jugée trop risquée"
      - "L'assistant répète la même réponse plusieurs fois sans progresser"
    answer: 1
    explanation: "Une hallucination n'est pas un mensonge intentionnel. L'assistant a produit la réponse statistiquement la plus plausible, et cette réponse était factuellement fausse. La forme est parfaite (style juridique, chiffres bien formatés, source citée), le fond est inventé. C'est ce qui la rend dangereuse."
quiz_final:
  - question: "Un LLM produit ses réponses en :"
    options:
      - "Cherchant la vérité dans une base de données"
      - "Prédisant la suite de texte la plus probable"
      - "Raisonnant comme un expert humain"
      - "Accédant à Internet en temps réel"
    answer: 1
    explanation: "Un LLM est un modèle statistique de prédiction. Il ne cherche pas la vérité, il génère ce qui est le plus plausible. L'accès à Internet, quand il existe, est une couche ajoutée par la plateforme."
  - question: "Une « hallucination » d'IA, c'est :"
    options:
      - "Une réponse incohérente et illisible"
      - "Une réponse refusée pour raisons éthiques"
      - "Une information inventée présentée avec confiance"
      - "Une erreur de calcul mathématique"
    answer: 2
    explanation: "L'assistant peut produire des citations, des chiffres ou des faits qui semblent parfaitement corrects mais sont faux."
  - question: "Qu'est-ce que la « date de coupure » (cut-off) d'un modèle ?"
    options:
      - "La limite de longueur d'une réponse"
      - "La date après laquelle le LLM n'a plus de connaissances directes"
      - "Le nombre maximum de questions autorisées"
      - "Le coût maximum par requête"
    answer: 1
    explanation: "La date de coupure est la date d'arrêt de l'entraînement. Le LLM brut ne connaît pas les événements postérieurs. Les plateformes peuvent compenser avec une recherche web, mais cela demande plus de vigilance, pas moins."
  - question: "Vous ouvrez un contrat PDF sur votre bureau et demandez à l'assistant de le résumer. Peut-il le voir ?"
    options:
      - "Oui, automatiquement s'il est connecté"
      - "Oui, si vous êtes abonné premium"
      - "Non, il faut lui fournir le contenu explicitement"
      - "Oui, via l'historique du navigateur"
    answer: 2
    explanation: "Un fichier ouvert localement n'est pas visible par l'assistant. Vous devez copier-coller le contenu ou le joindre dans la conversation."
  - question: "L'assistant vous donne une référence juridique précise avec numéro d'article. Que faites-vous ?"
    options:
      - "Vous la citez directement, l'assistant est fiable sur les faits"
      - "Vous la vérifiez dans une source officielle avant utilisation"
      - "Vous demandez à l'assistant de confirmer une deuxième fois"
      - "Vous l'utilisez uniquement si c'est une plateforme premium"
    answer: 1
    explanation: "Les dates, chiffres, citations et références réglementaires doivent toujours être vérifiés dans des sources officielles. Demander à l'assistant de confirmer ne suffit pas, il peut confirmer une erreur avec la même assurance."
  - question: "L'assistant vous donne une réponse très structurée et convaincante. Cela signifie :"
    options:
      - "Que la réponse est correcte"
      - "Que l'assistant a vérifié ses sources"
      - "Que la forme est bonne, mais le fond doit être vérifié"
      - "Que vous pouvez la publier sans relecture"
    answer: 2
    explanation: "La qualité de la mise en forme est indépendante de la fiabilité du contenu. L'assistant structure très bien, y compris des erreurs."
  - question: "Dans une relation avec l'assistant, qui prend la décision finale ?"
    options:
      - "L'assistant, parce qu'il a accès à plus d'informations"
      - "L'humain, toujours"
      - "L'assistant si la tâche est technique, l'humain sinon"
      - "Cela dépend du modèle utilisé"
    answer: 1
    explanation: "L'assistant propose, l'humain analyse, valide et décide. La responsabilité décisionnelle reste toujours humaine."
  - question: "Quelle est la bonne lecture de la distinction LLM / plateforme ?"
    options:
      - "ChatGPT et Claude.ai sont des LLM différents"
      - "Le LLM est le moteur de prédiction ; la plateforme ajoute des mécanismes par-dessus (recherche web, mémoire, outils) qui peuvent modifier le comportement observé"
      - "La plateforme est une version simplifiée du LLM pour les utilisateurs grand public"
      - "Tous les LLM ont accès à Internet en permanence"
    answer: 1
    explanation: "Le LLM est le cœur. La plateforme est ce qui s'ajoute autour : recherche web, mémoire, outils spécialisés. Selon la plateforme, le forfait, le réglage, ces mécanismes sont activés ou non. Connaître ce qui parle vous aide à comprendre ce que vous obtenez, et à appliquer le bon réflexe de vérification."
---

## Accroche · ce qui se passe déjà

Vous utilisez déjà l'IA. Ou vos collègues l'utilisent pendant que vous regardez ce module.

Claude, ChatGPT, Copilot, Gemini, ces outils sont dans les entreprises depuis 2023. Pas dans les laboratoires de recherche. Dans les emails, les comptes rendus, les présentations, les analyses commerciales.

Dans une organisation comme la vôtre, des dizaines de salariés ouvrent ces outils chaque semaine. Certains obtiennent des résultats remarquables. D'autres accumulent des erreurs sans savoir pourquoi.

La différence ne vient pas du talent. Elle vient de la compréhension.

La plupart des gens utilisent l'IA comme un moteur de recherche très puissant, on pose une question, on attend une réponse fiable. Et c'est là que les erreurs commencent.

Ce bloc va vous expliquer ce que ces outils font réellement, et ce qu'ils ne font pas. Pas pour vous décourager de les utiliser. Pour vous donner les bases qui permettent de les utiliser correctement.

Comprendre la différence entre ce qu'est l'IA et ce qu'on croit qu'elle est, c'est la fondation de tout ce qui suit.

## Ce qu'est un LLM, ce qu'est une plateforme

Commençons par décortiquer le terme que vous allez entendre partout.

**LLM**, c'est l'acronyme anglais de *Large Language Model*, Grand Modèle de Langage. C'est le moteur qui se trouve au cœur de tous ces outils.

Qu'est-ce qu'un LLM, exactement ?

C'est un modèle statistique entraîné sur des milliards de textes : des livres, des articles, du code, des conversations, des sites web. À travers cet entraînement, il a appris une seule chose, fondamentale : **quelle suite de mots est la plus probable** après ce que vous venez d'écrire.

Il ne comprend pas. Il prédit.

C'est une distinction énorme, et elle conditionne tout ce que vous allez apprendre dans cette formation.

Voici l'image qui rend ça concret.

Imaginez un stagiaire extrêmement cultivé. Il a lu des milliers de livres, de rapports, de manuels, d'articles. Il connaît le droit, la finance, le marketing, la gestion de projet. Il s'exprime parfaitement, en français comme en anglais.

Mais ce stagiaire arrive chez vous le premier jour sans aucun contexte sur votre entreprise. Il ne connaît pas vos clients, vos procédures internes, vos contraintes sectorielles, votre culture. Il ne sait même pas ce qu'on attend de lui.

Si vous lui donnez des instructions précises et un contexte clair, il produit un travail remarquable. Si vous lui posez une question vague sans contexte, il improvise avec ce qu'il sait, et produit quelque chose de plausible, mais peut-être pas du tout adapté à votre réalité.

L'IA générative fonctionne comme ça. Elle a le savoir, elle n'a pas votre contexte. C'est vous qui devez le lui fournir.

Maintenant, un point souvent mal compris.

Quand vous ouvrez ChatGPT, Claude.ai ou Copilot, vous n'utilisez pas juste un LLM brut. Vous utilisez une **plateforme** qui ajoute des mécanismes par-dessus le LLM.

Ces mécanismes peuvent être : la recherche web pour aller chercher des informations récentes, l'exécution de code pour faire des calculs, la mémoire qui retient ce que vous avez dit dans une conversation précédente, des outils spécialisés pour analyser des images ou des documents.

Selon la plateforme, selon votre forfait, selon votre réglage, ces mécanismes sont activés ou non. Une réponse qui semble étonnamment à jour peut venir d'une recherche web par-dessus le LLM. Une réponse qui semble structurée comme un raisonnement humain peut venir d'un mécanisme dédié.

Pourquoi c'est important ? Parce que les comportements peuvent varier. Un LLM brut a une date de coupure stricte. Une plateforme avec recherche web peut accéder à des informations plus récentes. Les réflexes restent les mêmes, vérifier, sourcer, ne pas faire confiance aveuglément, mais en sachant ce qui parle, vous comprenez mieux ce que vous obtenez.

Et parce que le LLM **prédit** plutôt qu'il ne comprend, il lui arrive de produire des réponses qui semblent correctes mais ne le sont pas. On appelle ça une **hallucination**.

Attention au mot. Une hallucination, ce n'est pas un mensonge. L'IA ne cherche pas à vous tromper, elle n'a pas d'intention. C'est le résultat normal de son mécanisme de prédiction : la réponse la plus plausible statistiquement, qui se trouve être factuellement fausse.

Exemple typique, ce comportement est documenté, il varie selon le modèle, la version et la plateforme. Demandez à un assistant une référence juridique précise. Il peut vous citer un article de loi avec un numéro, un intitulé, une date d'entrée en vigueur. Le tout dans un style juridique parfait. Sauf que cet article n'existe pas.

L'assistant n'a pas menti. Il a fait ce qu'il fait toujours : produire la réponse la plus plausible. Et une citation juridique bien formatée est très plausible statistiquement, parce qu'il en a lu des milliers.

C'est ça, une hallucination. Forme correcte, fond potentiellement faux.

## Trois limites à connaître

Maintenant qu'on sait ce qu'est un LLM, voyons ce qu'il ne fait pas. Trois limites fondamentales à garder en tête.

**Première limite : la date de coupure.**

Le LLM a été entraîné jusqu'à une certaine date, sa *date de coupure*, ou *cut-off* en anglais. Tout ce qui s'est passé après, il ne le sait pas.

Ce que ça signifie concrètement : une loi votée au Parlement il y a six mois, une modification du code du travail entrée en vigueur en janvier, une nouvelle réglementation sectorielle, le LLM peut ignorer tout ça. Pire, il peut vous donner la règle d'avant avec la même assurance qu'une règle en vigueur.

Comme on l'a vu, certaines plateformes ajoutent une recherche web pour compenser cette limite. Mais ça ne résout pas tout, ça vous demande au contraire **plus** de vigilance sur la fiabilité des sources retournées. Une plateforme qui vous renvoie un article daté de 2024 n'est pas plus juste qu'un LLM brut qui vous donne la règle de 2024.

**Deuxième limite : il ne voit pas vos documents si vous ne les lui donnez pas.**

Un fichier Excel ouvert sur votre bureau. Un rapport Word enregistré sur votre réseau. Une base de données interne. Tout ça est invisible pour l'assistant. Pour qu'il travaille avec vos données, vous devez les lui fournir explicitement.

Et là, deux précautions. Première : attention aux données sensibles, on verra ça en détail au bloc suivant. Deuxième : les plateformes proposent des espaces de travail (Projets, instructions, mémoires) qui permettent de charger vos documents une fois, sans recoller à chaque session. C'est un sujet à part entière.

**Troisième limite : le LLM ne signale pas spontanément ce qu'il ne sait pas.**

C'est la limite la plus insidieuse.

Quand vous posez une question à un collègue qui n'est pas sûr, il hésite. Il dit *« je crois que »*, *« je vérifierais »*, *« demande à un tel »*. Le LLM, lui, par défaut, produit toujours une réponse, avec le même ton d'assurance, qu'il soit certain ou en train d'inventer.

Il ne va pas vous dire spontanément *« attention, je ne suis pas sûr »*. Ce comportement existe, il s'active, mais il faut le demander explicitement dans votre prompt. On verra comment au bloc 3.

## Les quatre implications

Maintenant qu'on comprend le mécanisme, voici ce que ça implique dans votre quotidien.

**La qualité de votre demande détermine la qualité de la réponse.**

L'assistant répond à la question posée. Si la question est floue, la réponse sera floue, même si elle semble bien structurée.

Et voici un premier levier, simple, puissant : **donnez un rôle**. Avant de poser votre question, précisez qui vous voulez que l'assistant soit dans ce contexte.

*« Agis en tant que directeur financier d'une organisation de 80 personnes. »*

*« Tu es un expert en droit du travail qui conseille des managers non juristes. »*

*« Tu es un chargé de communication qui rédige pour des acheteurs techniques. »*

Attribuer un rôle donne à l'assistant un cadre de référence et réduit nettement les réponses génériques. C'est l'un des premiers réflexes que vous allez développer.

**Certains types d'informations doivent toujours être vérifiés dans une source officielle.**

Dates. Chiffres. Citations. Références réglementaires. Ce sont les zones à risque.

Voici un cas qu'on rencontre régulièrement en mission. Un manager demande une analyse rapide de son secteur, taux de croissance, parts de marché, performances des concurrents. L'assistant produit un rapport bien structuré, avec des chiffres précis, des pourcentages, des comparaisons. Très convaincant.

Sauf que ces chiffres sont inventés. L'assistant a produit des données financières plausibles pour un secteur qu'il connaît mal ou pour lequel il n'avait pas de données récentes. Et le manager les a utilisés dans une présentation stratégique.

La règle : tout chiffre, toute date, toute référence légale ou réglementaire dans un livrable IA doit être vérifié avant utilisation dans un contexte professionnel. L'assistant est excellent pour structurer, reformuler, organiser. Il est risqué sur les faits précis.

**Vous restez responsable de tout ce que vous envoyez ou publiez.**

L'assistant propose. Vous analysez. Vous validez. Vous décidez. Ce n'est pas une délégation de responsabilité. C'est un outil d'assistance.

L'humain reste décisionnaire. C'est le fil rouge de toute cette formation. Ce n'est pas négociable, même quand les résultats semblent parfaits.

**Pour vos tâches récurrentes, utilisez les bons outils.**

Si vous avez besoin que l'assistant travaille régulièrement avec vos documents internes, vos procédures, vos bases produits, votre convention collective, il existe des espaces de travail dédiés. Selon la plateforme, ils s'appellent Projets, espaces de travail, instructions personnalisées, ou autre. Vous les configurez une fois, l'assistant les utilise à chaque session.

Pour l'instant, retenez l'essentiel : il y a une différence entre coller vos données dans une fenêtre de chat à chaque fois, et les charger dans un espace configuré.

## Clôture

Faisons le point.

Un LLM, Grand Modèle de Langage, est un moteur de prédiction statistique. Il ne comprend pas. Il prédit la suite la plus probable de votre demande.

Une plateforme, ChatGPT, Claude.ai, Copilot, ajoute des mécanismes par-dessus le LLM. Recherche web, mémoire, outils. Connaître ce qui parle vous aide à comprendre ce que vous obtenez.

Trois limites fondamentales : la date de coupure, l'absence d'accès à vos fichiers, et l'absence de signalement de l'incertitude.

Quatre implications : clarifiez vos demandes et donnez un rôle, vérifiez les faits critiques dans des sources officielles, gardez la main sur toutes vos décisions, et utilisez les espaces de travail adaptés à votre contexte.

Ce que vous venez de comprendre, mécanisme de prédiction, hallucinations, limites, c'est ce qui fait la différence entre les utilisateurs qui en tirent une valeur réelle et ceux qui accumulent les erreurs sans comprendre pourquoi.

Au bloc suivant, on parle des risques concrets dans un contexte professionnel, et des règles simples pour les éviter. Comprendre l'IA, c'est bien. Savoir quoi ne pas faire avec elle, c'est tout aussi important.
