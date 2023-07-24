var map = L.map('map', {
    zoomControl: false,
    center: ([41.4823, -71.3103])
}).setView([41.48017786910572, -71.31098397400962], 15);
var icon = L.icon({
    iconUrl: './assets/icon-location.svg',
    iconSize: [66, 88],
    iconAnchor: [33, 88]
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.48017786910572, -71.31098397400962],{icon: icon}).addTo(map);





