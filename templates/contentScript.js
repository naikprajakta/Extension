/*var link = document.createElement('link');
link.href =  chrome.extension.getURL('contentScript.css');
  //chrome-extension://<extension id>/main.css
link.rel = 'stylesheet';
document.documentElement.insertBefore(link);
*/

//popup for each keyword click
$('<div class="popup"><div class="popup_keyword1"></div><div class="popup_keyword2">popup of keyword2</div><div class="popup_keyword3">popup of keyword3</div><div class="popup_keyword4">popup of keyword4</div><div class="popup_keyword5">popup of keyword4</div></div>').appendTo('body');


//layout of bottom extension
$('<div class="layout"><img class="close-image" src="http://residentialsearch.savills.co.uk/Content/Images/icon_close.png" /><img class="gmap" src="http://cdn1.iconfinder.com/data/icons/Mobile-Icons/128/04_maps.png" /><div class="ball1"></div><div class="mextension"><div class="keyword1"><p id="keyword1">My extension</p></div><div class="keyword2"><p id="keyword2">video</p></div><div class="keyword3"><p id="keyword3">position</p></div><div class="keyword4"><p id="keyword4">person</p></div><div class="keyword5"><p id="keyword5"></p><img class="twitter" src="http://cdn1.iconfinder.com/data/icons/colorstroked/Twitter.png" /></div><button type="button" id="rifuprevkeyword" style="position: absolute; left: 863px;top: -17px; background-color: white; width: 43px;height: 26px;">Prev</button><button type="button" id="rifunextkeyword" style="position: absolute;left: 863px;top: 25px;background-color: white;width: 43px;height: 26px;">Next</button></div></div>').appendTo('body');

$('.layout').hide();
$('.popup_keyword1').hide();
$('.popup_keyword2').hide();
$('.popup_keyword3').hide();
$('.popup_keyword4').hide();
$('.popup_keyword5').hide();

$(':button').click(function(){
	//alert("button click");
	var s=this.id;
	if(s=="rifuprevkeyword")
	{
		//alert("prev button click");
		chrome.extension.sendRequest({"button": "prev"});
	}
	else if(s=="rifunextkeyword")
	{
		//alert("next button click");
		chrome.extension.sendRequest({"button": "next"});
	}
});
$('.keyword4').click(function(){
	//alert("in onclick function of keyword4");
	if($('.popup_keyword4').is(':visible')){
        	$('.popup_keyword4').slideUp('slow');
        }else{
		$('.popup_keyword4').slideDown('slow');	
	}
	$('.ball1').fadeOut();
	$('.popup_keyword1').slideUp('slow');
	$('.popup_keyword2').slideUp('slow');
	$('.popup_keyword3').slideUp('slow');
	$('.popup_keyword5').slideUp('slow');
});

$('.keyword1').click(function(){
	//alert("in onclick function of keyword1");
	//check if any popup is currently open,close that by removing the class
	if($('.popup_keyword1').is(':visible')){
        	$('.popup_keyword1').slideUp('slow');
        }else{
		$('.popup_keyword1').slideDown('slow');	
	}
	$('.popup_keyword2').slideUp('slow');
	$('.popup_keyword3').slideUp('slow');
	$('.popup_keyword4').slideUp('slow');
	$('.popup_keyword5').slideUp('slow');	
});

$('.keyword2').click(function(){
	//alert("in onclick function of keyword2");
	//$('.popup_keyword2').slideToggle();
	if($('.popup_keyword2').is(':visible')){
        	$('.popup_keyword2').slideUp('slow');
        }else{
		$('.popup_keyword2').slideDown('slow');	
	}
	
	$('.popup_keyword1').slideUp('slow');
	$('.popup_keyword3').slideUp('slow');
	$('.popup_keyword4').slideUp('slow');
	$('.popup_keyword5').slideUp('slow');
	
});

$('.keyword3').click(function(){
	if($('.popup_keyword3').is(':visible')){
        	$('.popup_keyword3').slideUp('slow');
        }else{
		$('.popup_keyword3').slideDown('slow');	
	}
	$('.popup_keyword1').slideUp('slow');
	$('.popup_keyword2').slideUp('slow');
	$('.popup_keyword4').slideUp('slow');
	$('.popup_keyword5').slideUp('slow');
});



$('.twitter').click(function(){
	//alert("in onclick function of keyword4");
	if($('.popup_keyword5').is(':visible')){
        	$('.popup_keyword5').slideUp('slow');
        }else{
		$('.popup_keyword5').slideDown('slow');	
	}
	$('.popup_keyword1').slideUp('slow');
	$('.popup_keyword2').slideUp('slow');
	$('.popup_keyword3').slideUp('slow');
	$('.popup_keyword4').slideUp('slow');
});

$(".close-image").click(function(){
   	 $(this).parent().slideUp('slow');
   	 $(".popup_keyword1").slideUp('slow');
   	 $(".popup_keyword2").slideUp('slow');
   	 $(".popup_keyword3").slideUp('slow');
   	 $(".popup_keyword4").slideUp('slow');
         $(".popup_keyword5").slideUp('slow');
         $(".keyword1").hide('slow');
         $(".keyword2").hide('slow');
         $(".keyword3").hide('slow');
	 $(".keyword4").hide('slow');
});
/*$('.keyword3').click(function(){
	//alert("in onclick function of keyword3");
	$('.popup_keyword3').toggle();
});
$('.keyword4').click(function(){
	//alert("in onclick function of keyword4");
	$('.popup_keyword4').toggle();
});

$('.keyword5').click(function(){
	//alert("in onclick function of keyword4");
	$('.popup_keyword5').toggle();
});*/

/*$(".close-image").click(function(){
   	$(this).parent().hide();
	$(".popup_keyword1").hide();
   	$(".popup_keyword2").hide();
   	$(".popup_keyword3").hide();
   	$(".popup_keyword4").hide();
});
*/

//1)button click 2)call fuction from background.html  sendrequest/onrequest


/*			//w
$('#rifuprevkeyword').click(function(){
	alert("prev button click");
	chrome.extension.sendRequest({"button": "prev"});
});
$('#rifunextkeyword').click(function(){
	alert("next button click");
	chrome.extension.sendRequest({"button": "next"});
});
*/
/*                   //W
$(':button').click(function(){
	alert("button click");
});*/


/* for adding video: need to check
//popup for each keyword click
$('<div class="popup_keyword1">

<object height="240" id="grelated-id-yt-player" type="application/x-shockwave-flash" width="396">
	<param name="movie" value="http://www.youtube.com/v/MsuXnUiwG-Q?enablejsapi=1&amp;version=3&amp;hl=en_US&amp;rel=0"><param name="allowFullScreen" value="true">
	<param name="allowscriptaccess" value="always">
	<embed src="http://www.youtube.com/v/MsuXnUiwG-Q?enablejsapi=1&amp;version=3&amp;hl=en_US&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" height="240" width="396">
</object>
</div><div class="popup_keyword2">popup of keyword2</div><div class="popup_keyword3">popup of keyword3</div><div class="popup_keyword4">popup of keyword4</div>').appendTo('body');
*/

