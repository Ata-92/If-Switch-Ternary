let day3 = prompt('Please enter the day: ');
alert(day3 == 'monday' || day3 == 'wednesday' || day3 == 'thursday' ? 'There is single session' : (day3 == 'saturday' ? 'There is double session' : (day3 == 'sunday' || day3 == 'tuesday' || day3 == 'friday' ? 'There is no live session' : 'Unvalid entry.')));
