import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
}


class GoogleMapLoad extends Component {
    render() {
       return (
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyDI_zdFaLx4vnV2Ypd05BqGnBV_nM_a1J"
        >
          <GoogleMap
            id='example-map'
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMap>
        </LoadScript>
       )
    }
  }
export default GoogleMapLoad
