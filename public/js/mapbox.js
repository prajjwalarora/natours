/* eslint-disable*/
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoid2VidGVzdC1wYSIsImEiOiJja2U4bDIxamoxbnViMnJsNnpmYWNlbG8zIn0.WCCUuSN7nebAujC9T6cZMA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/webtest-pa/cke8o32sc3mq91anzo60xdem4',
    scrollZoom: false
    //   center: [-118.113492, 34.111745],
    //   zoom: 4,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
