# Notes et réflexions

## Les limites d'un projet 3D pour un débutant

La principale difficulté que j'ai rencontrée est la création ou l'utilisation de modèles 3D pour constituer les structures et les accessoires de la cuisine.

Ma première étape a été de repérer des modèles existants sur différentes plateformes :

- Sketchfab
- Itch.io
- Turbosquid
- Game assets

Au moment de cette recherche durant l'automne 2022, aucun modèle ne correspondait à mes critères :

- low poly
- licence compatible avec un projet aux sources publiées
- gratuit ou peu onéreux

J'ai donc décidé de me tourner vers la création de modèles à l'aide du logiciel pour la création 3D [Blender]().

### Modeliser soi-même l'architecture

Dans une première étape, j'ai tenté de créer les murs, les piliers et les arches. Si différents tutoriels m'ont amené relativement loin dans la modélisation, je n'ai réussi à obtenir des résultats satisfaisants. J'ai finalement abandonné cette piste, notamment en raison des difficultés suivantes.

L'apprentissage de l'utilisation de Blender est long car le logiciel dispose des très nombreuses fonctionnalités et d'une interface riche. Ainsi même la navigation au sein d'une scène est laborieuse si on ouvre pas le logiciel pendant une ou deux semaines pour y travailler.

Disponibles à foison, les tutoriels doivent être triés entre ceux qui nous seront utiles de ceux qui nous n'apprendront rien ou qui sont trop avancés. Et il n'est pas toujours évident pour un débutant de repérer les notions essentielles à saisir pour un travail bien délimité, ici de faire du low poly dans le contexte d'une page web.

Modéliser des structures demandent aussi une certaine expérience. Rapidement j'ai pu utiliser les outils telles l'extrusion, le biseautage ou la création de multiples faces. En revanche, être capable de choisir le bon outil ou la façon d'arriver à un résultat acceptable fut difficile.

Enfin, le dernier facteur est le temps. J'ai consacré une trentaine d'heures à me familiariser avec Blender et tenter des premières modélisations. Un constat s'est alors imposé : je n'y arriverai pas dans un temps raisonnable et encore moins dans le temps théorique à disposition.

En effet, ce projet s'inscrit dans un cours parmi d'autres, et dans une vie active. Ainsi le temps normal de travail pour l'évaluation est donc compris entre 50 et 60 heures. Théoriquement il me reste une trentaine d'heures pour finir ce projet...

### Trouver et acquérir des modèles 3D

Il fallait donc que j'utilise les modèles disponibles, quitte à investir quelques deniers et à accepter leurs limites. Par un concours de circonstances avec une pause forcée dans mon parcours académique, lorsque j'ai repris le projet en automne 2023, un pack de modèles compatible avec mes critères était publié ! Merci à ... pour son travail qui a donné un nouveau souffle à mon projet.

Moyennant finances, l'auteur met à disposition ses fichiers sources et j'ai pu ainsi modifier certains modèles pour créer de nouveaux objets grâce aux compétences que j'avais acquises dans Blender.

## Développements possibles

En cette fin janvier 2024, le projet est terminé. De nombreux développements pourraient être menés, dont voici un florilège.

### Les arches

Les arches n'ont pas pu être réalisées. Aussi bien du point de vue médiation que visuel, c'est probablement le premier élément que j'ajouterais, car c'est un élément caractéristique des grandes cuisines de certains châteaux. Elles forment l'évacuation des fumées et de la chaleur des foyers. Dans une cuisine comme celle du Palais des Ducs de Dijon, on pouvait compter jusqu'à 9 foyers.

La difficulté réside, selon moi, dans le fait d'avoir un modèle correct, utilisable et adapté aux autres éléments en place.

### Les interactions

La seule action possible est de se déplacer dans l'environnement de la cuisine. Il pourrait être intéressant d'ajouter quelques interactions, comme par exemple, allumer un des foyers, faire du bruit avec une casserole, faire couler du vin d'un tonneau, etc.

### Des contenus additionnels

L'action sur certains éléments de la cuisine pourrait déclencher des séquences particulières, par exemple, la diffusion d'une cinématique, l'affichage d'un article ou la présentation d'une source médiévale.

### Une interface externe à la scène

Lorsque l'internaute arrive sur la page, le rendu est automatiquement lancé et la musique démarre à la fin du chargement. Il me semble pertinent d'ajouter une interface hors de la scène pour :

- démarrer l'expérience
- modifier les volumes sonores (musique et bruits)
- mettre en pause (pour stopper les calculs des ombres notamment)

### Modifier l'ambiance lumineuse

Dans le but d'introduire un jeu de lumières avec les foyers, le projet a retenu une ambiance nocturne. Un développement possible serait de pouvoir modifier l'heure de la journée et l'éclairage de la scène.

### Et d'autres encore

Ajouter des ustensiles, ajouter des personnages, créer la réserve d'aliments, créer la boulangerie, donner accès à la cour du château avec la fontaine, il y a de quoi imaginer !
