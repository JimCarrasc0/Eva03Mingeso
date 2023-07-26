import '../App.css'
import { useState } from "react"
import QuestionBasic from "./PreguntasBasicas";
import QuestionMedium from "./PreguntasIntermedias";
import QuestionHigh from "./PreguntasAvanzadas";
import AgregarPregunta from './IngresarPregunta';
import Navbar from './Navbar';
import logopython from './Python-logo.svg';


function Menu() {
    const [selectedView, setSelectedView] = useState("home");
    const [showMenu, setShowMenu] = useState(true);

    const handleMenuClick = (option) => {
        setSelectedView(option);
        setShowMenu(false);
      };
    
    const renderSelectedView = () => {
        switch (selectedView) {
          case "basic":
            return <QuestionBasic setShowMenu={setShowMenu}/>;
          case "mid":
            return <QuestionMedium setShowMenu={setShowMenu}/>;
          case "hi":
            return <QuestionHigh setShowMenu={setShowMenu}/>;
          case "agregar":
            return <AgregarPregunta setShowMenu={setShowMenu}/>;
          default:
            return null;
        }
      };

      return(
        <div>
          <Navbar/>
          <div align='center'>
              {showMenu && (
              <div>
                <h1 className='title-bold' align='center'>Ez-PyZ</h1>
                <p className='p-thin' align='center'>Plataforma de aprendizaje de python</p>
                <div className='button-container'>
                  <button className='btn btn-primary' onClick={() => handleMenuClick("basic")}>Cuestionario Básico</button>
                  <button className='btn btn-primary' onClick={() => handleMenuClick("mid")}>Cuestionario Intermedio</button>
                  <button className='btn btn-primary' onClick={() => handleMenuClick("hi")}>Cuestionario Avanzado</button>
                  <button className='btn btn-primary' onClick={() => handleMenuClick("agregar")}>Agregar Pregunta</button>
                </div>
              </div>
              
              )}
              {renderSelectedView()}
          </div>
        </div>
      )
    }

export default Menu;