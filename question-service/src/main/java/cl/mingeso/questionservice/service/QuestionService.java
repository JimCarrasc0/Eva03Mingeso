package cl.mingeso.questionservice.service;

import cl.mingeso.questionservice.entity.Question;
import cl.mingeso.questionservice.repository.QuestionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;

    private final Logger logg = LoggerFactory.getLogger(QuestionService.class);

    public List<Question> obtenerPreguntas(){
        List<Question> preguntas = questionRepository.findAll();
        List<Question> preguntasFormateadas = new ArrayList<Question>();
        for(Question pregunta:preguntas){
            pregunta.setPregunta(pregunta.getPregunta().replace("\\n","\n"));
            pregunta.setPregunta(pregunta.getPregunta().replace("\\t","\t"));
            preguntasFormateadas.add(pregunta);
        }
        return preguntasFormateadas;
    }

    public Question obtenerPregunta(Integer id){
        return questionRepository.findQuestionById(id);
    }

    public List <Question> obtenerPreguntasDificultad(String dificultad){
        List<Question> preguntas = questionRepository.findByDificultad(dificultad);



        List<Question> preguntasFormateadas = new ArrayList<Question>();
        for(Question pregunta:preguntas){
            pregunta.setPregunta(pregunta.getPregunta().replace("\\n","\n"));
            pregunta.setPregunta(pregunta.getPregunta().replace("\\t","\t"));
            preguntasFormateadas.add(pregunta);
        }

        List<Question> preguntasSeleccionadas = new ArrayList<Question>();
        List<Integer> preguntasUsadas = new ArrayList<>();
        Random random = new Random();

        while(preguntasSeleccionadas.size()<4){
            int numero = random.nextInt(preguntasFormateadas.size());
            if(!preguntasUsadas.contains(numero)){
                preguntasUsadas.add(numero);
                preguntasSeleccionadas.add(preguntasFormateadas.get(numero));
            }
        }


        return preguntasSeleccionadas;
    }



    public Question savePregunta(Question question){
        Question nuevaPregunta = questionRepository.save(question);
        return nuevaPregunta;
    }


}
