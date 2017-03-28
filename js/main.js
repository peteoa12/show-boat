

var songKickData = (function(){

	var shared = {};

	function setupListeners(){
		search();
	}

	function search(data) {

		var key = '9VN5XQiG2qUIWuVl';
		var url = `http://api.songkick.com/api/3.0/metro_areas/4120-us-atlanta/calendar.json?apikey=${key}&jsoncallback=?`;
		
		$.ajax({
		    url: url,
		    method: 'GET',
		    dataType: 'jsonp',
		    crossDomain:true
		}).done(function(data) {
			seeResults(data);
		    console.log("success","bitch", data);
		    
		}).fail(function(jqXHR, textStatus, errorThrown) {
		    console.log(jqXHR, textStatus, errorThrown)
		})
	}


	function seeResults(data) {

		var dataBlock = data.resultsPage.results.event;
		for (var i = 0; i < dataBlock.length; i++) {
			var responses = dataBlock[i];
			console.log(responses);
		}
	}
	
	var init = function() {
	    setupListeners();
	};

	shared.init = init;

	return shared;

}());
songKickData.init();
	


