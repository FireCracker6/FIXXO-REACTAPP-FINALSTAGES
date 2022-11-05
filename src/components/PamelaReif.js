import React from 'react'
import PropTypes from 'prop-types'
import WhiteButton from './WhiteButton'
import BlackButton from './BlackButton'
function PamelaReif(props) {
  return (
    // <!-- Pamela Reifs section -->
    
         <div className="container"> 
         <section className="pamela-banner " >
              <div className="pamela-flash"> 
                  <div className="item-1">
                  <div className="pamela-text">
                      <h2>
                      <strong >Pamela Reif's<br/>Top Picks</strong>

                      </h2>
                     
                      <BlackButton link="/productdetails" text="SHOP NOW" />
                  </div>
                  <div className="pamela-img"></div>
                  </div>
                  <div className="item-2">
                      <div className="prod-text">
                          <h2>
                             <strong>Let's Be <br/>Conscious</strong>
                          </h2>
                         <div className='buttons'>
                          <WhiteButton link="/productdetails"  text="FLASH SALE" />
                          </div>
                      </div>
                  </div>
              </div>
              </section>
      </div> 

    
  )
}

PamelaReif.propTypes = {}

export default PamelaReif
