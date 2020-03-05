import React from 'react'
//import PropTypes from 'prop-types'
const BASE_URL = "https://www.google.com/maps/embed/v1/place?key=";
const GKEY = "AIzaSyDI_zdFaLx4vnV2Ypd05BqGnBV_nM_a1Jk";
const TARGET = "Gubin,Polska";

const Gmap = () => { 
    
    return(
    <section className="section">
          <div className="container">
            <div className="content">
              <h3>Jak nas znaleźć:</h3>
              <p>ul. Przykładowa 1</p>
              <p>00-000 Gubin</p>
              <iframe className="gmap" title="mapa dojazdu"
                src={`${BASE_URL}${GKEY}&q=${TARGET}` }allowfullscreen>
              </iframe>
            </div>
          </div>
        </section>
    )
}
export default Gmap;