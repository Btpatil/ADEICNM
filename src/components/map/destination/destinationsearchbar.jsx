import React, { useEffect, useState, useRef } from 'react';
import "./style.css";
import { searchresults1 } from '../diraction place';
import { AiOutlineClose } from "react-icons/ai"
import { IconContext } from 'react-icons';
// import './script';

export const SearchPlace = ({ placevalue, changePlacevalue, findplace, changeFindplace, changeFindplaceDetails }) => {

    const [showCross, setShowCorss] = useState(false)

    useEffect(() => {
        if (placevalue !== '') {
            setShowCorss(true)
        }
    }, [])

    const onChange = (e) => {
        changePlacevalue(e.target.value)
        if (e.target.value !== '') setShowCorss(true)
        if (e.target.value === '') {
            changeFindplace([])
            setShowCorss(false)
        }
    }

    const [isInstalled, setIsInstalled] = useState(false);

    // Check if PWA is installed on component mount
    useEffect(() => {
        window.addEventListener('appinstalled', () => {
            setIsInstalled(true);
        });
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstalled(true);
        }
    }, []);

    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    setIsInstalled(true);
                }
                setDeferredPrompt(null);
            });
        }
    };

    const handleClear = () => {
        changePlacevalue('')
        changeFindplace([])
        setShowCorss(false)
    }

    return (
        <>
            <div className='searchplace'>
                <div className="bar">
                    <input className='search' id='srch' placeholder='Search for location' onChange={onChange} value={placevalue} />
                    {showCross &&
                        <IconContext.Provider value={{ style: { position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem', cursor: 'pointer' } }}>
                            <AiOutlineClose onClick={handleClear} />
                        </IconContext.Provider>
                    }
                </div>

                {!isInstalled && deferredPrompt && <button onClick={handleInstallClick}>Install</button>}
                <ul className='list'>
                    {/* {console.log(searchresults1)} */}
                    {searchresults1.filter(item => {
                        const searchterm = placevalue.toLowerCase()
                        const searchresult = item.name.trim().toLowerCase()
                        return searchterm && searchresult.startsWith(searchterm) && searchresult !== searchterm
                    }).map((item) => (
                        <li key={item.name} onClick={() => {
                            changePlacevalue(item.name)
                            changeFindplace(item.innerdirection[item.innerdirection.length - 1])
                            changeFindplaceDetails(item)
                            // setValue(item.name)
                            // setDestination(item.innerdirection)
                            // setOutsideDestination(item.outerposition)
                            // setInnerdetails({ text: item.text })
                        }}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
