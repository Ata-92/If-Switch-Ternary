let day2 = prompt('Please enter the day: ');
switch (day2) {
  case 'monday':
    alert('There is single session');
    break;
  case 'tuesday':
    alert('There is no live session');
    break;
  case 'wednesday':
    alert('There is single session');
    break;
  case 'thursday':
    alert('There is single session');
    break;
  case 'friday':
    alert('There is no live session');
    break;
  case 'saturday':
    alert('There is double session');
    break;
  case 'sunday':
    alert('There is no live session');
    break;
  default:
    alert('Unvalid entry.');
}
