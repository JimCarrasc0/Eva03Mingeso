package cl.mingeso.questionservice.service;

import cl.mingeso.questionservice.entity.Question;
import cl.mingeso.questionservice.repository.QuestionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    private final Logger logg = LoggerFactory.getLogger(QuestionService.class);

    public List<Question> obtenerPreguntas(){
        return (List<Question>) questionRepository.findAll();
    }

    public Question obtenerPregunta(Integer id){
        return questionRepository.findQuestionById(id);
    }

    public List <Question> obtenerPreguntasDificultad(String dificultad){
        List<Question> preguntas = questionRepository.findByDificultad(dificultad);
        return preguntas;
    }



    public Question savePregunta(Question question){
        Question nuevaPregunta = questionRepository.save(question);
        return nuevaPregunta;
    }


}
