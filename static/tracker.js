var activities = [];

// Function to load data from local storage
function load()
{
    var data = localStorage.getItem('activities');

    if(data)
    {
        activities = JSON.parse(data);
    }
}

// Function to save data into local storage
function save()
{
    localStorage.setItem('activities', JSON.stringify(activities));
}

$(document).ready(function()
{
    load();

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
        save();
    });

    $('body').on('click', '.create-task', function()
    {
        var index = $(this).parents('.activity').index();
        var task = prompt("Enter the name of your new task");
        activities[index].tasks.push({'title': task});
        save();
    });
});
