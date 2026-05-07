---
bloc: 4
titre: "Méthode S.F.O.I."
duree_estimee: "~8 min"
slides:
  - index: 0
    titre: "Accroche"
    visuel: "assets/images/m4/04-1-accroche.png"
    t_start: 0.0
  - index: 1
    titre: "La progression S.F.O.I."
    visuel: "assets/images/m4/04-2-la-progression-sfoi.png"
    t_start: 83.176
  - index: 2
    titre: "Cas pratique — Marc applique Structurer puis Fiabiliser"
    visuel: "assets/images/m4/04-3-marc-applique-sfoi.png"
    t_start: 249.752
  - index: 3
    titre: "Les 3 erreurs les plus fréquentes"
    visuel: "assets/images/m4/04-4-les-3-erreurs.png"
    t_start: 322.862
  - index: 4
    titre: "Clôture"
    visuel: "assets/images/m4/04-5-cloture.png"
    t_start: 385.689
quiz_inline:
  - after_slide: 1
    question: "🟢 Structurer signifie..."
    options:
      - "Résumer le contenu brut en gardant l'essentiel"
      - "Organiser 100% de la matière sans perdre un seul élément"
      - "Produire un premier jet rapidement pour l'améliorer ensuite"
      - "Vérifier que le contenu est factuel avant de le présenter"
    answer: 1
    explanation: "Structurer n'est pas résumer. Résumer supprime. Structurer réorganise sans rien enlever. Le critère de passage strict est : zéro information perdue. Un plan bien structuré peut encore contenir des informations incorrectes — c'est le travail de 🟡."
  - after_slide: 2
    question: "Marc demande à l'IA de vérifier si son plan respecte les obligations RGPD. Pourquoi est-il indispensable qu'il lui fournisse le texte du RGPD en référence ?"
    options:
      - "Pour que l'IA aille plus vite dans son analyse"
      - "Parce que l'IA n'a pas accès à Internet sans texte de référence"
      - "Parce que sans source de référence fournie, l'IA peut inventer des manques inexistants ou valider des absences qui n'en sont pas — la vérification est aussi bonne que la source donnée"
      - "Pour respecter les règles de confidentialité du document"
    answer: 2
    explanation: "Une vérification sans source de référence, c'est l'IA qui travaille dans le vide. Elle peut halluciner des obligations manquantes, ou valider ce qui devrait être signalé. La qualité du 🟡 dépend directement de la qualité du document de référence fourni."
  - after_slide: 3
    question: "Votre équipe vient de produire un compte rendu de réunion bien structuré (niveau 🟢). Un collègue propose de le mettre directement dans un workflow automatisé (niveau 🟣) pour gagner du temps. Pourquoi est-ce risqué ?"
    options:
      - "Les workflows automatisés sont encore trop coûteux pour les organisations"
      - "L'industrialisation d'un contenu non fiabilisé amplifie les erreurs à grande échelle — il faut d'abord passer par 🟡 Fiabiliser et 🔵 Optimiser"
      - "Le workflow pourrait ne pas accepter le format Markdown du compte rendu"
      - "Le niveau 🟣 est réservé aux outils Enterprise"
    answer: 1
    explanation: "Passer directement de 🟢 à 🟣, c'est industrialiser du contenu non vérifié. Si le compte rendu contient des erreurs, le workflow les répercutera à chaque exécution — amplifiées et invisibles. 🟡 puis 🔵 ne sont pas des étapes optionnelles."
quiz_final:
  - question: "Marc a structuré ses notes avec 🟢. Le résultat lui semble « très bien fait ». Il décide de l'envoyer directement à la direction. Quelle erreur commet-il ?"
    options:
      - "Il n'a pas utilisé le bon type de prompt"
      - "Il saute le niveau 🟡 — le document n'est pas encore fiabilisé"
      - "Il n'a pas demandé une critique interne à l'IA"
      - "Il aurait dû commencer par 🔵"
    answer: 1
    explanation: "Un plan bien structuré n'est pas un plan fiabilisé. L'IA peut organiser parfaitement des informations incorrectes ou incomplètes. La vérification 🟡 est obligatoire avant toute diffusion."
  - question: "Quel est le critère de passage du niveau 🟢 ?"
    options:
      - "Le résultat est suffisamment court pour être lu en 5 minutes"
      - "L'IA a résumé les points essentiels"
      - "Aucune information n'a été supprimée — le chaos est devenu un plan"
      - "La direction a approuvé la structure"
    answer: 2
    explanation: "🟢 = structurer sans perte. Le critère n'est pas la qualité esthétique du résultat, c'est l'exhaustivité. Si une information a disparu, le niveau 🟢 n'est pas atteint."
  - question: "Quelle instruction est indispensable dans un prompt de niveau 🟡 ?"
    options:
      - "« Reformule dans un style plus professionnel »"
      - "« Cite les passages utilisés · Si absent, indique-le · Signale les zones d'incertitude »"
      - "« Transforme en kit opérationnel directement utilisable »"
      - "« Optimise pour un public non expert »"
    answer: 1
    explanation: "Le niveau 🟡 rend le contenu vérifiable. Cela impose la citation explicite des sources, le signalement des absences, et l'identification des zones d'incertitude. Sans ça, la vérification est superficielle."
  - question: "Pourquoi ne peut-on jamais passer directement de 🟢 à 🟣 ?"
    options:
      - "Car le niveau 🟣 requiert des compétences techniques avancées"
      - "Car l'industrialisation amplifie les erreurs — si la base n'est pas fiabilisée et optimisée, les erreurs se propagent à grande échelle"
      - "Car 🟣 est réservé aux grandes entreprises"
      - "Car le niveau 🔵 est le plus important de la méthode"
    answer: 1
    explanation: "Industrialiser un contenu non fiabilisé, c'est automatiser des erreurs. L'impact n'est plus individuel — il est systémique. C'est pourquoi chaque niveau est une barrière de sécurité."
  - question: "Quelle est la différence entre « structurer » et « résumer » ?"
    options:
      - "Structurer produit un document plus court"
      - "Résumer garde 100% des informations, structurer en supprime"
      - "Structurer réorganise 100% du contenu sans suppression — résumer en supprime une partie"
      - "Les deux sont équivalents — c'est une question de style"
    answer: 2
    explanation: "C'est l'erreur la plus fréquente du niveau 🟢. Résumer = réduire. Structurer = réorganiser sans perte. Si l'output est plus court que l'input, l'IA a résumé, pas structuré."
  - question: "Marc est au niveau 🔵. Il optimise sa charte en FAQ et checklist. À ce stade, la validation juridique :"
    options:
      - "N'est plus nécessaire — l'IA a déjà vérifié au niveau 🟡"
      - "Reste obligatoire — l'IA ne remplace pas la validation humaine experte"
      - "Doit être refaite entièrement car le format a changé"
      - "Est optionnelle si le public cible n'est pas juridique"
    answer: 1
    explanation: "La validation juridique finale est toujours humaine. L'IA au niveau 🟡 identifie les écarts, elle ne certifie pas la conformité. Un juriste reste indispensable avant diffusion."
  - question: "Un service marketing veut automatiser la génération de briefs créatifs avec l'IA. Ils utilisent ce processus depuis 2 semaines avec de bons retours. À quel niveau de la progression se trouvent-ils ?"
    options:
      - "Déjà au niveau 🟣 — ils ont automatisé"
      - "Au niveau 🟢 — ils viennent de commencer à utiliser l'IA"
      - "Probablement entre 🟢 et 🟡 — il faut fiabiliser et optimiser avant toute automatisation"
      - "Au niveau 🔵 — les bons retours le prouvent"
    answer: 2
    explanation: "2 semaines de bons retours ≠ contenu fiabilisé et optimisé. Ils sont probablement encore en phase 🟢. Avant tout passage à 🟣, il faut valider 🟡 (vérification) et 🔵 (optimisation) avec supervision humaine."
  - question: "Quel est l'objectif du niveau 🔵 ?"
    options:
      - "Vérifier la conformité réglementaire du contenu"
      - "Transformer le document validé en outil directement exploitable sans retraitement"
      - "Résumer le document fiabilisé pour un public non expert"
      - "Préparer la mise en production automatique"
    answer: 1
    explanation: "🔵 = optimiser. Le contenu est déjà structuré (🟢) et fiabilisé (🟡). L'objectif est de le rendre directement utilisable — FAQ, checklist, tableau, JSON — sans qu'un humain doive le retravailler."
---

## Accroche

Arriver ici, c'est déjà un choix.

Si vous êtes dans cette Partie 2, c'est que vous n'avez pas décidé de vous arrêter à un usage conversationnel.

La Partie 1 vous a donné les fondations : les 4 types de prompts, l'intention derrière chaque message. C'est acquis.

Ce que la Partie 2 va changer, c'est ce que vous faites avec cette intention. Vous allez apprendre à vérifier que la réponse tient la route. À transformer un bon départ en livrable fiable.

Une méthode. Quatre niveaux. Une règle absolue : ne jamais sauter d'étape. Structurer · Fiabiliser · Optimiser · Industrialiser. C'est S.F.O.I.

Pour vous montrer ce que ça change concrètement, voici l'histoire de Marc. Marc travaille aux RH. On lui a demandé de produire une charte interne d'usage de l'IA avant vendredi. Nous sommes mercredi matin. La direction veut un document « zéro risque ». Marc n'est pas expert en IA.

Alors Marc fait ce que font la plupart : il ouvre l'IA et tape : « Rédige-moi une charte d'usage de l'IA pour notre entreprise. » L'IA lui produit quelque chose. Bien structuré. Ça ressemble à une charte. Mais ce n'est pas la sienne. Ce ne sont pas ses contraintes. Marc a sauté les étapes.

## La progression S.F.O.I.

Avant de voir Marc en action, posons le cadre.

🟢 Structurer. Objectif : organiser 100% de la matière brute sans en perdre un seul élément. Ce n'est pas résumer — résumer, c'est supprimer. Structurer, c'est réorganiser. Critère de passage : aucune information n'a été supprimée.

🟡 Fiabiliser. Objectif : rendre le contenu vérifiable. Chaque affirmation sensible doit être traçable. Critère de passage : les sources sont citées, les obligations manquantes identifiées, les zones d'incertitude signalées. Important : pour que l'IA identifie ce qui manque, il faut lui fournir une source de référence externe. Sans ce document, elle travaille dans le vide.

🔵 Optimiser. Objectif : transformer le contenu fiabilisé en outil directement exploitable, sans retraitement manuel. Critère de passage : le livrable peut être utilisé tel quel par son destinataire final.

🟣 Industrialiser. Objectif : intégrer le livrable optimisé dans des workflows ou des agents qui l'exécutent automatiquement. C'est un système organisationnel gouverné — pas automatiser en oubliant, mais automatiser en maîtrisant. Critère de passage : le workflow est documenté, testé, supervisé, mesuré.

La règle absolue : on ne saute pas d'étape. Jamais. Chaque niveau est une barrière de sécurité. Pas une case à cocher.

## Cas pratique — Marc applique Structurer puis Fiabiliser

Revenons à Marc.

Marc commence par 🟢 Structurer. Il colle ses notes et envoie ce prompt : « Transforme ces notes en plan hiérarchique Markdown. Ne supprime aucune information. Ajoute une section 'Points à clarifier'. »

L'IA produit un plan structuré en 8 sections, avec une section 'Points à clarifier' — les questions exactes qu'un juriste lui posera. Marc a mis de l'ordre dans le chaos et identifié ses angles morts.

Marc passe au niveau 🟡 Fiabiliser. Il envoie ce prompt, avec le plan ET le texte RGPD/AI Act en référence : « Vérifie si ce plan respecte les obligations du RGPD et de l'AI Act ci-joints. Si une obligation manque, indique-le. Cite les passages exacts utilisés. Si une information n'est pas présente dans les documents de référence, dis-le explicitement. N'effectue aucune hypothèse implicite. »

Et l'IA lui répond avec un rapport d'écarts : « ⚠️ Votre plan ne mentionne pas le droit de recours des salariés en cas de décision partiellement automatisée. Référence : RGPD, Article 22. Suggestion : ajouter une sous-section 'Droits des personnes concernées'. »

Marc a obtenu en quelques minutes ce qui lui aurait pris une journée. L'IA prépare, elle ne certifie pas — le juriste reste indispensable pour valider. 🟢 Structurer transforme le chaos en plan. 🟡 Fiabiliser transforme le plan en document sécurisé.

## Les 3 erreurs les plus fréquentes

Maintenant que vous avez vu la méthode en action, voici les 3 erreurs que je vois le plus souvent.

Erreur 1 : confondre structurer et résumer. Structurer, c'est réorganiser 100% du contenu. Résumer, c'est en supprimer une partie. Quand vous utilisez le niveau 🟢, votre seul objectif est zéro perte d'information.

Erreur 2 : sauter le niveau 🟡 Fiabiliser parce que « le résultat 🟢 a l'air bien ». Un plan bien structuré n'est pas un plan fiabilisé. L'IA peut organiser parfaitement des informations incorrectes. C'est l'erreur de Marc s'il avait envoyé directement son plan à la direction.

Erreur 3 : commencer directement au niveau 🔵 ou 🟣 parce qu'on est pressé. La pression de la deadline pousse à sauter. Marc le ressentait mercredi matin. Mais sauter les niveaux, c'est fragiliser la base — un livrable 🔵 bâti sur un contenu non vérifié contient des erreurs dans un format professionnel, prêt à être diffusé.

## Clôture

Marc a livré sa charte vendredi matin. Elle était solide parce qu'il avait suivi les étapes dans l'ordre.

Ce que vous venez d'apprendre ne s'applique pas qu'aux chartes RH. Cela s'applique à n'importe quel document de travail : un rapport d'analyse, une proposition commerciale, un plan de projet, une note stratégique.

La prochaine fois que vous avez un livrable important à produire avec l'IA, posez-vous la question : à quel niveau suis-je ? Ai-je fait le précédent ?

Dans le bloc suivant, on va aller encore plus loin. Parce que maîtriser la méthode par niveaux, c'est bien. Savoir comment donner à votre assistant la connaissance métier dont il a besoin — vos documents, vos procédures, votre vocabulaire — c'est encore mieux.
