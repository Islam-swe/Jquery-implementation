// first function to slid down every paragraph and close it 
$('h2').click(function () {
    $(this).next('p').slideToggle(500);
    $(this).prev('p').slideUp(500);

  })

// the count down function 

function countdown(){
    var now = new Date();//return the exact current date by milliseconds =>Sat May 09 2020 00:58:28 GMT+0200 (Eastern European Standard Time)
    var eventDate = new Date(2021, 12, 31);//return the given date by milliseconds =>Mon Jan 31 2022 00:00:00 GMT+0200 (Eastern European Standard Time)

    var currentTiime = now.getTime();//retrun the calculation of miliseconds depending of date returns
    var eventTime = eventDate.getTime();//retrun the calculation of miliseconds depending of date returns

    var remTime = eventTime - currentTiime;// the result between the two times

    var s = Math.floor(remTime / 1000);//The Math.floor() function returns the largest integer less than or equal to a given number.
    //and (remTime/1000)=> to return the number of seconds NOT the milliseconds
    var m = Math.floor(s / 60);// return the number of the minutes 
    var h = Math.floor(m / 60);// return the number of the hours 
    var d = Math.floor(h / 24)-30;// return the number of the days -month


    h %= 24;// to return the remaining hours of one day
    m %= 60;// to return the remaining minutes of one hour
    s %= 60;// to return the remaining secondes of one second
  
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

// insert the values in the given elements
    $('#day').text(d+' Day');
    $('#hours').text( h+' Hour');
    $('#minutes').text( m+' Minutes');
    $('#second').text( s+' Sec');

    
}
// using setInterval to show the update of time every second 
setInterval(countdown, 1000);
//=========================================================


// function to open the side slider and close it
let menuLeft=$('.menu').offset().left;
let menuWidth=$('.menu').width();
$('#open').click(function () {
   
     $('.menu').animate({left:'0px'},500);
     $('#open').animate({left:`${menuWidth}`});
   
  })
$('#x').click(function () {
     $('.menu').animate({left:-`${menuWidth}`});
     $('#open').animate({left:`0px`});
})


// function to count the number of characters remaining in textarea
let textCount=100;  
$('textarea').keyup(function () {
    let len=$('textarea').val().length;
    let char=textCount-len;
    // console.log(char);
    if(char<=0){
        $('#charNum').text('your available character finished' ); 
    }
    else{
        $('#charNum').text(char );
    }
    
})





/*scroll the window smoothly to the section selected*/
$('.menu h3').click(function(){
    let SectionId=  $(this).attr("class");
    let secOffset= $(`#${SectionId}`).offset().top;

    $('body,html').animate({scrollTop:secOffset},2000)
    console.log(secOffset);

})


