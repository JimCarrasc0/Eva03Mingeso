import { CodeBlock, monokai } from "react-code-blocks";
import axios from 'axios';
import { useEffect, useState } from 'react';
function QuestionHigh ({ setShowMenu }) {
    const [questions, setQuestions] = useState([]);
    const [userResponses, setUserResponses] = useState({});
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [showQuestion, setShowQuestion] = useState(true);
  
    useEffect(() => {
      axios
        .get("http://localhost:8080/question/avanzado")
        .then((response) => {
          const initialResponses = response.data.reduce(
            (acc, question) => ({ ...acc, [question.id]: "" }),
            {}
          );
          setUserResponses(initialResponses);
          setQuestions(response.data);
        })
        .catch((error) => console.error(error));
  
      // Iniciar el temporizador al cargar la página
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
  
      // Limpiar el intervalo al desmontar el componente
      return () => clearInterval(interval);
    }, []);
  
  
    const handleResponseChange = (questionId, event) => {
      const value = event.target.value;
      setUserResponses((prevResponses) => ({
        ...prevResponses,
        [questionId]: value,
      }));
    };
  
    const checkResponse = (questionId) => {
      const userResponse = userResponses[questionId];
      const correctResponse = questions.find((question) => question.id === questionId).respuesta;
  
      if (userResponse === correctResponse) {
        setScore((prevScore) => prevScore + 7);
      } else {
        setScore((prevScore) => prevScore + 1);
      }
    };
    
  
    const handleSubmit = () => {
      setShowMenu(true);
      setShowQuestion(false);
      clearInterval(timer);
      if (score < 1){
        alert(`Tu nota es:${1} Tiempo transcurrido: ${timer} segundos.`);
      }
      else{
        alert(`Tu nota es:${score/4} Tiempo transcurrido: ${timer} segundos.`);
      }
      
    };
  
    return (
      <div>{showQuestion && (
        <div className="cuestionario">
          <h1>Cuestionario Nivel Avanzado</h1>
          <p>Tiempo: {timer} (s) Puntaje: {score}</p>
          {questions.map((question) => (
            <div key={question.id}>
              <div className='codigo'>
                <CodeBlock
                text={question.pregunta}
                language='python'
                theme={monokai}
                showLineNumbers={1}
                CodeBlock={{linenumbers: true}}
                wrapLines/>
              </div>
              <div className='contenedor-respuesta'>
              <input
                type="text"
                value={userResponses[question.id]}
                onChange={(e) => handleResponseChange(question.id, e)}
                placeholder="Escribe tu respuesta aquí"
              />
              <button type='button' className='btn btn-primary' onClick={() => checkResponse(question.id)}>Enviar respuesta</button>
              </div>
            </div>
          ))}
          <button type='button' className='btn btn-primary' onClick={handleSubmit}>Terminar prueba</button>
        </div>
      )}
    </div>
    );
  };

export default QuestionHigh