/* Creation of variables */
var username;
var message;
/* We assigned the value for each variable using quotes */
username = 'Guinto';
message = 'See our upcoming range';

/* We substitute the variables that are in the HTML file with the one
   that assigned in this javascript file */

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;
