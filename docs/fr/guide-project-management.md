# Guide : Gestion de projet

Gardez vos créations rythmiques organisées.


## Sauvegarde du projet

Gérez la sauvegarde de votre travail pour ne rien perdre.
C'est à droite dans la barre d'outils, un bouton en forme de disquette permet de sauvegarder. Lorsqu'on clique dessus, une liste déroulante s'affiche vous permettant de choisir entre **Sauvegarder** ou **Sauvegarder sous...**.

::: info À noter
**Organisation des fichiers**  
Gardez vos fichiers `.rne` dans un dossier dédié. RhythmNator suit les chemins relatifs vers vos fichiers audio, il est donc préférable de garder la musique dans le même répertoire.
:::


### Sauvegarder (CTRL+S)
- Si le projet n'a pas encore été sauvegardé, un dialogue s'ouvre pour vous demander de choisir le dossier de destination.
- Si le projet a déjà été sauvegardé, les modifications sont enregistrées automatiquement dans le fichier source.

### Sauvegarder sous...
Cette option vous permet de choisir un nouvel emplacement ou un nouveau nom de fichier pour enregistrer une copie de votre projet.

<video src="/videos/sauvegarde-projet.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

---

## Export JSON

L'export au format JSON fonctionne de la même manière que la sauvegarde. Il vous permet de générer le fichier de données qui sera utilisé par votre jeu ou application.

- **Raccourci** : `CTRL+E`

<video src="/videos/export-json.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

---

## Architecture du fichier JSON

Le fichier JSON exporté contient toutes les informations nécessaires au fonctionnement de votre niveau rythmique. Voici comment il est structuré :

- **bpm** : Le tempo de la musique.
- **musicDuration** : La durée totale du morceau en secondes.
- **Notes** : Liste contenant les notes qui ne sont pas dans un groupe.
- **[Nom du Groupe]** : Liste contenant les notes appartenant à un groupe spécifique.

### Logique des listes de notes
- Si des pistes ne sont pas dans un groupe, leurs notes sont regroupées dans la liste nommée `Notes`.
- Si des pistes sont dans un groupe, toutes leurs notes sont regroupées dans une liste portant le nom de ce groupe.
- S'il n'y a aucune note en dehors d'un groupe, la liste `Notes` ne sera pas présente dans le fichier, seules les listes de groupes apparaîtront.

<video src="/videos/groupe-architecture-json.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>


#### Exemple simplifié
```json
{
  "bpm": 130,
  "musicDuration": 164.84,
  "Notes": [
    { "name": "Piste 4", "row": 3, "time": 1.269, "duration": 0 }
  ],
  "Groupe": [
    { "name": "Piste 1", "row": 0, "time": 1.5, "duration": 0 },
    { "name": "Piste 3", "row": 2, "time": 1.5, "duration": 0 },
    { "name": "Piste 2", "row": 1, "time": 3.5, "duration": 1.5 },
    { "name": "Piste 3", "row": 2, "time": 5.89, "duration": 0 },
  ]
}
```
