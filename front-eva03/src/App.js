import './App.css';
//import { CodeBlock, monokai } from "react-code-blocks";
//import axios from 'axios';
import { useEffect, useState } from 'react';
import QuestionService from './QuestionService';



function App() {
  return (
    <div className="App">
      <QuestionList/>
    </div>
  );
}


const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await QuestionService.getQuestions();
        setQuestions(data);
      } catch (error) {
        // Manejo del error
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Lista de Preguntas</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>ID:</strong> {question.id}
            <br />
            <strong>Dificultad:</strong> {question.dificultad}
            <br />
            <strong>Pregunta:</strong> {question.pregunta}
            <br />
            <strong>Respuesta:</strong> {question.respuesta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
