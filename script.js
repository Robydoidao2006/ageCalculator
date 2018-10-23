// Adds comma to anything above 3 digits
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

// calculate and display
function display(){
    
    // Gets user input
    var userAge = document.getElementById('userAge').value;
    // $('#contact-form input[type="text"]').val('');
    var userName = document.getElementById('userName').value;


    // variables to calculate
    var year = 365;      
    var hrs  = year * 24; 
    var min  = hrs * 60;  
    var sec  = min * 60;  

    // display user input + msg
    document.getElementById('youKnow').innerHTML = "So " + userName + "," + " you are " + userAge + " years old";

    // display calculation
    document.getElementById('yearResult').innerHTML = formatNumber("You have been around for " + year * userAge + " days");
    document.getElementById('hourResult').innerHTML = formatNumber("You have been around for " + hrs  * userAge + " hours");
    document.getElementById('minuteResult').innerHTML = formatNumber("You have been around for " + min  * userAge + " minutes");
    document.getElementById('secondResult').innerHTML = formatNumber("You have been around for " + sec  * userAge + " seconds");

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
    
    // display user input + msg
    document.getElementById('youHaveYear').innerHTML = formatNumber("Based on average, you still have " + avgYear + " year(s) left" );

    // display calculation
    document.getElementById('youHaveDay').innerHTML = formatNumber("You still have " + avgDays + " Day(s) left" );
    document.getElementById('youHaveHour').innerHTML = formatNumber("You still have " + avgHrs + " Hours(s) left" );
    document.getElementById('youHaveMinute').innerHTML = formatNumber("You still have " + avgMin + " Minute(s) left" );
    document.getElementById('youHaveSecond').innerHTML = formatNumber("You still have " + avgSec + " Second(s) left" );


    // console.log(formatNumber(userAge * year));
    // console.log(formatNumber(userAge * hrs));
    // console.log(formatNumber(userAge * min));
    // console.log(formatNumber(userAge * sec));

    // clears form
    $('#form')[0].reset();
}







