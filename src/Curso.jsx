import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Curso({id,image,title,price,profesor}) {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
          <img src={image} alt={title} />
        </Link>
        
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
          {`Profe. : ${profesor}`}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://ed.team">
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
