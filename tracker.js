var activities = [{'title': 'Work'}, {'title': 'Cleaning'}, {'title': 'Sleeping'}];

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
});
