import React from 'react'

class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombre:"",
            correo:"",
            fecha: new Date()
        }


        this.cambiarNombre=this.cambiarNombre.bind(this)
        this.cambiarCorreo=this.cambiarCorreo.bind(this)
        this.cambiarFecha=this.cambiarFecha.bind(this)
    }

    cambiarNombre(e){
        this.setState({
            nombre:e.target.value
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo:e.target.value
        })
    }
    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }


    //this.setState({})

    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario { this.props.name }</h1>
                <h4> Fecha actual: { Math.ceil(this.state.fecha/1000) }</h4>
                <form id="elemento">
                    <div className="form__item"  >
                        <label>Nombre completo</label>
                        <input type="text" onChange={ this.cambiarNombre } />
                    </div>
                    <div className="form__item">
                        <label>Correo Electronico</label>
                        <input type="email" onChange={ this.cambiarCorreo } />
                    </div>

                    
                </form>-
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        );
        
    }

    // esto se ejecuta despues del render sabiendo que los elementos anteriores ya se encuentran en el DOM
    componentDidMount(){
        let elemento=document.getElementById("elemento")
        
        this.intervaloFecha = setInterval(() =>{
            this.cambiarFecha()
            console.log(new Date());
        },1000)
    }


    // son estados previos al actual de los props y de los states
    componentDidUpdate(prevProps, prevState){
        // console.log(prevProps, prevState);
        // console.log("----------------------------");

    }

    // cosas que hay que eliminar como los intervalos que nunca se pararian aunque salieramos de esta pagina
    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }
}

export default Formulario;