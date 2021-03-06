# weekend-challenge-3

Instructions
Create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (SQL)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.
Each task should have an option to 'Complete' or 'Delete'.
When a task is complete, its visual representation should change on the front end
(for example, the background of the task container could change from gray to green,
  as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need
  to hook into logic to know whether or not the task is complete)
Whether or not a task is complete should also be stored in the database.
Deleting a task should remove it both from the Front End as well as the Database.

Make sure that you also show us your best styling chops.

Additionally, please include some way to recreate your initial database schema. This can be a .sql file
with CREATE TABLE statements or you can create your schema automatically when your app loads.

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once
again, you can interrupt this however you would like.

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks
left to complete are brought to the top of the list.

Task list
Base functionality
[x] Set up base File with server and router
[x] Create a new table called 'tasks' with 3 columns. ID, task, complete
[x] Set up Database with sample data to start with.
[x] Set up HTML with containers for the tasks to go and set up HTML input field for adding to the task list.
[x] Create a GET request to link up database with sample data
[x] append sample data to the DOM.
[x] Create a delete button to remove task from the list.
[x] Create a POST request to add new input data from HTML form to add new tasks to the database and on refresh add them to the DOM.

[x] Create a complete button to change the complete column boolean from false to true.
    this will also change either the color of the box or strikethrough text.
[ ] Add Styling to make the project pretty
