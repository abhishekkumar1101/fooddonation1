document.addEventListener("DOMContentLoaded", () => {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to add a marker dynamically
    function addMarker(lat, lng, popupText) {
        var marker = L.marker([lat, lng]).addTo(map);
        if (popupText) {
            marker.bindPopup(popupText).openPopup();
        }
    }

    // Handle form submission
    document.getElementById('marker-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var lat = parseFloat(document.getElementById('latitude').value);
        var lng = parseFloat(document.getElementById('longitude').value);
        var popupText = document.getElementById('popup').value;

        if (!isNaN(lat) && !isNaN(lng)) {
            addMarker(lat, lng, popupText);
        } else {
            alert('Please enter valid latitude and longitude values.');
        }
    });
});
