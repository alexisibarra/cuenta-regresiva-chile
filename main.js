$(document).ready(function() {
  var diaDelViaje = new Date("April 28, 2018");

  var hoy = new Date();
  var timeDiff = Math.abs(diaDelViaje.getTime() - hoy.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  var phrases = ["¡Felicitaciones!", "¿Están preparados?", "¡Falta poco!"];
  var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  $("#amountDays").html(diffDays);
  $("#randomPhrase").html(randomPhrase);
});
