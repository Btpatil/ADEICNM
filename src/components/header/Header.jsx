// import React, { memo } from "react";
import "./style.css";
import { AiFillHome } from "react-icons/ai"
import { MdAltRoute } from "react-icons/md"
import { MdPlace } from "react-icons/md"
import { MdOutlineFeedback } from "react-icons/md"
import { useEffect } from "react";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";

// import React from 'react'

export const Header = ({ changePage, page }) => {

  const handleClick = (e, t) => {
    let links = document.getElementsByClassName("link")
    Array.from(links).forEach(element => {
      element.classList.remove("active")
    });
    e.currentTarget.classList.add("active")

    changePage(t)
    // console.log(t)
    // links.forEach(link => 
    // )
  }

  useEffect(() => {
    let links = document.getElementsByClassName("link")
    if (page === 'Home') {
      Array.from(links).forEach((ele, id) => {
        ele.classList.remove("active")
        if (id === 0) {
          ele.classList.add("active")
        }
      });
    }
  }, [page])

  return (
    <>
      <nav className="main-nav">
        <div className="link home active" onClick={e => handleClick(e, "Home")}>
          <AiFillHome className="icon" />
          <p>home</p>
        </div>
        <div className="link directions" onClick={e => handleClick(e, "Directions")}>
          <MdAltRoute className="icon" />
          <p>directions</p>
        </div>
        <div className="link places" onClick={e => handleClick(e, "Places")}>
          <MdPlace className="icon" />
          <p>places</p>
        </div>
        <div className="link feed" onClick={e => handleClick(e, "Feed")}>
          <MdOutlineFeedback className="icon" />
          <p>Feedback</p>
        </div>
        {/* <div className="logo">
            ADEI Campus Navigation
        </div> */}
        {/* <div className="search" >
          <input id="search" type="search" placeholder="Search..." autoFocus required />
          <button type="submit">Go</button>
        </div> */}
      </nav>
    </>
  )
}
