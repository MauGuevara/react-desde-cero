import React from "react";
import PropTypes from 'prop-types'


function Curso({image,title,price,profesor}) {
  return (
    <article class="card">
      <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
      </div>
      <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div class="s-main-center">
          {`Profe. : ${profesor}`}
        </div>
        <div class="s-main-center">
          <a class="button--ghost-alert button--tiny" href="#">
            {`$ ${price}`}
          </a>
        </div>
      </div>
    </article>
  );
}

// como declarar propiedades con defecto en caso de que no se le pase 

Curso.propTypes={
  title:PropTypes.string,
  image:PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
}

Curso.defaultProps={
  title: "no se encontro titulo",
  image: "https://us.123rf.com/450wm/kasto/kasto1511/kasto151100030/47504979-puente-de-brooklyn-y-horizonte-de-la-ciudad-de-nueva-york-manhattan-en-la-oscuridad-con-los-rascacie.jpg?ver=6",
  price: "--",
  profesor: "no hay profesor"
}

export default Curso;
