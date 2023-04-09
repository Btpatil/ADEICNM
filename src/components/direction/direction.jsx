import React, {useEffect, useState}from 'react'
import "./style.css"
import { searchresults1 } from '../map/diraction place'
import { AiOutlineClose } from "react-icons/ai"
import { IconContext } from 'react-icons';

export const Direction = ({ currposition, startlocation, changeStartLocation, fromValue, changeFromValue, toValue, changeToValue, destination, changeDestination, outsidedestination, changeOutsidedestination, innerdetails, changeInnerdetails, changePage, changeDestdata }) => {

    const [showCross1, setShowCorss1] = useState(false)
    const [showCross2, setShowCorss2] = useState(false)

    useEffect(()=> {
        if (fromValue !== '') {
            setShowCorss1(true)
        }
        if (toValue !== '') {
            setShowCorss2(true)
        }        
    }, [])

    const onFromChange = (e) => {
        changeFromValue(e.target.value)
        if (e.target.value !== '') setShowCorss1(true)
        // // setValue(e.target.value);
        if (e.target.value === '') {
            // setPosition([])
            //   changeInnerdetails({ text: "" })
            //   changeDestination([])
            //   changeOutsidedestination([])
            changeStartLocation([])
            setShowCorss1(false)
        }
        // console.log(focus)
    }

    const onToChange = (e) => {
        changeToValue(e.target.value)
        if (e.target.value !== '') setShowCorss2(true)

        if (e.target.value === '') {
            // setPosition([])
            changeInnerdetails({ text: "" })
            changeDestination([])
            changeOutsidedestination([])
            setShowCorss2(false)
        }
    }

    const handlefromFocus = (e) => {
        let list = document.querySelector(".from .list")
        list.style.display = 'block'
    }

    const handlefromBlur = (e) => {
        let list = document.querySelector(".from .list")
        setTimeout(() => {
            list.style.display = 'none'
        }, 500)
    }

    const handletoFocus = (e) => {
        let list = document.querySelector(".to .list")
        list.style.display = 'block'
    }

    const handletoBlur = (e) => {
        let list = document.querySelector(".to .list")
        setTimeout(() => {
            list.style.display = 'none'
        }, 500)
    }

    const handleClick = (e) => {
        if (destination.length > 0 && startlocation.length > 0) {
            changePage("Home")
        }
    }

    const handleClear1 = () => {
        changeFromValue('')
        changeStartLocation([])
        setShowCorss1(false)
    }

    const handleClear2 = () => {
        changeToValue('')
        changeInnerdetails({ text: "" })
        changeDestination([])
        changeOutsidedestination([])
        setShowCorss2(false)
    }

    return (
        <div className='direction'>
            <div className="from" onFocus={handlefromFocus} onBlur={handlefromBlur}>
                <input className='fromsearch' placeholder='Starting Location' onChange={onFromChange} value={fromValue} />
                {showCross1 &&
                    <IconContext.Provider value={{ style: { position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem', cursor: 'pointer' } }}>
                        <AiOutlineClose onClick={handleClear1} />
                    </IconContext.Provider>
                }
                <ul className='list'>
                    {/* {console.log(searchresults1)} */}
                    {/* <li onClick={() => {
                        changeStartLocation(currposition)
                        changeFromValue("Your Current Location")
                        console.log("thsi hf")
                    }}>Your Current Location</li> */}
                    {searchresults1.filter(item => {
                        const searchterm = fromValue.toLowerCase()
                        const searchresult = item.name.trim().toLowerCase()
                        return searchterm && searchresult.startsWith(searchterm) && searchresult !== searchterm || item.name === "Your Current Location"
                    }).map((item) => (
                        <li key={item.name} onClick={() => {
                            if (item.name === "Your Current Location") {
                                changeStartLocation(currposition)
                                changeFromValue(item.name)
                            } else {
                                changeStartLocation(item.outerposition)
                                changeFromValue(item.name)
                            }
                            // changeDestination(item.innerdirection)
                            // changeOutsidedestination(item.outerposition)
                            // changeInnerdetails({ text: item.text })
                            // setValue(item.name)
                            // setDestination(item.innerdirection)
                            // setOutsideDestination(item.outerposition)
                            // setInnerdetails({ text: item.text })
                        }}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className="to" onFocus={handletoFocus} onBlur={handletoBlur}>
                <input className='tosearch' placeholder='Destination' onChange={onToChange} value={toValue} />
                {showCross2 &&
                    <IconContext.Provider value={{ style: { position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem', cursor: 'pointer' } }}>
                        <AiOutlineClose onClick={handleClear2} />
                    </IconContext.Provider>
                }
                <ul className='list'>
                    {/* {console.log(searchresults1)} */}
                    {/* <li onClick={() => {
                        changeStartLocation(currposition)
                        // changeToValue(item.name)
                    }}>Your Current Location</li> */}
                    {searchresults1.filter(item => {
                        const searchterm = toValue.toLowerCase()
                        const searchresult = item.name.trim().toLowerCase()
                        return searchterm && searchresult.startsWith(searchterm) && searchresult !== searchterm || item.name === "Your Current Location"
                    }).map((item) => (
                        <li key={item.name} onClick={() => {
                            if (item.name === "Your Current Location") {
                                changeToValue(item.name)
                                changeDestination(currposition)
                                changeOutsidedestination(currposition)
                                changeInnerdetails({ text: "" })
                            } else {
                                changeToValue(item.name)
                                changeDestination(item.innerdirection)
                                changeOutsidedestination(item.outerposition)
                                changeInnerdetails({ text: item.text })
                                changeDestdata(item)
                            }
                            // setValue(item.name)
                            // setDestination(item.innerdirection)
                            // setOutsideDestination(item.outerposition)
                            // setInnerdetails({ text: item.text })
                        }}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button className='DirectButton' onClick={handleClick}>Get Direction</button>
            </div>
        </div>
    )
}
