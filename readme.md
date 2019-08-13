# Vue-Kanban

### APP Features & Functionality

Kanban is a simple enough application. Users have the request to be able to create and manage boards, lists, and tasks. Tasks should also have the ability to add notes or comments.

A board manages several lists. Once created lists can not be transfered between boards but they can be removed. If a list is removed, all tasks and comments on the list will be removed as well to avoid orphan data.

A task can move between any of the lists on whatever board it was created. Tasks can be removed individually. 

Comments belong to a task and will transfer with the task when moved. If a comment is created only the user who created the comment should be able to edit/remove it unless of course the task, list, or board is removed. 

This app enforces some of security concerns utilizing sessions.

Users can see their boards and any callaborator boards. Users can create boards, lists, tasks, or comments.

### Making the Grade

When wrapping up the kanban project its important that you make an app that is functional and easy to work with. Heres a list of the points for this project

### Visualization

- A user does not have to re-login everytime they refresh the page
- From the **Boards** Page Users can create/delete their own boards
- From the **Board** Page a user can create/delete The Lists associated with the board
- Tasks can be created/deleted inside any list on the **Board** page
- Tasks can be moved between lists (Drag & Drop Feature)
- A user can add and remove comments to a Task

### Functionality

- Only the creator of an object can delete it
- A user has the ability to log in and out.
- The Backend creates and stores the boards created by users
- Each board has lists
- Each List has tasks
- Each task has comments
- Only authenticated users currently logged in can access the api
- The front and backend has the ability to have collaborators on boards
- Comment authors username is next to the comment
