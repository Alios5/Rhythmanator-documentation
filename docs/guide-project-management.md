# Guide: Project Management

Keep your rhythmic creations organized.

## Project Save

Manage your work's safety to never lose anything.
On the right of the toolbar, a disk-shaped button allows you to save. Clicking it opens a dropdown menu letting you choose between **Save** or **Save As...**.

::: info Note
**File Organization**  
Keep your `.rne` files in a dedicated folder. RhythmNator tracks relative paths to your audio files, so it's best to keep the music in the same directory.
:::

### Save (CTRL+S)
- If the project has not been saved yet, a dialog opens asking you to choose a destination folder.
- If the project has already been saved, changes are automatically recorded in the source file.

### Save As...
This option allows you to choose a new location or filename to save a copy of your project.

<video src="/videos/sauvegarde-projet.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

---

## JSON Export

Exporting to JSON format works the same way as saving. It allows you to generate the data file that will be used by your game or application.

- **Shortcut**: `CTRL+E`

<video src="/videos/export-json.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

---

## JSON File Architecture

The exported JSON file contains all the necessary information for your rhythmic level to function. Here is how it is structured:

- **bpm**: The music's tempo.
- **musicDuration**: The total track duration in seconds.
- **Notes**: List containing notes that are not in a group.
- **[Group Name]**: List containing notes belonging to a specific group.

### Note List Logic
- If tracks are not in a group, their notes are grouped in the list named `Notes`.
- If tracks are in a group, all their notes are grouped in a list named after that group.
- If there are no notes outside of a group, the `Notes` list will not be present in the file; only the group lists will appear.

<video src="/videos/groupe-architecture-json.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

#### Simplified Example
```json
{
  "bpm": 130,
  "musicDuration": 164.84,
  "Notes": [
    { "name": "Track 4", "row": 3, "time": 1.269, "duration": 0 }
  ],
  "Groupe": [
    { "name": "Track 1", "row": 0, "time": 1.5, "duration": 0 },
    { "name": "Track 3", "row": 2, "time": 1.5, "duration": 0 },
    { "name": "Track 2", "row": 1, "time": 3.5, "duration": 1.5 },
    { "name": "Track 3", "row": 2, "time": 5.89, "duration": 0 }
  ]
}
```
