import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { makeStyles } from '@material-ui/core/styles';
import { googleMapAPIKey } from '../../config/key';
import { testData } from '../../testData.js';
import { transform } from '../util.js';
const data = transform(testData)
export const Location = (props) => {
  const [activeMarker, setActiveMarker] = useState({});
  const [showingInfoWindow, setShowInfoWindow] = useState(false);

  const useStyles = makeStyles(theme => ({
    map: {
      width: '100%',
      height: '80%'
    }
  }));
  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setShowInfoWindow(true);
  }

  const onMapClicked = () => {
    // TODO: Fix this
    // this is a work around for a really really annoying inforwindow bug on map click 
    return;
  };
  const showMarker = () => {
    return data.map((employee) => {
      return <Marker key={`${employee.uuid}`}
        id={`${employee.uuid}`}
        onClick={onMarkerClick}
        position={{
          lat: employee.coordinateLat,
          lng: employee.coordinateLong
        }}
        icon={{url: employee.pictureThumb, }}
        name={`${employee.firstName} ${employee.lastName}`}
        email={`${employee.email}`}
        phone={`${employee.phone}`}
        address={`${employee.address}, ${employee.city} ${employee.state}`}
        timezone={`${employee.timezone}`}
        />

    });
  }
  return (
    <Map
      google={props.google}
      zoom={5}
      style={useStyles.map}
      initialCenter={{
        lat: 35.12,
        lng: -80.62
      }}
      onClick={onMapClicked}
    >
      {showMarker()}
      <InfoWindow
        visible={showingInfoWindow}
        marker={activeMarker}>
        <div>
          <h3>{`${activeMarker.name}`}</h3>
          <h3>{`${activeMarker.address}`}</h3>
          <h3>{`${activeMarker.email}`}</h3>
          <h3>{`${activeMarker.phone}`}</h3>
          <h3>{`Timezone: ${activeMarker.timezone}`}</h3>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: googleMapAPIKey
})(Location);