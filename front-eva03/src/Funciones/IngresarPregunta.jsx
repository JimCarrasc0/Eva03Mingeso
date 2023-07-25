import { useState } from "react";
import axios from "axios";

function AgregarPregunta ({ setShowMenu }) {
    const [dificultad, setDificultad] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [showQuestion, setShowQuestion] = useState(true);


    
    const handleSubmit = (e) => {
        e.preventDefault();

        const question = {
          dificultad: dificultad,
          pregunta: pregunta,
          respuesta: respuesta
        };
    
        axios.post('http://localhost:8080/question/nueva-pregunta', question)
            .then((response) => {
                console.log('Respuesta del backend:', response.data);
                setDificultad('');
                setPregunta('');
                setRespuesta('');
                setShowMenu(true);
                setShowQuestion(false);
            })
          .catch((error) => {
            console.error('Error al guardar la pregunta', error);
          });
      }
    

    return(
        <div>{showQuestion && (
        <div className="cuestionario">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="dificultad">Dificultad</label>
                    <select
                    className="form-control"
                    id="dificultad"
                    value={dificultad}
                    onChange={(e) => setDificultad(e.target.value)}
                    >
                    <option value="" disabled>Selecciona la dificultad de tu pregunta</option>
                    <option value="básico">Básico</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="pregunta">Pregunta</label>
                    <textarea className="form-control" id="pregunta" rows="3" placeholder="def funcion(num):
                    return num**2" value={pregunta} onChange={(e) => setPregunta(e.target.value)}></textarea>
                </div>
                <div class="form-group">
                    <label for="respuesta">Respuesta</label>
                    <input
                    type="text"
                    className="form-control"
                    id="respuesta"
                    placeholder="Ingrese la respuesta del ejercicio"
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                    />
                </div>

                <div className='button-container'>
                    <button className='btn btn-success' type="submit">Guardar</button>
                </div>
            </form>    
        </div>
        )}
        </div>
    );
}

export default AgregarPregunta;