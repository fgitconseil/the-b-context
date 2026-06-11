---
bloc: 2
titre: "Risques, cadre et responsabilités"
duree_estimee: "~12 min"
accroche: "Trois risques professionnels nommés — exfiltration, réputationnel, industrialisation prématurée. Les règles simples pour ne pas les subir."
categorie: "Comprendre"
takeaway: "/assets/takeaways/bloc-02.png"
slides:
  - index: 0
    titre: "Accroche · une situation qu'on rencontre souvent"
    audio: "/assets/audio/blocs/2.1.mp3"
    duration: 52.776
    visuels:
      - { fichier: "Diapositive9.png", t_start: 0 }
  - index: 1
    titre: "Le risque d'exfiltration"
    audio: "/assets/audio/blocs/2.2.mp3"
    duration: 161.371
    visuels:
      - { fichier: "Diapositive10.png", t_start: 0,   marqueurs: ["exfiltration-definition"] }
      - { fichier: "Diapositive11.png", t_start: 25,  marqueurs: ["4-categories-donnees", "categorie-clients", "categorie-rh", "categorie-strategiques", "categorie-code"] }
      - { fichier: "Diapositive12.png", t_start: 70,  marqueurs: ["3-questions-regle", "question-1-public", "question-2-personnes", "question-3-strategique"] }
      - { fichier: "Diapositive13.png", t_start: 100, marqueurs: ["3-niveaux-protection", "niveau-public", "niveau-pro", "niveau-enterprise"] }
  - index: 2
    titre: "Le risque réputationnel et l'usurpation"
    audio: "/assets/audio/blocs/2.3.mp3"
    duration: 176.176
    visuels:
      - { fichier: "Diapositive14.png", t_start: 0,   marqueurs: ["4-zones-reputation", "zone-dates", "zone-chiffres", "zone-citations", "zone-engagements"] }
      - { fichier: "Diapositive15.png", t_start: 65,  marqueurs: ["usurpation-deepfakes", "deepfakes-exemples"] }
      - { fichier: "Diapositive16.png", t_start: 139, marqueurs: ["protocole-3-temps", "etape-identifier", "etape-verifier", "etape-relire"] }
  - index: 3
    titre: "Le risque d'industrialisation prématurée"
    audio: "/assets/audio/blocs/2.4.mp3"
    duration: 198.547
    visuels:
      - { fichier: "Diapositive17.png", t_start: 0,   marqueurs: ["industrialisation-prematuree", "scenario-commercial", "scenario-erreur-multipliee"] }
      - { fichier: "Diapositive18.png", t_start: 45,  marqueurs: ["progression-sfoi-apercu", "sfoi-S", "sfoi-F", "sfoi-O", "sfoi-I", "sfoi-regle-absolue"] }
      - { fichier: "Diapositive19.png", t_start: 81,  marqueurs: ["3-questions-automatiser", "q-validation-humaine", "q-erreurs-corrigees", "q-supervision"] }
      - { fichier: "Diapositive20.png", t_start: 108, marqueurs: ["ai-act-article-4"] }
  - index: 4
    titre: "Clôture · les trois règles"
    audio: "/assets/audio/blocs/2.5.mp3"
    duration: 89.843
    visuels:
      - { fichier: "Diapositive21.png", t_start: 0 }
  - index: 5
    titre: "Un mot sur l'impact environnemental"
    audio: "/assets/audio/blocs/2.6.mp3"
    duration: 41.707
    visuels:
      - { fichier: "Diapositive22.png", t_start: 0 }
quiz_inline:
  - after_slide: 1
    question: "Vous recevez une demande urgente d'un client. Pour rédiger rapidement votre réponse, vous copiez-collez son email complet, avec ses coordonnées, le montant du contrat et ses conditions particulières, dans l'interface gratuite d'un assistant. Quel risque avez-vous pris ?"
    options:
      - "Aucun, les assistants sont conçus pour traiter ce type de demandes professionnelles"
      - "Un risque d'exfiltration : des données client confidentielles ont quitté votre périmètre vers un serveur externe sans garantie de confidentialité"
      - "Un risque réputationnel uniquement si la réponse contient des erreurs"
      - "Un risque d'industrialisation prématurée, vous n'avez pas encore validé le processus"
    answer: 1
    explanation: "En collant des données client dans un outil public gratuit, vous transmettez des informations confidentielles à un serveur externe. C'est le risque d'exfiltration dans sa forme la plus courante : invisible, immédiate, sans incident apparent, jusqu'à ce que ça compte."
  - after_slide: 2
    question: "Un collaborateur vous dit : « L'AI Act impose des obligations strictes à toutes les entreprises qui utilisent l'IA, on doit s'y conformer immédiatement. » Quelle est la nuance importante qu'il manque ?"
    options:
      - "L'AI Act ne concerne que les entreprises de plus de 250 salariés"
      - "L'AI Act est en vigueur seulement en France, pas dans toute l'Europe"
      - "Pour la plupart des organisations qui n'utilisent pas l'IA dans des usages à haut risque, c'est surtout de la bonne pratique et de la veille, les obligations strictes s'appliquent d'abord aux concepteurs et déployeurs de systèmes à haut risque"
      - "L'AI Act ne sera applicable qu'en 2027, aucune action n'est nécessaire avant"
    answer: 2
    explanation: "L'AI Act est réel et progresse. Mais pour une organisation qui n'utilise pas l'IA pour des décisions affectant des individus dans des domaines classés à haut risque, c'est aujourd'hui de la bonne pratique et de la veille, pas une contrainte directe. S'y préparer, oui. Paniquer, non."
  - after_slide: 3
    question: "Une équipe utilise un assistant pour rédiger ses propositions commerciales depuis deux semaines avec de bons retours. Le manager veut automatiser entièrement l'envoi. C'est :"
    options:
      - "Une bonne décision, si ça marche bien, autant l'automatiser"
      - "Prématuré, le contenu n'a pas été suffisamment validé et supervisé pour être industrialisé"
      - "Acceptable si un manager relit 10 % des propositions au hasard"
      - "Acceptable si l'assistant est un modèle premium"
    answer: 1
    explanation: "Deux semaines ne suffisent pas pour valider un contenu avant automatisation. C'est précisément le risque d'industrialisation prématurée : les erreurs non détectées vont se propager à grande échelle, multipliées et invisibles."
quiz_final:
  - question: "Un manager copie-colle un contrat client dans un assistant public pour en extraire les dates clés. Ce comportement est :"
    options:
      - "Acceptable, l'assistant ne stocke pas les données"
      - "Acceptable, si c'est pour un usage interne uniquement"
      - "Risqué, il vient de transmettre des données client à un serveur externe"
      - "Interdit uniquement si le contrat est marqué « confidentiel »"
    answer: 2
    explanation: "Dès qu'une information est copiée dans un assistant public, elle quitte le périmètre de l'entreprise. Le niveau de confidentialité affiché sur le document n'y change rien."
  - question: "Quelles données sont à risque si soumises à un assistant public ?"
    options:
      - "Données clients, données RH, informations stratégiques"
      - "Données clients uniquement"
      - "Données publiquement accessibles sur le site web de l'entreprise"
      - "Toutes les données sauf les données financières"
    answer: 0
    explanation: "Trois catégories sont à risque : données clients (RGPD), données RH (particulièrement protégées), informations stratégiques (avantage concurrentiel). Le code propriétaire entre aussi dans cette logique pour les organisations qui développent."
  - question: "L'assistant vous produit un texte avec une référence à « l'article 42 de la loi du 12 mars 2023 ». Que faites-vous ?"
    options:
      - "Vous l'utilisez, l'assistant ne cite que des sources réelles"
      - "Vous vérifiez cet article dans le texte officiel avant tout usage"
      - "Vous demandez à l'assistant de confirmer que cet article existe"
      - "Vous l'utilisez si l'assistant indique un niveau de confiance élevé"
    answer: 1
    explanation: "La vérification se fait dans une source primaire, pas en redemandant à l'assistant. L'assistant peut confirmer une erreur avec la même assurance qu'une information correcte."
  - question: "Dans un livrable IA, quelles zones méritent une vérification humaine systématique ?"
    options:
      - "Uniquement les parties rédigées en langage juridique"
      - "Les conclusions finales seulement"
      - "Dates, chiffres, citations, références réglementaires, engagements"
      - "Seulement si l'assistant a averti d'une incertitude"
    answer: 2
    explanation: "Ces cinq catégories constituent les zones à risque réputationnel, à vérifier dans une source primaire avant tout envoi ou publication externe."
  - question: "Une équipe commerciale utilise l'assistant pour rédiger des emails clients depuis deux semaines avec de bons résultats. Elle décide d'automatiser complètement l'envoi. C'est :"
    options:
      - "Une bonne décision, si ça marche, autant l'automatiser"
      - "Prématuré, le contenu n'a pas été suffisamment validé et supervisé"
      - "Acceptable si un manager relit 10 % des emails au hasard"
      - "Acceptable si l'assistant est un modèle premium"
    answer: 1
    explanation: "Deux semaines ne suffisent pas pour valider un contenu avant automatisation. Les erreurs non détectées vont se propager à grande échelle."
  - question: "Quelle est la progression correcte avant d'industrialiser un usage IA ?"
    options:
      - "Structurer → Industrialiser directement si les résultats sont bons"
      - "Structurer → Fiabiliser → Optimiser → Industrialiser"
      - "Fiabiliser → Structurer → Industrialiser"
      - "L'ordre n'a pas d'importance, l'essentiel est d'arriver à Industrialiser"
    answer: 1
    explanation: "La progression S.F.O.I. est une barrière de sécurité organisationnelle. Aucun passage direct de Structurer à Industrialiser n'est acceptable."
  - question: "Quelle est la différence entre un assistant public et une instance Enterprise configurée par la DSI ?"
    options:
      - "Aucune différence, les deux envoient les données aux mêmes serveurs"
      - "L'instance Enterprise peut avoir une politique de non-rétention des données garantie contractuellement"
      - "L'instance Enterprise est moins performante mais plus sécurisée"
      - "La différence ne concerne que les données techniques, pas les données métier"
    answer: 1
    explanation: "Une instance Enterprise correctement configurée peut inclure une politique de non-rétention : les données ne servent pas à l'entraînement des modèles. À vérifier avec la DSI."
  - question: "Quelle est la règle fondamentale du risque d'industrialisation prématurée ?"
    options:
      - "Ne jamais utiliser l'IA pour des tâches répétitives"
      - "Toujours garder un humain dans la boucle de validation finale"
      - "Ne jamais transformer un brouillon non fiabilisé en processus automatisé"
      - "Automatiser uniquement les tâches à faible valeur ajoutée"
    answer: 2
    explanation: "Un contenu doit d'abord être structuré, fiabilisé et optimisé avant d'entrer dans un processus automatisé. Industrialiser un contenu non vérifié, c'est automatiser des erreurs à grande échelle."
---

## Accroche · une situation qu'on rencontre souvent

Voici une situation qu'on rencontre régulièrement dans des entreprises françaises.

Un manager reçoit une demande urgente. Il doit rédiger une réponse à un appel d'offres pour le lendemain. Il est 18 h. Il copie-colle l'intégralité du cahier des charges dans un assistant, avec les noms des clients, les volumes commandés, les prix actuels.

Il obtient une réponse excellente. Proposition envoyée. Appel d'offres gagné.

Sauf que ce soir-là, il a transmis des données commerciales confidentielles à un serveur externe. Sans le savoir. Sans en parler à personne. Sans mesurer les conséquences.

Ce n'est pas un cas isolé. C'est le type de situation qu'on observe régulièrement dans les organisations qui n'ont pas encore posé les règles de base sur l'usage de l'IA.

Ce bloc va vous donner trois grilles de lecture pour reconnaître ces situations et poser les bonnes règles. Pas pour vous décourager d'utiliser l'IA, pour vous permettre de l'utiliser avec confiance.

## Le risque d'exfiltration

Le premier risque qu'on aborde, et le plus invisible, c'est le **risque d'exfiltration**.

Exfiltration, ça veut dire : des informations confidentielles de votre entreprise qui quittent votre périmètre de sécurité pour atterrir dans un système externe.

Avec l'IA, ça se passe sans bruit. Vous n'avez pas l'impression d'envoyer un fichier à quelqu'un. Vous posez juste une question. Mais ce que vous collez dans la fenêtre de chat, vous le transmettez à un serveur.

**Quatre catégories de données à risque.**

Première catégorie : les **données clients**. Noms, coordonnées, historiques d'achat, contrats, prix négociés. Tout ce qui identifie un client ou décrit votre relation commerciale avec lui.

Deuxième catégorie : les **données RH**. Salaires, évaluations, situations personnelles, projets de réorganisation. Particulièrement protégées par le RGPD, toute fuite peut engager la responsabilité de l'entreprise.

Troisième catégorie : les **données stratégiques**. Plans de développement, analyses concurrentielles, projets de rachat, données financières non publiées.

Quatrième catégorie : le **code propriétaire**. Si vous développez des outils internes, le code source est un actif stratégique.

**La règle des trois questions** avant de coller quoi que ce soit :

Première question : cette information peut-elle être rendue publique sans conséquence pour l'entreprise ?

Deuxième question : concerne-t-elle des personnes identifiables ?

Troisième question : représente-t-elle un avantage concurrentiel ou une information stratégique ?

Si vous répondez non à la première, ou oui à l'une des deux suivantes, vous n'utilisez pas un assistant public pour cette tâche. Vous anonymisez d'abord, ou vous attendez d'être sur un outil sécurisé.

**Trois niveaux de protection** selon l'outil. Une idée reçue répandue : tous les outils utiliseraient les données pour entraîner les modèles. Ce n'est pas aussi simple.

**Niveau public gratuit.** Sur ces outils, vos données peuvent effectivement être utilisées pour améliorer les modèles. Niveau de risque le plus élevé pour des données professionnelles.

**Niveau Pro ou Teams.** L'entraînement sur les données utilisateurs est désactivé par défaut, ou une option dédiée existe dans les paramètres. Protection sensiblement meilleure, à condition d'avoir vérifié les paramètres de votre compte.

**Niveau Enterprise.** Les politiques de non-rétention sont garanties contractuellement. Vos données ne quittent pas l'environnement sécurisé configuré par votre organisation.

La règle de base : vérifiez le type de licence avant tout usage avec des données professionnelles. Si vous ne savez pas quelle instance vous utilisez et quelle est sa politique, posez la question à votre DSI ou à votre prestataire IT avant d'utiliser l'outil avec des données sensibles. Ce n'est pas une question technique. C'est une question de responsabilité.

## Le risque réputationnel et l'usurpation

Le deuxième risque qu'on aborde est double : le **risque réputationnel**, que vous avez probablement déjà envisagé, et le **risque d'usurpation**, souvent sous-estimé.

**Quatre zones de risque réputationnel.**

Comme vu au bloc 1, l'assistant peut halluciner. Voici les conséquences concrètes quand une erreur sort de votre bureau.

**Les dates.** L'assistant peut confondre des années, des délais légaux, des dates d'entrée en vigueur. Une date erronée dans un contrat ou une proposition commerciale peut créer un engagement involontaire.

**Les chiffres.** Statistiques, pourcentages, données financières. L'assistant peut générer des données plausibles mais fausses. Si vous les publiez dans un rapport ou une présentation stratégique, votre crédibilité est exposée.

**Les citations et références légales.** Vous en avez vu un exemple au bloc 1 avec la citation juridique inventée. Ça vaut aussi pour les normes techniques et les réglementations sectorielles.

**Les engagements contractuels.** Si vous utilisez l'assistant pour rédiger des emails clients ou des propositions, relisez chaque engagement. L'assistant peut formuler des garanties ou des conditions que vous n'offrez pas réellement.

**Le risque d'usurpation, les deepfakes.**

Le second volet monte en puissance depuis 2024. Les hypertrucages, ou *deepfakes*, permettent aujourd'hui de recréer la voix ou l'image d'une personne de façon convaincante. La CNIL alerte sur ce risque en croissance pour les entreprises.

Concrètement : un fraudeur peut générer un faux message vocal de votre PDG demandant un virement urgent. Une vidéo ou un enregistrement semblant provenir d'un dirigeant pour manipuler un employé, un client ou un partenaire. Une usurpation de votre marque dans une campagne externe.

Ce n'est plus de la science-fiction. C'est une technique disponible et utilisée.

Un mot personnel, maintenant que vous entendez ma voix.

Ce que vous entendez dans cette formation, ce n'est pas ma voix réelle. Et ce n'est pas non plus généré par un assistant IA, c'est une voix de synthèse classique.

Deux choses : l'IA n'est pas toujours utile. Et vous verrez et entendrez de plus en plus de contenus où la distinction avec le réel n'est plus évidente. **L'entraînement à douter devient une compétence utile.**

Deux réflexes de base : établir un protocole de vérification pour toute demande urgente inhabituelle hors des canaux normaux, même si elle semble provenir d'un dirigeant. Et sensibiliser vos équipes à ce risque avant qu'elles n'en soient victimes.

**Le protocole de vérification en trois temps.**

Pour le risque réputationnel classique :

**Identifier** les zones sensibles dans le texte généré, tout chiffre, toute date, toute référence normative, tout engagement.

**Vérifier** chaque zone dans un document de référence. Pas en redemandant à l'assistant, il peut confirmer une erreur avec la même assurance. Allez à la source : site officiel, texte de loi, document contractuel.

**Relire** humainement et systématiquement avant tout envoi externe. Jamais un livrable IA ne part chez un client, un partenaire ou une administration sans passer sous des yeux humains.

## Le risque d'industrialisation prématurée

Le troisième risque qu'on aborde est le plus insidieux. C'est celui que les entreprises découvrent le plus tard, souvent après un incident coûteux.

**L'industrialisation prématurée**, c'est automatiser avec l'IA quelque chose qu'on n'a pas encore sécurisé.

Voici le scénario.

Une équipe commerciale utilise l'assistant pour rédiger des propositions clients. Ça fonctionne bien. Les commerciaux sont satisfaits. Un responsable décide d'automatiser : désormais, un script génère les propositions la nuit et les envoie aux clients le matin.

Sauf que personne n'avait remarqué que l'assistant confondait régulièrement deux offres tarifaires. À faible volume, l'erreur était corrigée par le commercial avant l'envoi. Automatisée, elle part chez deux cents clients.

C'est pour éviter ça que la formation s'appuie sur une progression en quatre niveaux.

**La progression S.F.O.I.**, qu'on développe au bloc 4.

🟢 **Structurer** : vous organisez votre matière. Vous vérifiez que rien n'est perdu.

🟡 **Fiabiliser** : vous rendez chaque affirmation vérifiable. Vous contrôlez les sources, les chiffres, les engagements.

🔵 **Optimiser** : vous transformez le contenu validé en outil directement exploitable.

🟣 **Industrialiser** : vous intégrez l'outil dans un système automatisé, avec rôles définis, traçabilité, supervision, mécanismes d'arrêt.

**La règle absolue : on ne passe pas directement de Structurer à Industrialiser. On ne saute pas les étapes.**

**Trois questions avant d'automatiser.**

Avant d'automatiser quoi que ce soit avec l'IA, posez-vous ces trois questions :

Le contenu a-t-il été validé humainement pendant une durée suffisante ou sur assez d'exemples ?

Les erreurs ont-elles été identifiées et corrigées avant automatisation ?

Y a-t-il une supervision humaine dans le processus, pas seulement à la fin, mais en cours de route ?

Si vous répondez non à l'une de ces trois questions, vous n'êtes pas prêt à automatiser.

**Un point de contexte réglementaire, l'AI Act.**

Le règlement européen sur l'intelligence artificielle entre en application progressive depuis 2024. Son **Article 4** impose aux organisations d'assurer un niveau suffisant de maîtrise de l'IA pour leur personnel, en particulier pour ceux qui utilisent ou déploient des systèmes d'IA.

Concrètement : former vos équipes à l'usage responsable de l'IA n'est plus seulement une bonne pratique. Pour de nombreuses organisations, c'est une obligation légale. Cette formation est précisément ce que l'Article 4 exige.

**Votre usage est-il à haut risque ?** L'AI Act distingue les usages selon leur niveau de risque. Trois questions d'auto-évaluation :

L'usage de l'IA a-t-il un impact direct sur des décisions concernant des personnes, recrutement, évaluation, accès à des services, crédit, assurance ?

L'usage concerne-t-il des domaines classés à haut risque par l'AI Act, santé, justice, ressources humaines, infrastructure critique, éducation ?

Des décisions partiellement ou totalement automatisées produisent-elles des effets juridiques ou significatifs sur des individus ?

Si vous répondez **oui** à l'une de ces questions, votre usage entre dans la catégorie « à haut risque ». Cela implique des obligations spécifiques : évaluation de conformité, documentation, supervision humaine formalisée. Consultez votre service juridique ou un expert avant de déployer à grande échelle.

Si vous répondez **non** aux trois, vous êtes probablement dans un usage standard. Cela ne dispense pas des règles de base de ce bloc, mais n'implique pas d'obligations réglementaires particulières.

## Clôture · les trois règles

Trois risques. Trois règles essentielles.

**La règle de l'exfiltration.**

Avant de coller dans un assistant, posez la question : cette information peut-elle être rendue publique sans conséquence ? Et vérifiez quel outil vous utilisez et sa politique de données. Public gratuit, Pro ou Teams, Enterprise, ce n'est pas la même chose.

**La règle de la relecture.**

Avant de publier ou d'envoyer un livrable IA, une paire d'yeux humains relit les zones à risque, dates, chiffres, références, engagements. Et pour les communications inhabituelles urgentes, vérifiez par un canal indépendant que la source est bien celle qu'elle prétend être.

**La règle de l'industrialisation.**

Avant d'automatiser, vérifiez que le contenu a été validé et que la supervision humaine est maintenue dans le processus.

Ces trois règles ne ralentissent pas votre usage de l'IA. Elles permettent de l'accélérer en toute confiance, et d'être en conformité avec les exigences croissantes de l'AI Act.

Pour une organisation non spécialisée IA, la grande majorité des entreprises françaises, l'AI Act, à ce stade, c'est de la bonne pratique et de la veille, pas encore une contrainte légale directe. Les obligations strictes s'appliquent d'abord aux concepteurs et déployeurs de systèmes à haut risque.

Pourquoi en parler ici ? Parce que si le sujet émerge dans votre organisation, et il va émerger, vous avez maintenant les éléments pour répondre sans être démuni. Ni alarmiste, ni naïf.

L'organisation qui pose ces règles tôt va plus vite que celle qui les découvre à travers une erreur coûteuse.

## Un mot sur l'impact environnemental

Un dernier point, court mais important.

Utiliser l'IA a un coût énergétique réel. Les data centers qui font tourner ces modèles consomment de l'électricité et de l'eau en quantité significative. Ce n'est pas une raison de ne pas utiliser l'IA. C'est une raison de l'utiliser **à bon escient**.

Un prompt inutile consomme autant qu'un prompt utile. Un usage réfléchi, ciblé sur des tâches où l'IA apporte vraiment de la valeur, est plus efficace pour vous, et plus frugal.

Ce n'est pas une injonction à la culpabilité. C'est une invitation à la conscience.

La frugalité dans l'usage de l'IA est une bonne pratique à part entière. Elle s'intègre dans une démarche responsable, et elle vous pousse à ne solliciter l'outil que quand il en vaut vraiment la peine.
