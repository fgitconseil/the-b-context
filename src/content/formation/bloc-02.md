---
bloc: 2
titre: "Risques · cadre commun"
duree_estimee: "~12 min"
accroche: "Les 3 risques professionnels réels — exfiltration, risque réputationnel, industrialisation prématurée. Les règles simples pour ne pas les subir."
categorie: "Comprendre"
takeaway: "/assets/takeaways/bloc-02.png"
slides:
  - index: 0
    titre: "Accroche · manager 18h, appel d'offres"
    audio: "/assets/audio/blocs/2.1.mp3"
    duration: 52.776
    visuels:
      - { fichier: "Diapositive9.PNG", t_start: 0 }
  - index: 1
    titre: "Exfiltration · règles et niveaux de protection"
    audio: "/assets/audio/blocs/2.2.mp3"
    duration: 161.371
    visuels:
      - { fichier: "Diapositive10.PNG", t_start: 0 }
      - { fichier: "Diapositive11.PNG", t_start: 25,  marqueurs: ["4-categories-donnees"] }
      - { fichier: "Diapositive12.PNG", t_start: 70,  marqueurs: ["3-questions-regle", "question-1-public", "question-2-personnes", "question-3-strategique"] }
      - { fichier: "Diapositive13.PNG", t_start: 100, marqueurs: ["3-niveaux-protection", "niveau-public", "niveau-pro", "niveau-enterprise"] }
  - index: 2
    titre: "Réputationnel · zones et protocole"
    audio: "/assets/audio/blocs/2.3.mp3"
    duration: 176.176
    visuels:
      - { fichier: "Diapositive14.PNG", t_start: 0,   marqueurs: ["4-zones-reputation", "zone-dates", "zone-chiffres", "zone-citations", "zone-engagements"] }
      - { fichier: "Diapositive15.PNG", t_start: 65,  marqueurs: ["usurpation-deepfakes", "deepfakes-exemples"] }
      - { fichier: "Diapositive16.PNG", t_start: 139, marqueurs: ["protocole-3-temps", "etape-identifier", "etape-verifier", "etape-relire"] }
  - index: 3
    titre: "Industrialisation · cadre S.F.O.I. et garde-fous"
    audio: "/assets/audio/blocs/2.4.mp3"
    duration: 198.547
    visuels:
      - { fichier: "Diapositive17.PNG", t_start: 0,   marqueurs: ["industrialisation-prematuree", "scenario-commercial", "scenario-erreur-multipliee"] }
      - { fichier: "Diapositive18.PNG", t_start: 45,  marqueurs: ["progression-sfoi-apercu", "sfoi-S", "sfoi-F", "sfoi-O", "sfoi-I", "sfoi-regle-absolue"] }
      - { fichier: "Diapositive19.PNG", t_start: 81,  marqueurs: ["3-questions-automatiser", "q-validation-humaine", "q-erreurs-corrigees", "q-supervision"] }
      - { fichier: "Diapositive20.PNG", t_start: 108, marqueurs: ["ai-act-article-4"] }
  - index: 4
    titre: "Clôture · 3 risques ↔ 3 règles"
    audio: "/assets/audio/blocs/2.5.mp3"
    duration: 89.843
    visuels:
      - { fichier: "Diapositive21.PNG", t_start: 0 }
  - index: 5
    titre: "Postscript environnemental"
    audio: "/assets/audio/blocs/2.6.mp3"
    duration: 41.707
    visuels:
      - { fichier: "Diapositive22.PNG", t_start: 0 }
quiz_inline:
  - after_slide: 4
    question: "Vous recevez une demande urgente d'un client. Pour rédiger rapidement votre réponse, vous copiez-collez son email complet (avec ses coordonnées, le montant du contrat et ses conditions particulières) dans l'interface gratuite d'un outil IA. Quel risque avez-vous pris ?"
    options:
      - "Aucun — les outils IA sont conçus pour traiter ce type de demandes professionnelles"
      - "Un risque d'exfiltration : des données client confidentielles ont quitté votre périmètre vers un serveur externe sans garantie de confidentialité"
      - "Un risque réputationnel uniquement si la réponse contient des erreurs"
      - "Un risque d'industrialisation prématurée — vous n'avez pas encore validé le processus"
    answer: 1
    explanation: "En collant des données client dans un outil public gratuit, vous transmettez des informations confidentielles à un serveur externe. C'est le risque d'exfiltration dans sa forme la plus courante : invisible, immédiate, sans incident apparent — jusqu'à ce que ça compte."
  - after_slide: 11
    question: "Un collaborateur vous dit : « L'AI Act impose des obligations strictes à toutes les entreprises qui utilisent l'IA — on doit s'y conformer immédiatement. » Quelle est la nuance importante qu'il manque ?"
    options:
      - "L'AI Act ne concerne que les entreprises de plus de 250 salariés"
      - "L'AI Act est en vigueur seulement en France, pas dans toute l'Europe"
      - "Pour la plupart des organisations qui n'utilisent pas l'IA dans des usages à haut risque, c'est surtout de la bonne pratique et de la veille — les obligations strictes s'appliquent d'abord aux concepteurs et déployeurs de systèmes à haut risque"
      - "L'AI Act ne sera applicable qu'en 2027 — aucune action n'est nécessaire avant"
    answer: 2
    explanation: "L'AI Act est réel et progresse. Mais pour une organisation qui n'utilise pas l'IA pour des décisions affectant des individus dans des domaines classés à haut risque, c'est aujourd'hui de la bonne pratique et de la veille, pas une contrainte directe. S'y préparer, oui. Paniquer, non."
quiz_final:
  - question: "Un manager copie-colle un contrat client dans ChatGPT public pour en extraire les dates clés. Ce comportement est :"
    options:
      - "Acceptable — l'IA ne stocke pas les données"
      - "Acceptable — si c'est pour usage interne uniquement"
      - "Risqué — il vient de transmettre des données client à un serveur externe"
      - "Interdit uniquement si le contrat est marqué « confidentiel »"
    answer: 2
    explanation: "Dès qu'une information est copiée dans un LLM public, elle quitte le périmètre de l'entreprise. Le niveau de confidentialité affiché sur le document n'y change rien."
  - question: "Quelles données sont formellement à risque si soumises à un LLM public ?"
    options:
      - "Données clients, données RH, informations stratégiques"
      - "Données clients uniquement"
      - "Données publiquement accessibles sur le site web de l'entreprise"
      - "Toutes les données sauf les données financières"
    answer: 0
    explanation: "Les trois catégories sont à risque : données clients (RGPD), données RH (particulièrement protégées), informations stratégiques (avantage concurrentiel)."
  - question: "L'IA vous produit un texte avec une référence à « l'article 42 de la loi du 12 mars 2023 ». Que faites-vous ?"
    options:
      - "Vous l'utilisez — l'IA ne cite que des sources réelles"
      - "Vous vérifiez cet article dans le texte officiel avant tout usage"
      - "Vous demandez à l'IA de confirmer que cet article existe"
      - "Vous l'utilisez si l'IA indique un niveau de confiance élevé"
    answer: 1
    explanation: "La vérification se fait dans une source primaire, pas en re-demandant à l'IA. L'IA peut confirmer une erreur avec la même confiance qu'une information correcte."
  - question: "Dans un livrable IA, quelles zones méritent une vérification humaine systématique ?"
    options:
      - "Uniquement les parties rédigées en langage juridique"
      - "Les conclusions finales seulement"
      - "Dates, chiffres, citations, références réglementaires, engagements"
      - "Seulement si l'IA a averti d'une incertitude"
    answer: 2
    explanation: "Ces cinq catégories constituent les zones à risque réputationnel — à vérifier dans une source primaire avant tout envoi ou publication externe."
  - question: "Une équipe commerciale utilise l'IA depuis 2 semaines avec de bons résultats. Elle décide d'automatiser complètement l'envoi. C'est :"
    options:
      - "Une bonne décision — si ça marche bien, autant l'automatiser"
      - "Prématuré — le contenu n'a pas été suffisamment validé et supervisé"
      - "Acceptable si un manager relit 10% des emails au hasard"
      - "Acceptable si l'IA est un modèle premium"
    answer: 1
    explanation: "Deux semaines n'est pas suffisant pour valider un contenu avant automatisation. Les erreurs non détectées vont se propager à grande échelle."
  - question: "Quelle est la progression correcte avant d'industrialiser un usage IA ?"
    options:
      - "🟢 Structurer → 🟣 Industrialiser directement si les résultats sont bons"
      - "🟢 Structurer → 🟡 Fiabiliser → 🔵 Optimiser → 🟣 Industrialiser"
      - "🟡 Fiabiliser → 🟢 Structurer → 🟣 Industrialiser"
      - "L'ordre n'a pas d'importance, l'essentiel est d'arriver à 🟣"
    answer: 1
    explanation: "La progression 🟢🟡🔵🟣 est une barrière de sécurité organisationnelle. Aucun passage direct de 🟢 à 🟣 n'est acceptable."
  - question: "Quelle est la différence entre un outil comme ChatGPT public et une instance Claude Enterprise configurée par la DSI ?"
    options:
      - "Aucune différence — les deux envoient les données aux mêmes serveurs"
      - "L'instance entreprise peut avoir une politique de non-rétention des données"
      - "L'instance entreprise est moins performante mais plus sécurisée"
      - "La différence ne concerne que les données techniques, pas les données métier"
    answer: 1
    explanation: "Une instance enterprise correctement configurée peut inclure une politique de non-rétention : les données ne servent pas à l'entraînement des modèles. Vérifier avec la DSI."
  - question: "La règle fondamentale du Risque 3 est :"
    options:
      - "Ne jamais utiliser l'IA pour des tâches répétitives"
      - "Toujours garder un humain dans la boucle de validation finale"
      - "Ne jamais transformer un brouillon non fiabilisé en processus automatisé"
      - "Automatiser uniquement les tâches à faible valeur ajoutée"
    answer: 2
    explanation: "Un contenu doit d'abord être structuré (🟢), fiabilisé (🟡), optimisé (🔵) avant d'entrer dans un processus automatisé (🟣)."
---

## Accroche

Je vais vous raconter quelque chose qui arrive régulièrement dans des entreprises françaises.

Un manager reçoit une demande urgente. Il doit rédiger une réponse à un appel d'offres pour demain matin. Il est 18h. Il copie-colle l'intégralité du cahier des charges dans ChatGPT, avec les noms des clients, les volumes commandés, les prix actuels.

Il obtient une réponse excellente. Proposition envoyée. Appel d'offres gagné.

Sauf que ce soir-là, il a transmis des données commerciales confidentielles à un serveur externe. Sans le savoir. Sans en parler à personne. Sans mesurer les conséquences.

Ce n'est pas un cas isolé. C'est le type de situation que j'observe régulièrement dans des organisations qui n'ont pas encore posé les règles de base sur l'usage de l'IA.

Ce module est fait pour que vous ne soyez pas dans cette situation, et pour que vous puissiez poser les bonnes règles dans votre organisation.

On va voir ensemble les trois risques principaux, comment les identifier, et les règles simples pour les gérer. Pas pour vous décourager d'utiliser l'IA, mais pour vous permettre de l'utiliser avec confiance.

## Risque 1 — exfiltration de données

Le premier risque, c'est l'exfiltration de données.

Exfiltration, ça veut dire : des informations confidentielles de votre entreprise qui quittent votre périmètre de sécurité pour atterrir dans un système externe.

Avec l'IA, ça se passe de façon invisible. Vous n'avez pas l'impression d'envoyer un fichier à quelqu'un. Vous posez juste une question. Mais ce que vous collez dans la fenêtre de chat, vous le transmettez à un serveur.

Quelles données sont concernées ? Première catégorie : les données clients. Noms, coordonnées, historiques d'achat, contrats, prix négociés. Deuxième catégorie : les données RH. Salaires, évaluations, situations personnelles. Troisième catégorie : les données stratégiques. Plans de développement, analyses concurrentielles, projets de rachat. Quatrième catégorie : le code propriétaire.

La règle des 3 questions avant chaque usage : Est-ce que cette information peut être rendue publique sans conséquence ? Est-ce qu'elle concerne des personnes identifiables ? Est-ce qu'elle représente un avantage concurrentiel ? Si vous répondez non à la première, ou oui à l'une des deux suivantes — vous n'utilisez pas l'IA publique pour cette tâche.

Il y a trois niveaux très différents : les outils publics gratuits (risque maximal), les versions Pro/Teams (entraînement désactivé par défaut), et les instances Enterprise (politiques de non-rétention contractuelles).

La règle de base : vérifiez le type de licence de votre outil avant tout usage avec des données professionnelles.

## Risque 2 — réputationnel et usurpation

Le deuxième risque est double : le risque réputationnel, et le risque d'usurpation.

Les zones de risque réputationnel : les dates (l'IA peut confondre des années, des délais légaux), les chiffres (statistiques, pourcentages, données financières potentiellement fausses), les citations et références légales (articles qui n'existent pas), les engagements contractuels (garanties que vous n'offrez pas réellement).

Le protocole de vérification en 3 temps : identifier les zones sensibles dans le texte généré — vérifier chaque zone dans un document de référence (pas en redemandant à l'IA) — relecture humaine systématique avant tout envoi externe.

Le second volet, les deepfakes, monte en puissance depuis 2024. Les hypertrucages permettent de recréer la voix ou l'image d'une personne de façon convaincante. La CNIL alerte sur ce risque pour les entreprises.

Ce que ça signifie concrètement : un fraudeur peut générer un faux message vocal de votre PDG demandant un virement urgent. Il peut usurper l'identité de votre marque dans une campagne externe.

Deux réflexes de base : établir un protocole de vérification pour toute demande urgente inhabituelle hors des canaux normaux, même si elle semble provenir d'un dirigeant. Et sensibiliser vos équipes à ce risque avant qu'elles n'en soient victimes.

## Risque 3 — industrialisation prématurée

Le troisième risque est le plus insidieux. C'est celui que les entreprises découvrent le plus tard, souvent après un incident coûteux.

L'industrialisation prématurée, c'est automatiser avec l'IA quelque chose qu'on n'a pas encore sécurisé.

Voici le scénario type : une équipe utilise l'IA avec de bons résultats, décide d'automatiser — et une erreur non détectée part chez deux cents clients simultanément.

C'est pour éviter ça que la formation s'appuie sur une progression en 4 niveaux : 🟢 Structurer · 🟡 Fiabiliser · 🔵 Optimiser · 🟣 Industrialiser. La règle absolue : on ne passe pas directement de 🟢 à 🟣.

Avant d'automatiser quoi que ce soit avec l'IA, posez-vous ces trois questions : le contenu a-t-il été validé humainement sur suffisamment d'exemples ? Les erreurs ont-elles été identifiées et corrigées ? Y a-t-il une supervision humaine dans le processus, pas seulement à la fin ?

Sur l'AI Act : son Article 4 impose aux organisations d'assurer un niveau suffisant de maîtrise de l'IA pour leur personnel. Former vos équipes n'est plus seulement une bonne pratique — pour de nombreuses organisations, c'est une obligation légale.

## Clôture

Trois risques. Trois règles essentielles.

Règle 1 : avant de coller dans un LLM, posez la question — cette information peut-elle être rendue publique sans conséquence ? Et vérifiez quel outil vous utilisez et sa politique de données.

Règle 2 : avant de publier ou d'envoyer un livrable IA, une paire d'yeux humains relit les zones à risque — dates, chiffres, références, engagements. Et pour les communications inhabituelles urgentes, vérifiez par un canal indépendant.

Règle 3 : avant d'automatiser, vérifiez que le contenu a été validé et que la supervision humaine est maintenue dans le processus.

Ces trois règles ne ralentissent pas votre usage de l'IA. Elles permettent de l'accélérer en toute confiance.

## Un mot sur l'impact environnemental

Un dernier point, rapide mais important.

Utiliser l'IA a un coût énergétique réel. Les data centers qui font tourner ces modèles consomment de l'électricité et de l'eau en quantité significative.

Un prompt inutile consomme autant qu'un prompt utile. Un usage réfléchi, ciblé sur des tâches où l'IA apporte vraiment de la valeur, c'est plus efficace pour vous, et plus frugal.

Ce n'est pas une injonction à la culpabilité. C'est une invitation à la conscience.

La frugalité dans l'usage de l'IA est une bonne pratique à part entière. Elle s'intègre naturellement dans une démarche responsable.
