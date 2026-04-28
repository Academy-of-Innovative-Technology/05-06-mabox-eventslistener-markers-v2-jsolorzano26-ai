mapboxgl.accessToken = 'pk.eyJ1IjoianNvbG9yemFubzI2IiwiYSI6ImNtbzFyZzJlbTBtYTEyb3B1dzJ0aWI4cHMifQ.hDQrk0kII7YUCE3jE0NOLQ';


const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/streets-v12',
   center: [-74.0300, 40.7430], // Hoboken aprox
   zoom: 12
});


// Controles de zoom y rotación
map.addControl(new mapboxgl.NavigationControl());


// Geolocalización
map.addControl(new mapboxgl.GeolocateControl({
   positionOptions: {
       enableHighAccuracy: true
   },
   trackUserLocation: true
}));


// Ensure Mapbox GL JS is available and initialize after window load
window.addEventListener('load', () => {
   if (typeof mapboxgl === 'undefined') {
       console.error('Mapbox GL JS not found. Is the Mapbox script included?');
       const el = document.getElementById('map');
       if (el) el.innerText = 'Error: Mapbox failed to load.';
       return;
   }


   mapboxgl.accessToken = 'pk.eyJ1IjoianNvbG9yemFubzI2IiwiYSI6ImNtbzFyZzJlbTBtYTEyb3B1dzJ0aWI4cHMifQ.hDQrk0kII7YUCE3jE0NOLQ';


   try {
       const map = new mapboxgl.Map({
           container: 'map',
           style: 'mapbox://styles/mapbox/streets-v12',
           center: [-74.0300, 40.7430], // Hoboken approx
           zoom: 12
       });


       // Controles de zoom y rotación
       map.addControl(new mapboxgl.NavigationControl());


       // Geolocalización
       map.addControl(new mapboxgl.GeolocateControl({
           positionOptions: {
               enableHighAccuracy: true
           },
           trackUserLocation: true
       }));


       // Marcador inicial con popup
       new mapboxgl.Marker()
           .setLngLat([-74.0300, 40.7430])
           .setPopup(new mapboxgl.Popup().setText('Ubicación inicial'))
           .addTo(map);


       // Evento click para agregar marcadores
       map.on('click', (e) => {
           new mapboxgl.Marker()
               .setLngLat(e.lngLat)
               .addTo(map);
       });


   } catch (err) {
       console.error('Error initializing map:', err);
       const el = document.getElementById('map');
       if (el) el.innerText = 'Error initializing map. See console for details.';
   }
});


