(function($) {
    "use strict";

    function initialize() {
        // Coordenadas de Carmen de Viboral, Antioquia, Colombia
        var mapOptions = {
            zoom: 13,
            scrollwheel: false,
            center: new google.maps.LatLng(6.0814, -75.3362)
        };

        var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

        var marker = new google.maps.Marker({
            position: map.getCenter(),
            animation: google.maps.Animation.BOUNCE,
            map: map,
            title: 'Carmelina - Carmen de Viboral'
        });

        // Estilos personalizados del mapa adaptados a Carmelina
        var styles = [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#7b1fa2"}]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#fef5f8"}]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 45}
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {"color": "#e8d5e8"},
                    {"visibility": "on"}
                ]
            }
        ];

        map.setOptions({styles: styles});

        // InfoWindow para el marcador
        var infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding: 10px; text-align: center;">' +
                     '<h4 style="color: #e91e63; margin-bottom: 5px;">🌸 Carmelina 🌸</h4>' +
                     '<p style="margin: 5px 0; color: #666;">Carmen de Viboral, Antioquia</p>' +
                     '<p style="margin: 5px 0; color: #666;">Colombia</p>' +
                     '</div>'
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

})(jQuery);