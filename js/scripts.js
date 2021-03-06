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

			if (feature.properties.ID == 1) {
				SectorColour = '#b3e2cd';
			}

			if (feature.properties.ID == 2) {
				SectorColour = '#fdcdac';
			}

			if (feature.properties.ID == 3) {
				SectorColour = '#cbd5e8';
			}

			if (feature.properties.ID == 4) {
				SectorColour = '#f4cae4';
			}

			if (feature.properties.ID == 5) {
				SectorColour = '#e6f5c9';
			}

			if (feature.properties.ID == 6) {
				SectorColour = '#fff2ae';
			}

			if (feature.properties.ID == 7) {
				SectorColour = '#f1e2cc';
			}

			return {
		      	color: SectorColour,
		        fillColor: SectorColour,
		        fillopacity: 1,
		        weight: 2,
	    	}
		},	
	// }
	
	
		onEachFeature: function (feature, layer) {
			layer.on('click', function(){
				$('#sidebar h2').text(feature.properties.Sector);
				$('#sidebar h3').text(feature.properties.Observations)	
			})
		}

		// onEachFeature: function (feature, layer) {
		// 	layer.on('click', function(){
		// 		$('#sidebar h3').text(feature.properties.Observations)	
		// 	})
		// }		
	
	}

	// function onEachFeature (feature, layer) {
 //       layer.bindPopup(feature.properties.Sector);
 // 	}
 
 
 	
	L.geoJson(data, options).addTo(map);

});




	



