# Interface : Éditeur

L'Éditeur est le cœur du RhythmNator. C'est ici que vous passerez le plus de temps à mapper vos fichiers audio.

![Interface Complète](/images/editor/Editor.png)

---

## 1. La Barre Supérieure (Top Bar)

La barre supérieure regroupe les informations de projet et les actions globales.

![Barre Supérieure](/images/editor/TopBar.png)

- **À gauche** : Affiche le titre de l'outil (**RhythmNator**) et le nom de l'outil de projet juste en dessous.
- **À droite** : Une série d'icônes pour les actions rapides :
    - **Accueil** : Retourner à l'écran de sélection de projet.
    - **Dossier** : Ouvrir le dossier contenant les fichiers du projet.
    - **Sauvegarder** : Enregistrer vos modifications.
    - **Export JSON** : Exporter la partition finale au format JSON.
    - **Undo / Redo** : Annuler ou rétablir les dernières actions.
    - **Sidebar** : Ouvrir ou fermer la barre latérale gauche.

---

## 2. Zone de Travail (Espace de Travail)

La zone de travail est divisée en deux sections principales :

![Visualiseur et Pistes](/images/editor/WaveForm.png)
![Liste des Pistes](/images/editor/TrackListe.png)

1. **Le Visualiseur** : Permet de voir la forme d'onde de la musique pour une précision visuelle lors du placement des notes.
2. **La Liste des Pistes** : Affiche les différentes pistes créées avec les notes placées à l'intérieur.
3. **Ligne de Lecture** : Une ligne verticale qui indique précisément où vous vous trouvez dans la musique.

> Pour apprendre à créer et gérer vos pistes, consultez le [Guide : Zone de Travail (Piste)](./guide-sheet.md).

---

## 3. Panneau Audio

Ce panneau permet de gérer tout ce qui concerne le fichier sonore et le rythme de base.

![Panneau Audio](/images/editor/AudioPanel.png)

- **Chargement** : Zone pour charger ou modifier le fichier audio.
- **BPM** : Affiche le tempo actuel. Cliquez sur l'icône **Éclair** pour détecter automatiquement le BPM.
- **Décalage de départ** : Ajustez la synchronisation initiale de la musique.
- **Volume** : Contrôlez le volume de lecture dans l'éditeur.
- **Vitesse de lecture** : Modifiez la vitesse (ex: 0.5x, 1x, 2x) pour mapper les passages difficiles.
- **Indicateur de Souris** : Affiche ou masque la position de votre curseur sur la grille.

---

## 4. Panneau des Pistes

Gérez la structure de votre partition ici.

![Panneau des Pistes](/images/editor/PistePanel.png)

- **Nouvelle Piste** : Créer une piste additionnelle.
- **Édition** : Permet de créer ou de supprimer des notes manuellement.
- **Sélection** : Permet de sélectionner plusieurs pistes ou notes pour les déplacer, supprimer, copier ou coller.
- **Gestionnaire de Groupe** : Organisez vos pistes par groupes (ex: Batterie, Guitare).
- **Marqueurs d'Action** : Gérez les événements spécifiques à certains moments de la musique.

---

## 5. Le Lecteur (Playback)

Le lecteur vous offre un contrôle total sur l'écoute de votre création.

![Commandes de lecture](/images/editor/Playback.png)

- **Lecture / Pause** : Lancez ou arrêtez l'audio.
- **Stop** : Arrêtez la lecture et revenez au début.
- **Navigation** : Utilisez les boutons pour reculer ou avancer rapidement dans la musique.
