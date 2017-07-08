console.log('JS Sourced');
$(document).ready(function(){
  console.log('jQuery Sourced');
  getTasks();
});

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

function appendToDom (tasks){
  console.log('Appending to DOM');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var $tr = $('<tr></tr>');
    $tr.append('<td>'+ task.task +'</td>');
    $tr.append('<td>'+ task.complete +'</td>');
    $('#viewTasks').append($tr);
  }
}
