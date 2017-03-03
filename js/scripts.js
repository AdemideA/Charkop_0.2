//Instantiate map

var map = L.map('mapContainer').setView([19.2150, 72.8245], 15);

//map from mabbox
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRlbWlkZWEiLCJhIjoiY2l6ZGJueHpzMXV0MDJxcW9qYjc2ZnYzYyJ9.3ulYJ3UmEqZn7HHyX-vs7g', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 18,
id: 'mapbox://styles/mapbox/dark-v9',
access_token: 'pk.eyJ1IjoiYWRlbWlkZWEiLCJhIjoiY2l6ZGJueHpzMXV0MDJxcW9qYjc2ZnYzYyJ9.3ulYJ3UmEqZn7HHyX-vs7g'
}).addTo(map);


$.getJSON("data/data.geojson", function(data) { 
	console.log(data)

	var options = {
		style: function(feature) {
			var SectorColour;
			
			if (feature.properties.name == 10) {
				SectorColour = '#b2b2b2';
			}

			return {
		       color: SectorColour,
		        fillColor: SectorColour,
		        weight: 2,
	    	}
		};	
	}



		
	
	L.geoJson(data, options).addTo(map);



});




	



