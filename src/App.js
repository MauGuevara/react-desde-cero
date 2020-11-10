import "./styles/styles.scss"
import Curso from './Curso'
function App() {
  return (
    <>
    <div className="main-banner img-container" id="main-banner">
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
    <Curso></Curso>
    <Curso></Curso>
    <Curso></Curso>
    <Curso></Curso>
    <Curso></Curso>

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

