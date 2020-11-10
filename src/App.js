import "./styles/styles.scss"
import Curso from './Curso'


const cursos=[
  {
    "title":"react desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": "30",
    "profesor": "leonel messi"
  },
  {
    "title":"aws desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/608331fa-c0c6-4f7c-9ad7-470903923179.jpg",
    "price": "10",
    "profesor": "Alexis sanchez"
  },
  {
    "title":"HTML desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png",
    "price": "50",
    "profesor": "Alvaro felipe"
  },
  {
    "title":"unity desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/big/35d81cae-b9b2-4fbd-9329-8bd20e09ef9f.png",
    "price": "30",
    "profesor": "beto quiroga"
  }
]
function App() {
  return (
    <>
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

      {/* como recorrer arrays */}
      <div className="ed-grid m-grid-3">
        {
          cursos.map(c =>
            <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
        }
      </div>
      

    </>

  );
}

export default App;

//Reglas JSX
// toda etiqueta debe cerrarse
// Los componentes deben devolver un solo elemento padre
// apoyarse de los fragments cuando necesito devolver mas elementos
// <Fragment></Fragment> o <></>
// img siempre se cierra
// class : ClassName
// for => htmlFor
// no se utiliza if else o while

