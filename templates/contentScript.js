alert("I'm your content script on every page.");
$(document).ready(function() {
      alert("document ready occurred!");
  //    $('<div class="layout"><div class="mextension"><div class="mextension_images">My extension</div><div class="mextension_video" onclick="show();">video</div><div class="mextension_position">position</div><div class="mextension_person">person</div></div>').appendTo('body');
});

$(window).load(function() {
      alert("window load occurred!");
});

$('<iframe class="notranslate" src="http://127.0.0.1:5000/iframe_div" frameborder="0"  scrolling="no" style="height:100px;"></iframe>').appendTo('body');
