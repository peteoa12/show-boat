$(document).ready(function($) {


	var songKickData = (function(){

		var shared = {};

		function setupListeners(){
			search();
		}

		function search(data) {
			var key = '9VN5XQiG2qUIWuVl';
			var url = `http://api.songkick.com/api/3.0/metro_areas/4120-us-atlanta/calendar.json?apikey=${key}`;
			

			$.ajax({
			    url: url,
			    method: 'GET',
			    dataType: 'jsonp'
			}).done(function(data) {
			    console.log("success", data);
			}).fail(function(jqXHR, textStatus, errorThrown) {
			    console.log(jqXHR, textStatus, errorThrown)
			})
		}



		
		var init = function() {
		    setupListeners();
		};

		shared.init = init;

		return shared;

	}());
	songKickData.init();
	
});

