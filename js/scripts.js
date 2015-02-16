$(document).ready(function() {
  $("form#new-task").submit(function(event) {

    var inputtedTask = $("input#new-task-name").val();
    var newTask = {task: inputtedTask}

    $("ul#tasks").append("<li class='task'>" + newTask.task + "</li>");

    $("input#new-task-name").val("");

    $("ul#tasks li.task").last().click(function() {
      $('ul#completed-tasks').append($(this));

      $('ul#completed-tasks li.task').last().click(function() {
        $(this).remove();
      });
    });


    event.preventDefault();
  });
});
