daysBetween = function(date1, date2) {
  //Get 1 day in milliseconds
  var one_day = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms / 1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  var hours = Math.floor(difference_ms % 24);
  var days = Math.floor(difference_ms / 24);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

$(document).ready(function() {
  var diaDelViaje = new Date(2018, 3, 28, 19, 30, 0, 0);

  // var timeDiff = Math.abs(diaDelViaje.getTime() - hoy.getTime());
  // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  var phrases = [
    "¡Felicitaciones!",
    "¿Están preparados?",
    "¡Falta poco!",
    "¿Qué están haciendo?"
  ];
  var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  setInterval(function() {
    var hoy = new Date();

    var diff = daysBetween(hoy, diaDelViaje);
    $("#daysAmount").html(diff.days);
    $("#hoursAmount").html(diff.hours);
    $("#minutesAmount").html(diff.minutes);
    $("#secondsAmount").html(diff.seconds);
  }, 1000);

  // $("#amountDays").html(diffDays);
  $("#randomPhrase").html(randomPhrase);
});
