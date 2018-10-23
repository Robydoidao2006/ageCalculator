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
    document.getElementById('youKnow').innerHTML = "So " + userName + ", you are " + userAge + " years old";

    // display calculation
    document.getElementById('yearResult').innerHTML   = formatNumber("You have been around for " + year * userAge + " days");
    document.getElementById('hourResult').innerHTML   = formatNumber("You have been around for " + hrs  * userAge + " hours");
    document.getElementById('minuteResult').innerHTML = formatNumber("You have been around for " + min  * userAge + " minutes");
    document.getElementById('secondResult').innerHTML = formatNumber("You have been around for " + sec  * userAge + " seconds");

    // console.log(formatNumber(userAge * year));
    // console.log(formatNumber(userAge * hrs));
    // console.log(formatNumber(userAge * min));
    // console.log(formatNumber(userAge * sec));

    // clears form
    $('#form')[0].reset();
}







