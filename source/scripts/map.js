import L from 'leaflet';
const map = L.map('leaflet-map')
  .setView({
    lat: 59.968137,
    lng: 30.316272,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
  {
    lat: 59.968137,
    lng: 30.316272,
  },
);

marker.addTo(map);
