# Guide: Actions

Define gameplay-specific logic with Actions.

Actions allow you to trigger specific events when the player interacts with a note (e.g., camera change, visual effect, score bonus).

## Creating an Action

1.  Go to the very bottom of the left panel to find the **Action Manager**.
2.  Click the **Create** button (+).
3.  A dialog will appear:
    -   Enter the **Name** of the action.
    -   Choose an **Icon** to represent it visually.
4.  The action is created and appears in the list.

<video src="/videos/action-creation.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

## Linking an Action to Notes

For an action to trigger, it must be linked to one or more notes.

1.  Select the desired notes (use the lasso or Ctrl+Click).
2.  **Right-click** on the selection.
3.  Choose **Link to an action**.
4.  In the window that opens, select the action you created.
5.  Linked notes will now display a visual indicator (the action icon).

*Tip: Hovering over a note with the mouse will show a tooltip with its associated action.*

## Unlinking an Action

To remove an action from a note:

1.  Select the concerned notes.
2.  **Right-click**.
3.  Choose **Unlink (Remove action)**.
4.  The action is removed, and the note becomes standard again.

<video src="/videos/action-link.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

## Usage Example

The most common use of actions is **triggering a visual effect** in the game.

In the video below, we link an action named "RedNote" and "BlueNote" to notes corresponding to musical highlights. This will allow us to create notes where the player will be required to right-click or left-click to select the correct note in-game.

<video src="/videos/action-usage.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>

### Result in Game

Once the project is exported and integrated into the game engine, notes with the "RedNote" and "BlueNote" actions send a signal that the game listens to and interprets to change note colors or shake the camera.

<video src="/videos/action-result.mp4" controls="controls" muted="muted" style="max-height:640px; min-height: 200px"></video>
