function updateMap(){
L.mapbox.accessToken = 'danielbetteridge.cif7n6i1q0sptsolzat1vewt9';
var map = L.mapbox.map('map', 'mapbox.streets').setView([position.coords.latitude, position.coords.longitude], 9);
};

window.onload = updateMap;