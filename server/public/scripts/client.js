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

    }
  });
}
