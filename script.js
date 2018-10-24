// Adds comma to any integer above 3 digits
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
// calculate and display
function display(){
    
  // Gets user input
  var userAge = document.getElementById('userAge').value;

  var userName = document.getElementById('userName').value;

  // variables to calculate
  var year = 365;      
  var hrs  = year * 24; 
  var min  = hrs * 60;  
  var sec  = min * 60; 

  // display user input + msg
  document.getElementById('youKnow').innerHTML = "So " + userName + "," + " you are " + userAge + " year(s) old";

  // display calculation
  document.getElementById('totalResult').innerHTML = formatNumber("You have been around for " + year * userAge + " days " + hrs  * userAge + " hours " + min  * userAge + " minutes " + sec  * userAge + " seconds");

  // USA average livespan its 80 years.
  var avgYear = 80 - userAge; 
  var avgDays = 29200  - year * userAge;
  var avgHrs  = 700800 - hrs  * userAge;
  var avgMin  = 42048000 - min * userAge;
  var avgSec  = 2522880000  - sec * userAge;

    
  // 80 * 365 = 29,200
  // 80 * 365 * 24 = 700,800
  // 80 * 365 * 24 * 60 = 42,048,000
  // 80 * 365 * 24 * 60 * 60 =  2,522,880,000 
    
  // document.getElementById('youHaveYear').innerHTML = formatNumber("hum, you should be dead!" );
  // display user input + msg
  document.getElementById('youHaveYear').innerHTML = formatNumber("Based on average, you still have " + avgYear + " year(s) left" );


  // display calculation
  document.getElementById('youHaveleft').innerHTML = formatNumber("You still have " + avgDays + " Day(s) "  + avgHrs + " Hour(s) "  + avgMin + " Minute(s) " + avgSec + " Second(s) left" );   



  // console.log(formatNumber(userAge * year));
  // console.log(formatNumber(userAge * hrs));
  // console.log(formatNumber(userAge * min));
  // console.log(formatNumber(userAge * sec));

  // clears form
  $('#form')[0].reset();

}









