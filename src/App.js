import "./styles/styles.scss"
import Banner from './Banner'
import Formulario from './Formulario'
import CourseGrid from "./CourseGrid"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Course from "./Course"
import MainMenu from "./MainMenu"
import Historial from "./Historial"

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={ Banner } />
        <Route path="/cursos/:id"  component={ Course } />
        <Route path="/cursos"  component={ CourseGrid } />
        <Route path="/historial/:valor"  component={ Historial } />
        <Route path="/historial"  component={ Historial } />

        <Route path="/formulario"  component={ ()=> <Formulario name="pagina de contacto" /> } />
        <Route component={ () =>(
          <div className="ed-grid">
            <h1> Error 404 </h1>
          </div>
        ) } />
      </Switch>
    </Router>

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

