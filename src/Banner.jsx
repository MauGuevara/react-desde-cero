import React from 'react'

function Banner(){
    return(
        <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="banner" src="https://i.pinimg.com/originals/56/fb/7c/56fb7c933e1a0b8dc6705982eb372b4d.jpg" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="https://ux.ed.team/banner.html" className="button">Botón del banner</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;