var activities = [];

$(document).ready(function()
{
    var options =
    {
        el: '.app',
        data:
        {
            activities: activities
        }
    };

    var app = new Vue(options);

    $('body').on('click', '.create-activity', function()
    {
        var activity = prompt("Enter the name of your new activity");
        activities.push({'title': activity, 'tasks': []});
    });

    $('body').on('click', '.create-task', function()
    {
        var index = $(this).parents('.activity').index();
        var task = prompt("Enter the name of your new task");
        activities[index].tasks.push({'title': task});
    });
});
