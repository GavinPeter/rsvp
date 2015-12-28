$(function(){

     var audio = new Audio('./remember_day.mp3');
    
//below android 3 not support 
var ua = navigator.userAgent;
if( ua.indexOf("Android") >= 0 )
{
  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
  if (androidversion < 3 && !(ua.indexOf('Chrome') > -1))
  {
	alert("瀏覽器不支援");
    	window.location.href = '/'; 
  }
}

  if (!$('.envelope').hasClass('open')){
      
      //start to click function
    $('.envelope').click(function(){
        
        audio.play();
                  
    //love background 
    //thank for http://www.thelittletechie.com/2015/03/love-heart-animation-using-css3.html
    var love = setInterval(function() {
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 65) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 25) + 100;
        var r_time = Math.floor(Math.random() * 5) + 5;

        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        $('.heart').each(function() {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        });
    }, 400);
    
        
      $(this).removeClass('new').addClass('open');
	  
	  	var refreshIntervalId =  setInterval(function() {
		 if ( $("#wedding").turn('page')!= $("#wedding").turn('pages') ) {
		    $("#wedding").turn('next');
		 }
            clearInterval( refreshIntervalId );
            
	}, 4000);
    });
      
  }

//receiver name on cover    
    if ( window.location.href.indexOf('#') != -1  ){
		var cName =decodeURIComponent(window.location.href.slice(window.location.href.indexOf('#') + 1));
		 
		var cArray = cName.split("");
		 
			
	if (cArray.length<4){
		cName ="";
        	for (var i = 0; i < cArray.length; i++) {
          		cName += cArray[i] + "　";
       		}
	}
		
		$(".receiver").text(cName );
	}
	else{
		$(".receiver").text( "○ ○ ○");
	}


//turn.js 
$("#wedding").turn({
		width:  1024,
		height: 748,
        elevation: 50,
        gradients: true,
		autoCenter: true
});    
    

});



