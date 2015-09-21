/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.5646056, lng: -74.1468185},
        scrollwheel: false,
        zoom: 12
    });

    var wedding = new google.maps.Marker({
        position: {lat: 40.5515, lng: -74.2050},
        map: map,
        title: "Wedding"
    });

    var weddingContent = '<div style="color:black;"><p>Grand Oaks Country Club<br>'+
                        '200 Huguenot Avenue<br>'+
                        'Staten Island<br>'+
                        'NY 10312<br></div>';

    var weddingInfoWindow = new google.maps.InfoWindow({
        content: weddingContent
    });

    wedding.addListener('click', function() {
        weddingInfoWindow.open(map, wedding);
    });

    var hotel = new google.maps.Marker({
        position: {lat: 40.586489, lng: -74.190545},
        map: map,
        title: "Holiday Inn"
    });

    var hotelContent = '<div style="color:black;"><p>Holiday Inn<br>'+
                        '290 Wild Avenue<br>'+
                        'Staten Island<br>'+
                        'NY 10314</p></div>';

    var hotelInfoWindow = new google.maps.InfoWindow({
        content: hotelContent
    });

    hotel.addListener('click', function() {
        hotelInfoWindow.open(map, hotel);
    });

    var markers = [wedding, hotel];
    var bounds = new google.maps.LatLngBounds();
    
    for(index in markers) {
        bounds.extend(markers[index].position);
    }

    map.fitBounds(bounds);
}
