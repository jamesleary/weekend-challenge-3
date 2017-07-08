console.log('JS Sourced');
$(document).ready(function(){
  console.log('jQuery Sourced');
  getTasks();
  clickHandlers();
});
function deleteTasks(taskId){
  $.ajax({
        url: '/tasks/' + taskId,
        type: 'DELETE',
        success: function(response){
          console.log(response);
          getTasks();
        } // end success
      }); //end ajax



}
function clickHandlers(){
  $('#addButton').on('click', function(){
    console.log('addButton click');
    var objectToSend = {
      task: $('#taskIn').val(),
    };
    addTasks(objectToSend);
  });
  $('#viewTasks').on('click', '.deleteBtn', function(){
    console.log('Delete Task');
    var taskId = $(this).data('taskid');
    console.log($(this));
    deleteTasks(taskId);
  });
  $('#viewTasks').on('click', '.completeBtn', function(){
    console.log('Complete Task');
    var compid = $(this).data('compid');
    console.log($(this));
    completeTasks(compid);
  });
}
function addTasks(newTask){
  console.log( 'in addTask', newTask );
  //ajax request to send new task to the database
  $.ajax({
  url: '/tasks',
  type: 'POST',
  data: newTask,
  success: function( response ){
    console.log('got some tasks: ', response );
    getTasks();
  } // end success
}); //end ajax
}

function completeTasks(compid){
  $.ajax({
        url: '/tasks/' + compid,
        type: 'PUT',
        success: function(response){
          console.log(response);
          getTasks();
        } // end success
      }); //end ajax
}

// get task list from server from database
function getTasks(){
  $('#viewTasks').empty();
  console.log('in getTasks');
  $.ajax({
    url: '/tasks',
    type:'GET',
    success: function(response){
      console.log('Successfully received task list', response);
      appendToDom(response.taskdata);
    }
  });
}
//Append to viewTask container, items come from database and put on HTML
function appendToDom (tasks){
  console.log('Appending to DOM');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var $tr = $('<tr></tr>');
    $tr.append('<td class="edittask">'+ task.task +'</td>');

    $tr.append('<td>'+ '<button class ="completeBtn"data-compid="' + task.id+ '">Complete</button"</td>');
    $tr.append('<td>'+ '<button class ="deleteBtn" data-taskid="' + task.id + '">Delete</button"</td>');
    $('#viewTasks').append($tr);
  }
}
