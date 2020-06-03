$ = selector => document.querySelector(selector);
// declare constants
const greeting = new Date(), time = greeting.getHours(), daye = greeting.getDay(0), year = greeting.getFullYear(), num = greeting.getDate();
let monthe = greeting.getMonth();
monthe++;
const a = $('#greeting'), b = $('#date');

// decide date
switch(daye){case 0:day = "Sunday";break;case 1:day = "Monday";break;case 2:day = "Tuesday";break;case 3:day = "Wednesday";break;case 4:day = "Thursday";break;case 5:day = "Friday";break;case 6:day = "Saturday";break;}
switch(monthe){case 1:month = "January";break;case 2:month = "February";break;case 3:month = "March";break;case 4:month = "April";break;case 5:month = "May";break;case 6:month = "June";break;case 7:month = "July";break;case 8:month = "August";break;case 9:month = "September";break;case 10:month = "October";break;case 11:month = "November";break;case 12:month = "December";break;}
// display date
b.innerHTML =`${day} ${num} ${month} ${year}`;

// decide time of day
if(time >= 0 && time < 12) a.prepend('Good morning 😊🍝');
else if (time == 12) a.prepend("Hey, it's noon 🍔");
else if(time > 12 && time < 17) a.prepend("Hey it's afternoon 😉");
else if(time >= 17 && time < 21) a.prepend("Good evening 🚙");
else if(time >= 21) a.prepend("Good night 😴🛌");

setInterval(()=>{
  // decide time
  let hh = new Date().getHours(), mm = new Date().getMinutes(), ss = new Date().getSeconds();
  // disable 24-hour time system
  switch(hh){case 01:case 02:case 03:case 04:case 05:case 06:case 07:case 08:case 09:case 10:case 11:case 12:hour = hh;break;case 13:hour = 01;break;case 14:hour = 02;break;case 15:hour = 03;break;case 16:hour = 04;break;case 17:hour = 05;break;case 18:hour = 06;break;case 19:hour = 07;break;case 20:hour = 8;break;case 21:hour = 9;break;case 22:hour = 10;break;case 23:hour = 11;break;case 00:hour = 12;break;return hour;}
  
  let prime = hh>11 ? 'pm' : 'am';
  // display time
  $('#time').innerHTML = `${hour}:${mm}:${ss} ${prime}`;

}, 1000);
