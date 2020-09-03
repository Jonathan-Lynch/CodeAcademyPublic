## Intro
Over the last few weeks, you've been adding on to your todo app, rebuilding, and refactoring. For this Checkpoint, you're going to rebuild this app into a Trello app that has three lanes: Todo, Doing, and Done. We aren't going to get as fancy as being able to drag and drop (you could try this on your own). There will be a drop-down to change a todo status, which should move it to another lane. We need to be able to update the todo title. We should also be able to add a description for the todo to give more detail. There is not enough room to type the description in the todo component, so we'll need a modal with a text area.
<img src="NG421Checkpoint1Demo.gif">
## Setup
1. Fork, clone, npm i, npm start

## Diagnose Bugs
The last person at your company who worked on this project didn't finish up. We need to fix their broken code. 

1. The app won't run with npm start. Is there a message in the terminal that indicates a problem?
1. The delete confirmation modal is not working. Why not? Is it setup properly?


## Code

### `interfaces/itodo.ts`
1. Add a new field `status` of type string.
1. Add a new field `description` of type string that is optional.
1. Add a new field `createdAt` of type Date.
1. As soon as you add these, there will be compile errors. Fix them by assigning the default values: `{status:'Todo',createdAt:new Date()}`
1. Use the interface in all places appropriate for TypeScript.

### `services/todo.service.ts`
1. Create a property in the todo service: `statuses`. It should be an array of strings: "Todo", "Doing", "Done". 
1. Create a method in the todo service: `getStatuses`. It should return the array `statuses`.
1. Change the `getTodos` method to accept an argument `status`, to only get todos with that status. Return `todoList.filter` if `status` is truthy else just return the normal array `todoList`.

### `todo-list/todo-list.component.ts`
1. Add a class property `status` which is an @Input().
1. We need to change the class property `todoList` to a getter property.
```
get todoList() {
  return this.todoService.getTodos(this.status);
}
```
1. Remove the code from ngOnInit
## Board
1. Create a new component for `Board`. This will be what holds the lanes of todos.
1. The board is responsible for determining which status is shown in a lane.
1. Pass the hard coded value of status to the `status` attribute of `<app-todo-list>`.
```
<div class="row">
    <div class="col-md-4">
      <h3>Todo</h3>
      <app-todo-list status="Todo"></app-todo-list>
    </div>
    <div class="col-md-4">
      <h3>Doing</h3>
      <app-todo-list></app-todo-list>
    </div>
    <div class="col-md-4">
      <h3>Done</h3>
      <app-todo-list></app-todo-list>
    </div>
  </div>
```
Bonus: how could you do this without hard coding the lanes to three.

### `app.component.html`
1. Use `<app-board>` instead of `<app-todo-list>`.

### `create-todo/create-todo.component.ts`
1. Make sure the default status of a todo is `Todo`.
1. Make sure the default valu of `createdAt` is `new Date()`.

### `todo/todo.component.ts`
1. Add a class property `isEditing` set to false.
1. Add a `<select>` to the template. Populate its options from the values of the todo service, `getStatuses`, with `*ngFor`.
1. Bind the `<select>` value to the `todo.status` with `ngModel`.
1. Implement in place editing to allow updating the title. Use `isEditing`. You decide what will trigger the editing.
1. Add another button next to Delete for Edit. Clicking this button will open a modal `TodoEdit` (not yet made) that will allow a Todo's description to be edited. Make sure to assign the `componentInstance.todo`

### TodoEdit
1. Create this component to be used as a modal to edit a Todo's description.
1. Make sure there is a `todo` property that can be assigned the todo it is editing
1. Use a textarea to allow editing of the description.
1. Think about what other properties a todo could have that might be added to component template.
1. Make a decision: should there be a save button and the description is only updated when the save button is clicked or will the changes be saved as soon as they are typed.

### Material Table
Some users don't want to look at the lanes. They want to look through all the data in one place and sort and filter it. This calls for a table.

1. Add Material to the project and set it up in the code.
1. Add a component `TodoTable` that uses Material to show all the todos in table format with filtering and sort.
1. You will need to retrieve the data from the todo service.

### Routing
1. Add routes for the `Board` and `TodoTable` component. You choose the paths.
1. Add links to the Board and TodoTable somwhere in `app.component.html`.
1. Remove `<app-board>` from `app.component.html`.
1. Make sure `<router-outlet></router-outlet>` is there.
1. The root path no longer shows anything in the page. You might want to fix that.
