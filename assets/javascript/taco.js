$(document).ready(function(){
	$('#wrapper').fullpage();

var queryURL = "https://api.edamam.com/search?q=chicken&app_id=e4a1878b&app_key=0e63bfc5291dfe20fad787020026c8ad";


		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {

			console.log(response);

		});

		var queryURL2 = "https://www.googleapis.com/youtube/v3/playlists?channelId=UC7bX_RrH3zbdp5V4j5umGgw&key=AIzaSyD5gZvasVNbDmW7Pv1IP6_Q_rPPCvEDriI&part=snippet,contentDetails";


		$.ajax({
			url: queryURL2,
			method: "GET"
		}).then(function(response) {

			console.log(response);

		});


























	
});