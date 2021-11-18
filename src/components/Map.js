import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBw-ClvmtjD8fsYQ-KwHwhD1LyVNTvVlCU' }}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >

      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 43.3707,
    lng: 20.1544
  },
  zoom: 6
};

export default Map;
