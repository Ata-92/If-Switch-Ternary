let day = prompt('Please enter the day: ');
let message;
if (day == 'monday' || day == 'wednesday' || day == 'thursday') {
  message = 'There is single session';
} else if (day == 'saturday') {
  message = 'There is double session';
} else if (day == 'sunday' ||day == 'tuesday' || day == 'friday') {
  message = 'There is no live session';
} else {
  message = 'Unvalid entry.';
}
alert(message);
