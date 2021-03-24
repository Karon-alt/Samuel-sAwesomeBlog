// Initialize and add the map
function initMap() {
    // The location of Idaho
    const uluru = { lat: 44.0682, lng: -114.7420 }
        // The map, centered at idaho
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}