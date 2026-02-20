# Guide : Actions

Définissez une logique spécifique à votre jeu avec les Actions.

Les Actions permettent de déclencher des événements spécifiques lorsque le joueur interagit avec une note (ex: changement de caméra, effet visuel, bonus de score).

## Création d'une Action

1.  Allez tout en bas du panneau de gauche pour trouver le **Gestionnaire des Actions**.
2.  Cliquez sur le bouton **Créer** (+).
3.  Une boîte de dialogue s'affiche :
    -   Entrez le **Nom** de l'action.
    -   Choisissez une **Icône** pour la représenter visuellement.
4.  L'action est créée et apparaît dans la liste.

<video src="/videos/action-creation.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

## Lier une Action à des Notes

Pour qu'une action se déclenche, elle doit être liée à une ou plusieurs notes.

1.  Sélectionnez les notes désirées (utilisez le lasso ou Ctrl+Clic).
2.  Faites un **Clic Droit** sur la sélection.
3.  Choisissez **Lier à une action**.
4.  Dans la fenêtre qui s'ouvre, sélectionnez l'action que vous avez créée.
5.  Les notes liées afficheront désormais un indicateur visuel (l'icône de l'action).

*Astuce : En survolant une note avec la souris, une infobulle vous indiquera l'action qui lui est associée.*

## Délier une Action

Pour retirer une action d'une note :

1.  Sélectionnez les notes concernées.
2.  Faites un **Clic Droit**.
3.  Choisissez **Délier (Retirer l'action)**.
4.  L'action est retirée et la note redevient standard.

<video src="/videos/action-link.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

## Exemple d'Utilisation

L'exemple le plus courant d'utilisation des actions est le **déclenchement d'un effet visuel** dans le jeu.

Dans la vidéo ci-dessous, nous lions une action nommée "RedNote" et "BlueNote" aux notes qui correspondent aux temps forts de la musique. Cela vas nous servire a cree des notes ou le joeur sera obijet de faire un clik droit ou un clique gauche pour selectionner la bonne note en jeu.

<video src="/videos/action-usage.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

### Résultat dans le Jeu

Une fois le projet exporté et intégré au moteur de jeu, les notes avec l'action "RedNote" et "BlueNote" envoient un signal que le jeu écoute et interprète pour secouer changer la couleur des notes.

<video src="/videos/action-result.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

