import * as React from 'react'
import styled from 'styled-components/macro'

interface IProps {
  setSelectedState: (s: string) => void
}

const LiaisonMap: React.FC<IProps> = ({ setSelectedState }) => {
  React.useEffect(() => {
    loadGoogleMaps()
  }, [])

  const createGoogleScript = () => {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_KEY
    }&callback=initMap`
    googleScript.async = true
    googleScript.defer = true
    googleScript.type = 'text/javascript'
    document.body.appendChild(googleScript)
  }

  const initMap = () => {
    const map: google.maps.Map = new (window as any).google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.8382828927639, lng: -98.67535077253888 },
      styles: mapStyles,
      zoom: 4.3,
    })
    const geocoder = new google.maps.Geocoder()
    map.addListener('click', e => {
      geocoder.geocode({ location: e.latLng }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[0] && results[results.length - 2]) {
            const stateObject = results[results.length - 2]
            const stateAbbr = stateObject.address_components[0].short_name

            map.fitBounds(stateObject.geometry.bounds)
            map.panTo(stateObject.geometry.location)
            setSelectedState(stateAbbr)
          }
        }
      })
    })
  }

  const loadGoogleMaps = () => {
    createGoogleScript()
    ;(window as any).initMap = initMap
  }

  return <Map id="map" />
}

export default LiaisonMap

const Map = styled.div`
  margin: 6rem 0;
  height: 50rem;
  width: 100%;
`

const mapStyles = [
  {
    featureType: 'road',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
]
