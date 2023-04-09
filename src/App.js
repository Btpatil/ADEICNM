import React, {useState, useMemo} from 'react';

import './app.css';
import {Header} from './components/header/Header';
import {MapComponent} from './components/map/Map';
import {Lists} from './components/lists/Lists';
import { Direction } from './components/direction/direction';
import { Feedback } from './components/Feedback/Feedback';
// import { Map } from './components/map/Map';
// import placedetails from './components/placedetails/placedetails';

const App = () => {
    const [page , setPage] = useState("Home");
    const [currposition, setCurrPosition] = useState([]);
    const [findplace, setFindplace] = useState([]);
    const [findplacedetails, setFindplacedetails] = useState({})
    const [startlocation, setStartlocation] = useState([]);
    const [destination, setDestination] = useState([]);

    const [outsidedestination, setOutsideDestination] = useState([]);
    const [innerdetails, setInnerdetails] = useState({ text: "" });

    // const [radius, setRadius] = useState(null);
    const [placevalue, setPlacevalue] = useState('');
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const changePage = (page) => {
        setPage(page)
    }

    const changeCurrPosition = (pos) => {
        setCurrPosition(pos)
    }

    const changeFindplace = (pos) => {
        setFindplace(pos)
    }

    const changeFindplaceDetails = (data) => {
        setFindplacedetails(data)
    }

    const changeStartLocation = (pos) => {
        setStartlocation(pos)
    }

    const changeDestination = (dest) => {
        setDestination(dest)
    }

    const [destdata, setDestdata] = useState({})

    const changeDestdata = (data) => {
      setDestdata(data)
    }

    const changeOutsidedestination = (odest) => {
        setOutsideDestination(odest)
    }

    const changeInnerdetails = (innerpathtext) => {
        setInnerdetails(innerpathtext)
    }

    const changePlacevalue = (text) => {
        setPlacevalue(text)
    }

    const changeFromValue = (text) => {
        setFromValue(text)
    }

    const changeToValue = (text) => {
        setToValue(text)
    }

    return (
        <React.Fragment>
            {/* <Header/> */}
            <div className='container'>
                {page === "Home" && <MapComponent currposition={currposition} changeCurrPosition={changeCurrPosition} findplace={findplace} changeFindplace={changeFindplace} startlocation={startlocation} destination={destination} changeDestination={changeDestination} outsidedestination={outsidedestination} changeOutsidedestination={changeOutsidedestination} innerdetails={innerdetails} changeInnerdetails={changeInnerdetails} toValue={toValue} changeToValue={changeToValue} placevalue={placevalue} changePlacevalue={changePlacevalue} findplacedetails={findplacedetails} changeFindplaceDetails={changeFindplaceDetails} destdata={destdata} changeFromValue={changeFromValue} changeStartLocation={changeStartLocation} changeDestdata={changeDestdata} />}

                {page === "Places" && <Lists />}

                {page === "Directions" && <Direction currposition={currposition} startlocation={startlocation} changeStartLocation={changeStartLocation} destination={destination} changeDestination={changeDestination} outsidedestination={outsidedestination} changeOutsidedestination={changeOutsidedestination} innerdetails={innerdetails} changeInnerdetails={changeInnerdetails} fromValue={fromValue}  changeFromValue={changeFromValue} toValue={toValue} changeToValue={changeToValue} changePage={changePage} changeDestdata={changeDestdata} />}

                {page === "Feed" && <Feedback />}
            </div>
            {/* <div className='navbar'> */}
                <Header changePage={changePage} page={page}/>
            {/* </div> */}
            {/* <CssBaseline />
            <Header />
            <Grid container spaceing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <Lists/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map/>
                </Grid>
            </Grid> */}
        </React.Fragment>
    );
}

export default App