import L from 'leaflet';
const map = L.map('leaflet-map')
  .setView({
    lat: 59.96833875898696,
    lng: 30.317468147345455,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const customIcon = L.icon({
  iconUrl: '/images/map-pin.png',
  iconSize: [38, 50],
  iconAnchor: [16, 32],
});

const marker = L.marker(
  {
    lat: 59.96833875898696,
    lng: 30.317468147345455,
  },
  { icon: customIcon }
);
map.panBy([-10, -10]);
marker.addTo(map);
