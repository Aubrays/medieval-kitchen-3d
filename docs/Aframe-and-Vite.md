# A-Frame et Vite : une presqu'incompatibilité

A-Frame 1.5.0 n'est pas compatible avec les EcmaScript Modules (ESM) et un des auteurs de la bibliothèque annonçait déjà en avril 2022 dans un [commentaire sur Github](https://github.com/aframevr/aframe/issues/4242) qu'aucun support n'était prévu pour le moment.

Résultat, on se contente de mettre la balise `<script>` en haut de page en s'appuyant soit sur un CDN soit sur le package installé dans node_modules.

En revanche, on utilise les avantages de Vite pour l'expérience de développement et la compression des shaders via le plugin [vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl#readme).
