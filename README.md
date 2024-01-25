# Cuisine médiévale 3D

Dans quel environnement les cuisiniers médiévaux réalisaient-ils des banquets aux multiples plats et aux très nombreux convives ? Si nous savons que certains plats n'atteignaient pas les personnes les plus modestes, il fallait quand même cuisiner l'ensemble. Maître Chiquart, dans son ..., mentionne notamment

Afin de comprendre l'univers des cuisines médiévales, nous avons opté pour une représentation artistique s'inspirant des sources médiévales. Et si la cuisine s'effectue aussi dans les maisons bourgeoises et dans les foyers modestes, nous avons choisi de travailler avec les sources iconographiques et archéologiques à notre disposition et celles-ci concernent essentiellement les châteaux. Ce corpus est d'ailleurs discutable, car seules quelques cuisines sont connues car faites de pierre. Entre les cabanes en bois abritant de simples foyers ou les tentes en extérieur, il était plutôt fréquent de cuisiner à l'extérieur lors des grandes occasions et même au quotidien en raison du risque d'incendie.

Ainsi si cette cuisine en 3D s'inspire de la cuisine du Palais des Ducs de Bourgogne à Dijon, elle ne cherche pas à la reproduire fidèlement. Son objectif est de rassembler un ensemble d'éléments des cuisines du XVe siècle :

- des dispositifs de cuisson
- des ustensiles
- du mobilier

## Choix techniques

Le projet est conçu avec A-frame, un framework Javascript s'appuyant sur la bibliothèque Three.JS.

Pour améliorer la DX (l'expérience de développement), j'ai choisi de m'appuyer sur les outils usuels en JS :

- ESlint pour débusquer rapidement des problèmes dans le code
- Prettier pour formater automatiquement le code et gagner en lisibilité
- Vite pour optimiser le code et profiter du rechargement à chaud (Hot Module Relaoding)

### A-Frame et Vite : une presqu'incompatibilité

A-Frame 1.5.0 n'est pas compatible avec les EcmaScript Modules (ESM) et un des auteurs de la bibliothèque annonçait déjà en avril 2022 dans un [commentaire sur Github](https://github.com/aframevr/aframe/issues/4242) qu'aucun support n'était prévu pour le moment.

Résultat, on se contente de mettre la balise `<script>` en haut de page en s'appuyant soit sur un CDN soit sur le package installé dans node_modules.

Alors pourquoi garder Vite ? Un peu par habitude, je l'avoue. Toutefois Vite s'avère quand même utile pour construire un CSS optimisé. Ouf !

## Contexte

Ce projet a été publié en janvier 2023 par Loïc Aubrays pour le cours _Réalité virtuelle et augmentée_ d'Isaac Pante en master d'informatique pour les sciences humaines de la [Faculté des Lettres, Université de Lausanne](https://unil.ch/lettres).

## Credits

["Log - Blacksmith's workshop assets"](https://skfb.ly/69GOy) by Kyan0s is licensed under [Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

["Logs - Blacksmith's workshop assets"](https://skfb.ly/69CxV) by Kyan0s is licensed under [Creative Commons Attribution](http://creativecommons.org/licenses/by/4.0/).

[Campfire VR](https://medium.com/@dirkk/campfire-vr-fa654d15e92a) for fire effects

"Fireplace" (https://skfb.ly/69GFC) by mageaster is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

https://felipegrebogeart.itch.io/low-poly-food-pack
