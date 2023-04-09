import React from 'react';
import './style.css';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMapEvents, useMap, Polyline, Circle } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import icon from './icons';
import Routing from './Routing';
import { searchresults1 } from './diraction place';
import { SearchPlace } from './destination/destinationsearchbar';

const center = [16.94158090733596, 74.41697714740613]

export const MapComponent = ({ currposition, startlocation, changeCurrPosition, findplace, changeFindplace, destination, changeDestination, outsidedestination, changeOutsidedestination, innerdetails, changeInnerdetails, placevalue, changePlacevalue, toValue, changeToValue, findplacedetails, changeFindplaceDetails, destdata, changeFromValue, changeStartLocation, changeDestdata }) => {

  // let apikey = 'AIzaSyDhCrPqljgf-LdvVkmY6Z-fiju3kkCB3bU';
  const coord = { lat: 16.94158090733596, lng: 74.41697714740613 };

  // useEffect(() => {
  //   try {
  //     var map = window.L.map('map').setView(coord, 18);
  //     // let mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
  //     window.L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { maxZoom: 30, subdomains: ['mt1', 'mt2', 'mt3'] }).addTo(map);
  //     var marker = window.L.marker(coord).addTo(map);


  //     // var PathFinder = require('geojson-path-finder'), geojson = require('./network.json');
  //     // var pathFinder = new PathFinder(geojson);
  //     // let start = { "geometry": { "type": "LineString", "coordinates": [74.41565752029419, 16.94215917682262] } }
  //     // let end = { "geometry": { "type": "LineString", "coordinates": [74.41740062087774, 16.940583448547727] } }
  //     // var path = pathFinder.findPath(start, end);
  //     // console.log(path)

  //     // map.on('click', function (e) {
  //     //   console.log(e)
  //     //   var newMarker = window.L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  //     //   window.L.Routing.control({
  //     //     waypoints: [
  //     //       window.L.latLng(coord),
  //     //       window.L.latLng(e.latlng.lat, e.latlng.lng)
  //     //     ]
  //     //   }).on('routesfound', function (e) {
  //     //     var routes = e.routes;
  //     //     console.log(e);

  //     //     e.routes[0].coordinates.forEach(function (coord, index) {
  //     //       setTimeout(function () {
  //     //         marker.setLatLng([coord.lat, coord.lng]);
  //     //       }, 100 * index)
  //     //     })

  //     //   }).addTo(map);
  //     // });

  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [])

  // var map = L.map('map').setView([28.2380, 83.9956], 11);
  // mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
  // 	L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

  // const [location, setLocation] = useState([51.505, -0.09]);



  // function LocationMarker() {
  //   // const map = useMap();
  //   // const [position, setPosition] = useState(null);
  //   // const [bbox, setBbox] = useState([]);


  //   // let reqcnt = 0
  //   let lat, long
  //   // marker, circle, 
  //   // , prevlat = 0
  //   // prevlong = 0, accuracy, featureGroup;

  //   function getPosition(e) {
  //     // console.log(position)
  //     lat = e.coords.latitude
  //     long = e.coords.longitude
  //     accuracy = e.coords.accuracy

  //     // if(position.length === 0){
  //     //   setPosition([lat, long])
  //     // }
  //     // console.log("line 120", reqcnt)
  //     // reqcnt++
  //     setCurrPosition([lat, long])

  //     // if (featureGroup) {
  //     //   map.removeLayer(featureGroup)
  //     // }

  //     // if (circle) {
  //     //   map.removeLayer(circle)
  //     // }

  //     // marker = L.marker([lat, long], { icon: icon })
  //     // circle = L.circle([lat, long], { radius: accuracy })

  //     // featureGroup = L.featureGroup([marker, circle]).addTo(map)
  //   }

  //   function err(e) {
  //     console.log(e)
  //   }

  //   if (!navigator.geolocation) {
  //     console.log("Your browser doesn't support geolocation feature!")
  //   } else {
  //     // setInterval(() => {
  //     // console.log(navigator.geolocation)
  //     navigator.geolocation.watchPosition(getPosition, err)
  //     // }, 5000);
  //   };




  //   // map.fitBounds(featureGroup.getBounds())
  //   // useEffect(() => {
  //   //   map.locate().on('locationfound', function (e) {
  //   //     console.log(e.latlng)
  //   //     setPosition(e.latlng);
  //   //     map.flyTo(e.latlng, map.getZoom());
  //   //     const radius = e.accuracy;
  //   //     const circle = L.circle(e.latlng, radius);
  //   //     circle.addTo(map);
  //   //     setBbox(e.bounds.toBBoxString().split(","))
  //   //   })
  //   // }, [map]);

  //   // const map = useMapEvents({
  //   //   click() {
  //   //     map.locate()
  //   //   },
  //   //   locationfound(e) {
  //   //     console.log(e.latlng)
  //   //     setPosition(e.latlng)
  //   //   },
  //   // })

  //   // return position === null ? null : (
  //   //   <Marker position={position} icon={icon}>
  //   //     <Popup>
  //   //       You are here. <br />
  //   //       Map bbox: <br />
  //   //       <b>Southwest lng</b>: {bbox[0]} <br />
  //   //       <b>Southwest lat</b>: {bbox[1]} <br />
  //   //       <b>Northeast lng</b>: {bbox[2]} <br />
  //   //       <b>Northeast lat</b>: {bbox[3]}
  //   //     </Popup>
  //   //   </Marker>
  //   // )
  // }

  // const [position, setPosition] = useState([]);

  // const [currposition, setCurrPosition] = useState([]);
  // const [outsidedestination, setOutsideDestination] = useState([]);
  // const [destination, setDestination] = useState([]);
  // const [innerdetails, setInnerdetails] = useState({ text: "" });
  // const [radius, setRadius] = useState(null);

  useEffect(() => {
    if (currposition.length === 0) {
      navigator.geolocation.watchPosition(
        (position) => {
          changeCurrPosition([
            position.coords.latitude,
            position.coords.longitude,
          ]);
          // setRadius([
          //   position.coords.accuracy
          // ])
          // console.log(position)
        },
        (error) => {
          alert("turn on the location service of your device and refresh the page and allow the location access for this site");

        },
        { enableHighAccuracy: true }
      );
    }
  }, [currposition]);

  // console.log("line 166", innerdetails)
  // const searchresults = [{
  //   name: "Civil Seminar Hall",
  //   line: tocivilseminarhall,
  //   outerposition: [16.94125, 74.41838],
  //   innerdirection: tocivilseminarhall,
  //   text: "on the ground floor --> near the staircase --> on the left passage --> first room on the right side."
  // },
  // {
  //   name: "Civil High",
  //   line: tocivilseminarhallsnext,
  //   outerposition: [16.941202980573777, 74.41837871285696],
  //   innerdirection: tocivilseminarhallsnext,
  //   text: "on the ground floor --> near the staircase --> on the left passage --> second room on the right side."
  // }
  // ]

  // const [value, setValue] = useState('')

  // const onChange = (e) => {
  //   setValue(e.target.value);
  //   if (e.target.value === '') {
  //     // setPosition([])
  //     setInnerdetails({ text: "" })
  //     setDestination([])
  //     setOutsideDestination([])
  //   }
  //   // console.log(focus)
  // }

  // const handleBlur = () => {
  //   setFocus({focus:false});
  //   console.log(focus)
  // }
  let cuurentposmarker = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    // iconUrl: 'https://toppng.com/uploads/preview/in-location-map-icon-navigation-symbol-ma-google-maps-marker-blue-11562916561qaf3tyejum.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  let destmarker = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    // iconUrl: 'https://toppng.com/uploads/preview/in-location-map-icon-navigation-symbol-ma-google-maps-marker-blue-11562916561qaf3tyejum.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });


  const [coords, setCoords] = useState([])
  const changeCoords = (cds) => {
    setCoords(cds)
  }

  const [spinner, setSpinner] = useState(false)
  const toggleSpinner = (t) => {
    setSpinner(t)
  }

  const handleClick = (e) => {
    changeStartLocation(currposition)
    changeDestination(findplacedetails.innerdirection)
    changeOutsidedestination(findplacedetails.outerposition)
    changeInnerdetails({ text: findplacedetails.text })
    changeDestdata(findplacedetails)
  }

  const clearRoute = (e) => {
    changeStartLocation([])
    changeDestination([])
    changeOutsidedestination([])
    changeInnerdetails({ text: "" })
    changeDestdata({})
    setCoords([])
  }

  return (
    <>
      <div className='mapContainer'>
        {/* <div className='direction'>
          <input className='search' placeholder='Search for location' onChange={onChange} value={value} />
          <ul className='list'>
            {searchresults1.filter(item => {
              const searchterm = value.toLowerCase()
              const searchresult = item.name.trim().toLowerCase()
              return searchterm && searchresult.startsWith(searchterm) && searchresult !== searchterm
            }).map((item) => (
              <li key={item.name} onClick={() => {
                setValue(item.name)
                setDestination(item.innerdirection)
                setOutsideDestination(item.outerposition)
                setInnerdetails({ text: item.text })
              }}>{item.name}</li>
            ))}
          </ul>
        </div> */}

        {spinner ?
          <div className="loading" id='loading'>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div> : null}

        <SearchPlace placevalue={placevalue} changePlacevalue={changePlacevalue} findplace={findplace} changeFindplace={changeFindplace} changeFindplaceDetails={changeFindplaceDetails} />

        {destination.length !== 0 && startlocation.length !== 0 ?
          <button className='ClearButton' onClick={clearRoute}>Clear the Route</button> : null}

        <MapContainer
          center={center}
          zoom={18}
          scrollWheelZoom={false}
          className='map'
          id='mapid'
        >
          {/* <TileLayer
            url='https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            maxZoom={50}
            subdomains={['mt1', 'mt2', 'mt3']}
          /> */}
          {destination.length !== 0 && startlocation.length !== 0 ? <Routing startlocation={startlocation} outsidedestination={outsidedestination} destination={destination} innerdetails={innerdetails} coord={coord} changeCoords={changeCoords} toggleSpinner={toggleSpinner} /> : null}

          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Map">
              <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=mySuperSecretToken"
                url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
                // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                maxZoom={20}
                maxNativeZoom={20}
                // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          {/* {console.log(destination)} */}
          {destination.length > 0 && destination !== outsidedestination ? <Marker position={destination[destination.length - 1]} icon={destmarker} className="dest">
            <Popup className='popdest' maxWidth={"fit-content"}>
              <nav className="accordion arrows destdiv">
                <header className="box">
                  <label htmlFor="acc-close" className="box-title">{destdata.name}</label>
                </header>
                {/* {building.floors.map((floor, idf) => ( */}
                <div>
                  <input type="radio" name="accordion" id="details" />
                  <section className="box">
                    <label className="box-title" htmlFor="details">Details</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                      This is {destdata.name}
                      <br />
                      It is located at {destdata.text}
                    </div>
                  </section>
                </div>
                <div>
                  <input type="radio" name="accordion" id="media" />
                  <section className="box">
                    <label className="box-title" htmlFor="media">Media</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                      {destdata.media ?
                        <img src={destdata.media.toString()} /> : null}
                    </div>
                  </section>
                </div>
                <div>
                  <input type="radio" name="accordion" id="floor" />
                  <section className="box">
                    <label className="box-title" htmlFor="floor">Floor Map Design</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                      {destdata.img ?
                        <img src={destdata.img.toString()} /> : null}
                    </div>
                  </section>
                </div>
                <input type="radio" name="accordion" id="acc-close" />
              </nav>
            </Popup>
          </Marker> : null}

          {findplace.length > 0 ? <Marker position={findplace} icon={icon} className="place">
            <Popup className="popplace" maxWidth={"fit-content"}>
              <nav className="accordion arrows placediv">
                <header className="box">
                  <label htmlFor="acc-close" className="box-title">{findplacedetails.name}</label>
                </header>
                <div>
                  <input type="radio" name="accordion" id="details" />
                  <section className="box">
                    <label className="box-title" htmlFor="details">Details</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                      This is {findplacedetails.name}
                      <br />
                      It is located at {findplacedetails.text}
                    </div>
                  </section>
                </div>
                <div>
                  <input type="radio" name="accordion" id="media" />
                  <section className="box">
                    <label className="box-title" htmlFor="media">Media</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                      {findplacedetails.media ?
                        <img src={findplacedetails.media.toString()} /> : null}
                    </div>
                  </section>
                </div>
                <div>
                  <input type="radio" name="accordion" id="floor" />
                  <section className="box">
                    <label className="box-title" htmlFor="floor">Floor Map Design</label>
                    <label className="box-close" htmlFor="acc-close"></label>
                    <div className="box-content">
                      {findplacedetails.img ?
                        <img src={findplacedetails.img.toString()} /> : null}
                    </div>
                  </section>
                  {destination.length !== 0 && startlocation.length !== 0 ?
                    <button className='DirectButton' onClick={clearRoute}>Clear Route</button>
                    :
                    <button className='DirectButton' onClick={handleClick}>Get Direction</button>
                  }
                </div>
                <input type="radio" name="accordion" id="acc-close" />
              </nav>
            </Popup>
          </Marker> : null}

          {/* {console.log(coord)} */}
          {coords.length > 0 ?
            (<Polyline color='red' positions={coords}></Polyline>)
            : null}
          {/* <LocationMarker /> */}

          {currposition.length > 0 ?
            (<Circle center={currposition} radius={10}> <Marker position={currposition} icon={cuurentposmarker} /> </Circle>)
            : null}
          {/* {location && <Marker position={location} />} */}
          {/* <Marker position={coord}>
            <Popup>16.945400
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
          {/* {destination && (
            <>
              <Marker position={coord}>
                <Popup>You are here</Popup>
              </Marker>
              <Marker position={destination}>
                <Popup>Your destination</Popup>
              </Marker>
            </>
          )} */}
          {/* {console.log(outsidedestination.length !== 0)} */}
          {/* {outsidedestination.length !== 0 ?  */}
          {/* <Routing /> */}
        </MapContainer>

      </div>
    </>
  )
}
