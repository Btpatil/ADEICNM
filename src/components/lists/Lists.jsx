import React from 'react'
import "./style.css"
// import { Placedetails } from "../placedetails/Placedetails"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "https://aframe.io/releases/0.8.0/aframe.min.js";
// import "./script"
// import "aframe"

export const Lists = () => {
  let data = require("../placedetails/placess.json")
  // data = {buildings}
  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div className='listcont'>
      {/* <div className='title'>
        <h1>Welcome To ANNASAHEB DANGE EDUCATIONAL INSTITUTE</h1>
      </div> */}
      {/* {console.log(data)} */}
      <div className='cards'>
        {data.buldings.map((building, ids) => (

          <nav key={ids} className="accordion arrows">
            <header className="box">
              <label htmlFor="acc-close" className="box-title">{building.name}</label>
            </header>
            {building.floors.map((floor, idf) => (
              <div key={idf}>
                <input type="radio" name="accordion" id={floor.id} />
                <section className="box">
                  <label className="box-title" htmlFor={floor.id}>{floor.floor}</label>
                  <label className="box-close" htmlFor="acc-close"></label>
                  <div key={idf} className="box-content">
                    <Carousel showThumbs={false}>
                      {floor.images.map((image, idi) => (
                        <>
                          <div className="desc" key={idi + 1 * 100}>
                            {image.desc}
                          </div>
                          <div key={idi} className='imgcont'>
                            {image.ts === "yes" ? 
                                  <iframe src={image.img.toString()} allowFullScreen key={idi+1+1000*idi}> </iframe>
                              :
                              <img src={image.img.toString()} alt={image.toString()} key = {idi+1+1000*idi}/>}
                            <p className="legend" key={image.desc}>{image.desc} {idi}</p>
                          </div>
                        </>
                      ))}
                    </Carousel>
                  </div>
                </section>
              </div>
            ))}

            {/* <input type="radio" name="accordion" id="cb2" />
            <section className="box">
              <label className="box-title" htmlFor="cb2">Read me too</label>
              <label className="box-close" htmlFor="acc-close"></label>
              <div className="box-content">Add the className 'arrows' to nav.accordion to add dropdown arrows.</div>
            </section>
            <input type="radio" name="accordion" id="cb3" />
            <section className="box">
              <label className="box-title" htmlFor="cb3">Item 3</label>
              <label className="box-close" htmlFor="acc-close"></label>
              <div className="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
            </section> */}

            <input type="radio" name="accordion" id="acc-close" />
          </nav>
        ))}





      </div>
      {/* <Placedetails /> */}
    </div >
  )
}



{/* {data.buldings.map((building, ids) => (
          <div key={ids} className="card"> */}
{/* {console.log(ids.name)} */ }
{/* <div className="name">
              <h3>name is {building.name}</h3>
            </div>
            <Carousel>
              <div className='imgcont'>
                <img src="https://mui.com/static/images/cards/paella.jpg" alt='sdadjs' />
                <p className="legend">Legend 1</p>
              </div>
              <div className='imgcont'>
                <img src="ER.png" alt='sdadjs' />
                <p className="legend">Legend 1</p>
              </div>
            </Carousel>
          </div>
        ))} */}