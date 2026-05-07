---
bloc: 1
titre: "Comprendre les LLM"
duree_estimee: "~10 min"
slides:
  - index: 0
    titre: "Accroche terrain"
    visuel: "assets/images/m1/01-1-accroche-terrain.png"
    t_start: 0.0
  - index: 1
    titre: "Ce qu'est un LLM"
    visuel: "assets/images/m1/01-2-ce-quest-un-llm.png"
    t_start: 57.776
  - index: 2
    titre: "Ce que l'IA ne fait pas"
    visuel: "assets/images/m1/01-3-ce-que-ia-ne-fait-pas.png"
    t_start: 267.723
  - index: 3
    titre: "Les 4 implications clés"
    visuel: "assets/images/m1/01-4-les-4-implications-cles.png"
    t_start: 387.833
  - index: 4
    titre: "Message de clôture"
    visuel: "assets/images/m1/01-5-message-de-cloture.png"
    t_start: 541.676
quiz_inline:
  - after_slide: 1
    question: "Un LLM génère ses réponses en..."
    options:
      - "Cherchant la réponse correcte dans une base de données"
      - "Prédisant la suite de mots la plus probable après votre message"
      - "Raisonnant comme un expert humain dans chaque domaine"
      - "Accédant à des informations en temps réel sur le web"
    answer: 1
    explanation: "Un LLM est un modèle statistique de prédiction. Il ne comprend pas — il prédit. C'est pourquoi ses réponses peuvent sembler correctes sans l'être : elles sont plausibles, pas nécessairement vraies."
  - after_slide: 2
    question: "Vous demandez à l'IA le taux de TVA applicable à votre activité depuis le 1er janvier 2026. Quelle précaution s'impose ?"
    options:
      - "Aucune — la TVA est une donnée stable que l'IA connaît parfaitement"
      - "Reformuler la question pour obtenir une réponse plus précise"
      - "Vérifier dans une source officielle récente — la date de coupure de l'IA peut l'empêcher de connaître un changement récent"
      - "Utiliser un autre outil IA spécialisé en fiscalité"
    answer: 2
    explanation: "La date de coupure signifie que l'IA n'a pas accès aux informations postérieures à son entraînement. Toute réglementation, taux ou loi peut avoir évolué depuis. Vérifier dans une source officielle est obligatoire pour les données normatives récentes."
  - after_slide: 3
    question: "Une hallucination de l'IA, c'est quand..."
    options:
      - "L'IA invente une réponse parce qu'elle n'a pas compris la question"
      - "L'IA produit quelque chose de faux avec une forme correcte — résultat de son mécanisme de prédiction"
      - "L'IA refuse de répondre à une question jugée trop risquée"
      - "L'IA répète la même réponse plusieurs fois sans progresser"
    answer: 1
    explanation: "Une hallucination n'est pas un mensonge intentionnel. L'IA a produit la réponse statistiquement la plus plausible — et cette réponse était factuellement fausse. La forme est parfaite, le fond est inventé. C'est ce qui la rend dangereuse."
quiz_final:
  - question: "Un LLM produit ses réponses en :"
    options:
      - "Cherchant la vérité dans une base de données"
      - "Prédisant la suite de texte la plus probable"
      - "Raisonnant comme un expert humain"
      - "Accédant à Internet en temps réel"
    answer: 1
    explanation: "Un LLM est un modèle statistique de prédiction. Il ne cherche pas la vérité — il génère ce qui est le plus plausible."
  - question: "Une « hallucination » d'IA, c'est :"
    options:
      - "Une réponse incohérente et illisible"
      - "Une réponse refusée pour raisons éthiques"
      - "Une information inventée présentée avec confiance"
      - "Une erreur de calcul mathématique"
    answer: 2
    explanation: "L'IA peut produire des citations, des chiffres ou des faits qui semblent parfaitement corrects mais sont faux."
  - question: "Qu'est-ce que le « cut-off » d'un modèle ?"
    options:
      - "La limite de longueur d'une réponse"
      - "La date après laquelle l'IA n'a plus de connaissances"
      - "Le nombre maximum de questions autorisées"
      - "Le coût maximum par requête"
    answer: 1
    explanation: "Le cut-off est la date d'arrêt de l'entraînement. L'IA ne connaît pas les événements postérieurs."
  - question: "Vous ouvrez un contrat PDF sur votre bureau et demandez à l'IA de le résumer. Elle peut le voir ?"
    options:
      - "Oui, automatiquement si elle est connectée"
      - "Oui, si vous êtes abonné premium"
      - "Non, il faut lui fournir le contenu explicitement"
      - "Oui, via l'historique du navigateur"
    answer: 2
    explanation: "Un fichier ouvert localement n'est pas visible par l'IA. Vous devez copier/coller le contenu ou le joindre."
  - question: "L'IA vous donne une référence juridique précise avec numéro d'article. Que faites-vous ?"
    options:
      - "Vous la citez directement — l'IA est fiable sur les faits"
      - "Vous la vérifiez dans une source officielle avant utilisation"
      - "Vous demandez à l'IA de confirmer une deuxième fois"
      - "Vous l'utilisez uniquement si c'est une IA premium"
    answer: 1
    explanation: "Les dates, chiffres, citations et références réglementaires doivent toujours être vérifiés dans des sources officielles."
  - question: "L'IA vous donne une réponse très structurée et convaincante. Cela signifie :"
    options:
      - "Que la réponse est correcte"
      - "Que l'IA a vérifié ses sources"
      - "Que la forme est bonne, mais le fond doit être vérifié"
      - "Que vous pouvez la publier sans relecture"
    answer: 2
    explanation: "La qualité de la mise en forme est indépendante de la fiabilité du contenu. L'IA structure très bien — même des erreurs."
  - question: "Dans une relation avec l'IA, qui prend la décision finale ?"
    options:
      - "L'IA, car elle a accès à plus d'informations"
      - "L'humain, toujours"
      - "L'IA si la tâche est technique, l'humain sinon"
      - "Cela dépend du modèle utilisé"
    answer: 1
    explanation: "L'IA propose, l'humain analyse, valide et décide. La responsabilité décisionnelle reste toujours humaine."
  - question: "Pour obtenir une réponse de qualité d'un LLM, le facteur le plus important est :"
    options:
      - "Le nombre de fois qu'on reformule"
      - "La clarté et la précision de la demande initiale"
      - "La longueur de la réponse attendue"
      - "L'heure de la journée"
    answer: 1
    explanation: "La qualité de la demande détermine directement la qualité de la réponse. C'est le principe de base de tout le module de prompting."
---

## Accroche terrain

Vous utilisez déjà l'IA. Ou vos collègues l'utilisent pendant que vous regardez ce module.

Claude, ChatGPT, Copilot, Gemini — ces outils sont dans les entreprises depuis 2023. Pas dans les laboratoires de recherche. Dans les emails, les comptes rendus, les présentations, les analyses commerciales.

Dans une organisation comme la vôtre, il y a probablement des dizaines de salariés qui ouvrent ces outils chaque semaine. Certains obtiennent des résultats remarquables. D'autres accumulent des erreurs sans savoir pourquoi.

La différence ne vient pas du talent. Elle vient de la compréhension.

La plupart des gens utilisent l'IA comme un moteur de recherche très puissant — on pose une question, on attend une réponse fiable. Et c'est là que les erreurs commencent.

Ce module va vous expliquer ce que ces outils font réellement — et surtout ce qu'ils ne font pas. Pas pour vous décourager de les utiliser. Pour vous donner les bases qui permettent de les utiliser correctement.

Parce que comprendre la différence entre ce qu'est l'IA et ce qu'on croit qu'elle est — c'est la fondation de tout ce qui suit dans cette formation.

## Ce qu'est un LLM

Commençons par décortiquer le terme que vous allez entendre partout.

LLM, c'est l'acronyme anglais de Large Language Model — Grand Modèle de Langage. Claude, ChatGPT, Gemini, tous ces outils sont des LLM.

C'est un modèle statistique entraîné sur des milliards de textes : des livres, des articles, du code, des conversations, des sites web. Et à travers cet entraînement, il a appris une seule chose fondamentale : quelle suite de mots est la plus probable après ce que vous venez d'écrire.

Il ne comprend pas. Il prédit. C'est une distinction énorme, et elle va conditionner tout ce que vous allez apprendre dans cette formation.

Imaginez un stagiaire extrêmement cultivé. Il a lu des milliers de livres, de rapports, de manuels, d'articles. Il s'exprime parfaitement, en français comme en anglais. Mais il arrive chez vous le premier jour sans aucun contexte sur votre entreprise.

Si vous lui donnez des instructions précises et un contexte clair, il va produire un travail remarquable. Si vous lui posez une question vague sans contexte, il va improviser — plausible, mais peut-être pas adapté à votre réalité. L'IA générative fonctionne exactement comme ça.

Et parce que l'IA prédit plutôt qu'elle ne comprend, il lui arrive de produire des réponses qui semblent correctes mais ne le sont pas. On appelle ça une hallucination — pas un mensonge, mais le résultat normal de son mécanisme de prédiction.

Exemple : demandez à une IA une référence juridique précise. Elle peut vous citer un article de loi avec numéro, intitulé, date d'entrée en vigueur. Formulé dans un style juridique parfait. Sauf que cet article n'existe pas. L'IA a fait ce qu'elle fait toujours : produire la réponse la plus plausible. Forme correcte, fond potentiellement faux.

## Ce que l'IA ne fait pas

Maintenant qu'on sait ce que l'IA est — un moteur de prédiction textuelle — voyons ce qu'elle n'est pas. Trois limites fondamentales à garder en tête.

Limite 1 : elle n'a pas accès au temps réel. L'IA a été entraînée jusqu'à une certaine date, ce qu'on appelle sa date de coupure, ou cut-off. Tout ce qui s'est passé après, elle ne le sait pas. Une loi votée il y a six mois, une modification du code du travail : l'IA peut ignorer tout ça. Pire, elle peut vous donner la règle d'avant avec la même assurance.

Certains outils ont un accès web pour compenser. Mais ça demande plus de vigilance sur la fiabilité des sources consultées.

Limite 2 : elle ne voit pas vos documents si vous ne les lui donnez pas. Un fichier Excel sur votre bureau, un rapport sur votre réseau : invisible pour l'IA. Pour qu'elle travaille avec vos données, vous devez les lui fournir explicitement — avec toutes les précautions que ça implique sur les données sensibles.

Limite 3 : elle ne sait pas signaler ce qu'elle ne sait pas. C'est la limite la plus insidieuse. Quand un collègue n'est pas sûr, il hésite, il dit « je pense que ». L'IA produit toujours une réponse, avec le même ton d'assurance qu'elle soit certaine ou en train d'inventer.

Elle ne va pas vous dire spontanément « attention, je ne suis pas sûr de ça ». Ce comportement existe, mais il faut l'activer explicitement dans votre demande — on verra comment dans les modules suivants.

## Les 4 implications clés

Maintenant qu'on comprend le mécanisme, voici ce que ça implique concrètement. Quatre implications pratiques.

Implication 1 : la qualité de votre demande détermine la qualité de la réponse. L'IA répond à la question posée. Si la question est floue, la réponse sera floue, même si elle semble bien structurée.

Premier levier : donnez-lui un rôle. « Agis en tant que directeur financier d'une organisation de 80 personnes. » « Tu es un expert en droit du travail qui conseille des managers non juristes. » Attribuer un rôle donne à l'IA un cadre de référence et réduit significativement les réponses génériques.

Implication 2 : certains types d'informations doivent toujours être vérifiés dans une source officielle. Dates. Chiffres. Citations. Références réglementaires. La règle : tout chiffre, toute date, toute référence légale dans un livrable IA doit être vérifié avant utilisation.

Implication 3 : vous restez responsable de tout ce que vous envoyez ou publiez. L'IA propose. Vous analysez. Vous validez. Vous décidez. Ce n'est pas une délégation de responsabilité, c'est un outil d'assistance.

Implication 4 : pour vos tâches récurrentes, utilisez les bons outils. Les Projets permettent de charger vos documents dans un espace de travail persistant. Vous les configurez une fois, l'IA les utilise à chaque session. Le bloc « Projets, instructions et documents » vous montrera exactement comment faire.

## Message de clôture

Faisons le point.

Un LLM est un moteur de prédiction statistique. Il ne comprend pas. Il prédit la suite la plus probable de votre demande.

Trois limites fondamentales : il n'a pas accès au temps réel, il ne voit pas vos fichiers si vous ne les lui donnez pas, et il ne signale pas spontanément son incertitude.

Quatre implications pour votre pratique : clarifiez vos demandes et donnez un rôle, vérifiez les faits critiques dans des sources officielles, gardez la main sur toutes vos décisions, et utilisez les outils adaptés à votre contexte.

Ce que vous venez de comprendre — mécanisme de prédiction, hallucinations, limites — c'est ce qui fait la différence entre les utilisateurs qui en tirent une valeur réelle et ceux qui accumulent les erreurs sans comprendre pourquoi.

Dans le module suivant, on va parler des risques concrets dans un contexte professionnel, et des règles simples pour les éviter. Le quiz qui suit va tester exactement ces notions.
