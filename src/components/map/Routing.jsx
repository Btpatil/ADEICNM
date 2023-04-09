import { useEffect, useRef, memo } from 'react'
import { createControlComponent } from '@react-leaflet/core'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import icon from "./icons"
import "./style.css"

const routeLayer = ({ startlocation, outsidedestination, destination, innerdetails, coord, changeCoords, toggleSpinner }) => {
  let time = 1000000
  let endIcon = new L.Icon({
    // iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let sstartIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    // iconUrl: 'https://toppng.com/uploads/preview/in-location-map-icon-navigation-symbol-ma-google-maps-marker-blue-11562916561qaf3tyejum.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  // const map = useMap()
  // console.log("line 7", currposition, destination, innerdetails)
  // console.log(startlocation)
  // useEffect(() => {
  // console.log("line 16")4
  console.log("line 34", destination, outsidedestination, innerdetails)

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(startlocation),
      L.latLng(outsidedestination)
      // L.latLng(16.94108479249654, 74.41848651781555),
      // L.latLng(16.94199,74.41571)
    ],
    createMarker: function (i, wp, nWps) {
      // console.log(i);
      if (i === 0) {
        return L.marker(wp.latLng, {
          icon: sstartIcon,
          draggable: true
        });
      }
      else {
        return L.marker(wp.latLng, {
          icon: endIcon,
          // draggable: true
        });
      }
    },
    lineOptions: {
      styles: [{ color: "blue", weight: 4 }]
    },
    addWaypoints: false,
    routeWhileDragging: false,
    showAlternatives: false
  }).on("routingstart", (e) => {
    toggleSpinner(true)
    setTimeout(() => {
      toggleSpinner(false)
    }, time);
  }).on("routesfound", (e) => {
    console.log(destination === outsidedestination, destination, outsidedestination, innerdetails)
    if (destination !== outsidedestination) {
      destination.forEach(ele => {
        e.routes[0].coordinates.push({ lat: ele[0], lng: ele[1] })
      });
    }
    let cdds = []
    e.routes[0].coordinates.forEach(item => {
      cdds.push([item.lat, item.lng])
    })
    changeCoords(cdds)
    // changeCoords(destination)
    // e.routes[0].waypoints[1].latLng.lat = destination[destination.length - 1][0]
    // e.routes[0].waypoints[1].latLng.lng = destination[destination.length - 1][1]

    // e.waypoints[1].latLng.lat = destination[destination.length - 1][0]
    // e.waypoints[1].latLng.lng = destination[destination.length - 1][1]

    // console.log(e)
    let length = e.routes[0].instructions.length
    let newtext = innerdetails.text
    e.routes[0].instructions[length - 1].text = newtext
    // console.log(e.routes[0].instructions[length - 1])
    time = 1000
    toggleSpinner(false)
  }).on("routingerror", (e) => {
    console.log(e)
    let length = e.routes[0].instructions.length
    let newtext = innerdetails.text
    e.routes[0].instructions[length - 1].text = newtext
  })
  // console.log("line 36", instance)
  // .addTo(map)

  //   if(instance) {
  //     map.removeLayer(instance)}
  // }, [destination])
  return instance
}

L.Marker.prototype.options.icon = icon
const Routing = createControlComponent(routeLayer)
export default Routing