$(function(){

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
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
	  
	  	var refreshIntervalId =  setInterval(function() {
		 if ( $("#wedding").turn('page')!= $("#wedding").turn('pages') ) {
		    $("#wedding").turn('next');
			
			clearInterval(refreshIntervalId);
		 }
	}, 3500);
    });     	
  }

//receiver on cover    
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

$("#content-slider").lightSlider({
                //loop:true,
				auto: true,
                keyPress:true,
				item:1,
				 speed:500
        });
	

		
// close it when closeLink is clicked
$('a.closeLink').click( doOverlayClose );    

   
    
    
if ( document.cookie.indexOf("visited") == -1 ) {
           // open tutorial mask
            doOverlayOpen();
    
    document.cookie ="visited=yes;  expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

	$("#wedding").turn({
		width:  1024,
		height: 748,  
		autoCenter: true
	});    
    
});


function doOverlayOpen() {
	//set status to open
	isOpen = true;
	
	//if box is not set to open then don't do anything
	if( isOpen == false ) return;
	// set the properties of the overlay box, the left and top positions
	$('.overlayBox').css({
		display:'block',
		left:( $(window).width() - $('.overlayBox').width() )/2,
		//top:( $(window).height() - $('.overlayBox').height() )/2 -80,
		position:'absolute'
	});
	// set the window background for the overlay. i.e the body becomes darker
	$('.bgCover').css({
		display:'block',
		width: $(window).width(),
		height:$(window).height(),
	});    
    
    
	$('.bgCover').css({opacity:0}).animate( {opacity:0.5, backgroundColor:'#000'} );
	// dont follow the link : so return false.
	//return false;
}
function doOverlayClose() {

	//set status to closed
	isOpen = false;
	$('.overlayBox').css( 'display', 'none' );
	// now animate the background to fade out to opacity 0
	// and then hide it after the animation is complete.
	$('.bgCover').animate( {opacity:0}, null, null, function() { $(this).hide(); } );
}
// if window is resized then reposition the overlay box
//$(window).bind('resize', showOverlayBox);

