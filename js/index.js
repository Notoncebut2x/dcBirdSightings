$(document).ready(function() {

    // Mapbox Token
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9yeW5lYWxvbiIsImEiOiJQSkZ2NU9nIn0.8i2jsHIQQBU4lDdv3emAbQ';

    // Loads the Map
    var map = new mapboxgl.Map({
    center: [38.895, -77.036389],
    zoom: 14,
    container: 'map', // container id
    style: 'mapbox://styles/rorynealon/cjen87w0y835b2rmye6p1m57k' // replace this with your style URL
    });

    headers = new Headers({
        'Content-Type': 'text/plain',
        'X-eBirdApiToken': 'dav3luvqimbb'
    });


    var geojson = {
        type: "FeatureCollection",
        features: [],
      };

    var request = new Request('https://ebird.org/ws2.0/data/obs/US-DC/recent', {
        method: 'get', 
        //mode: 'cors', 
        //redirect: 'follow',
        headers: headers,
    });
    

    // Now use it!
    fetch(request).then(function(response) { 
        return response.json()
        .then(data => bird = data);
    }).then(function(bird){
      
      for (i = 0; i < bird.length; i++) {
        geojson.features.push({
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [bird[i].lng, bird[i].lat]
          },
          "properties": {
            "id": bird[i].id,
            "stationName": bird[i].comName,
            "totalDocks": bird[i].speciesCode,
            "station": bird[i].sciName,
            "stAddress1": bird[i].locName,
            "stAddress2": bird[i].howMany,
            "city": bird[i].obsDt,
            "postalCode": bird[i].obsReviewed,
            "testStation": bird[i].obsValid
          }
        });
      }


    // Mapbox JS
    map.on('load', function() {
        map.fitBounds([[-77.138058,38.773677],[-76.763152,39.018477]]);
        map.addSource('geojson', {
        "type": "geojson",
        // "data": "data/dc.geojson"
        "data": geojson

        }),

    map.addLayer({
        id: 'birds-heat',
        source: 'geojson',
        type: 'heatmap',
        paint: {
            'heatmap-radius': 25
        }
    });
    });


      
});
});



