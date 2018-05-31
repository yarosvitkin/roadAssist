// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 32.109333,
    lng: 34.855499
  },
  zoom: 10
});


function initMap() {
  console.log('function initmap started');
   // Try HTML5 geolocation.
     if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      console.log('Geoposition finded');

      //Adding marker with animation

      addMarker({
        coordinates:pos,
        info: '<h4>You are here</h4>',
        image: './img/markers/drawable-ldpi/car.png'
    });

      // for (var i = 0; i < markers.length; i++) {
      //   addMarker(markers[i]);
      //   console.log(markers[i]);
      // }



      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });

  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}

function addMarker(properties) {
  console.log('In function addMarker');
  var marker = new google.maps.Marker({
    position: properties.coordinates,
    map: map,
    animation: google.maps.Animation.DROP});
  if (properties.info) {
    var infoWindow = new google.maps.InfoWindow({
      content: properties.info
    });
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });

  }
  if (properties.image) {
    marker.setIcon(properties.image);

  }
}
initMap();




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
    ? 'Error: The Geolocation service failed.'
    : 'Error: Your browser doesn\'t support geolocation.');
}
