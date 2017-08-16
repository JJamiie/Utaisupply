function initMap() {
    var uluru = {
        lat: 13.793172219614723,
        lng: 99.9267553165555
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(document).ready(function() {
  $('.parallax').parallax();
});
