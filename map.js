
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 22.359163, lng: 91.815590},
        zoom: 15
      });
      // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: {lat: 22.358738, lng: 91.816594}, map: map, title: "My Place"});
    }

  