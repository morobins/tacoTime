$(document).ready(function(){
	$('#wrapper').fullpage();

var queryURL = "http://api.edamam.com/search?q=chicken&app_id=e4a1878b&app_key=0e63bfc5291dfe20fad787020026c8ad";


		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response) {

			console.log(response);

		});


























	
});