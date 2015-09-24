var birthday = new Date('Thu, 29 Dec 2005 18:00:00 GMT-500');

function updateTime()
{
    var now = new Date();
    var difference = now.getTime() - birthday.getTime();

    var total = {};
    total.seconds = difference / 1000;
    total.minutes = total.seconds / 60;
    total.hours = total.minutes / 60;
    total.days = total.hours / 24;
    total.years = total.days / 365;

    var partial = {};
    partial.years = Math.floor(total.years);
    partial.days = Math.floor(total.days - partial.years * 365);
    partial.hours = Math.floor(total.hours - partial.years * 365 * 24 - partial.days * 24);
    partial.minutes = Math.floor(total.minutes - partial.years * 365 * 24 * 60 - partial.days * 24 * 60 - partial.hours * 60);
    partial.seconds = Math.floor(total.seconds - partial.years * 365 * 24 * 60 * 60 - partial.days * 24 * 60 * 60 - partial.hours * 60 * 60 - partial.minutes * 60);

    $('.years').text(partial.years + ' Years');
    $('.days').text(partial.days + ' Days');
    $('.hours').text(partial.hours + ' Hours');
    $('.minutes').text(partial.minutes + ' Minutes');
    $('.seconds').text(partial.seconds + ' Seconds');

    $('.total-seconds').text(Math.floor(total.seconds) + ' Seconds');
    $('.total-days').text(Math.floor(total.days) + ' Days');
}

$(document).ready(function()
{
    // Update time on page load
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
});
