$( document ).ready(function( ) {
  // Code that uses jQuery's $ can follow here.
  
  $(".single-page-div").singlePageNav({
		speed: 800,
		filter: ':not(.external)',
		updateHash: true
	});
	
	$('#go-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, 1000);
      return false;
    });
	
	$('#profile .profile_buttons li').each( function(){
		$(this).on('click', function(){
			change_panels( $(this).index() );
		});
	});
	
	var time_wd = $("#timeline").width()+"px";
	$("#issues li").css({"width":time_wd});
	
	$().timelinr({
		arrowKeys: 'true'
	});
	
});

function change_panels(new_index){
	var arrow_positions = [ 5, 80, 150, 220 ];
	var new_top = arrow_positions[new_index] + 'px';

	$('.arrow-left').animate({marginTop:new_top}, 500);
	$('#profile_tabs li:nth-child('+(new_index+1)+')').tab('show');
	$('.profile_buttons li').removeClass('active');
	$('.profile_buttons li:nth-child('+(new_index+1)+')').addClass('active');
}

/*var map = '';

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(16.8461789,96.1309764)
    };
    map = new google.maps.Map(document.getElementById('google_map'),  mapOptions);
}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);*/