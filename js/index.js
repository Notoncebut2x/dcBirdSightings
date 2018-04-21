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

    // Mapbox JS
    map.on('load', function() {
        map.fitBounds([[-77.138058,38.773677],[-76.763152,39.018477]]);
        map.addSource('birds', {
        "type": "geojson",
        "data": "data/dc.geojson"
        }),

    map.addLayer({
        id: 'birds-heat',
        source: 'birds',
        type: 'heatmap',
        paint: {
            'heatmap-radius': 25
        }
    });
    });
});