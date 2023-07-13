package cl.mingeso.questionservice.controller;

import cl.mingeso.questionservice.entity.Question;
import cl.mingeso.questionservice.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {
    @Autowired
    QuestionService questionService;

    @GetMapping
    public ResponseEntity<List<Question>> getAll(){
        List<Question> preguntas = questionService.obtenerPreguntas();
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @GetMapping("/{dificultad}")
    public ResponseEntity<List<Question>> getByDif(@PathVariable("dificultad") String dificultad){
        List<Question> preguntas = questionService.obtenerPreguntasDificultad(dificultad);
        if(preguntas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(preguntas);
    }

    @PostMapping("/nueva-pregunta")
    public ResponseEntity<Question> addPregunta(@RequestBody Question question){
        Question nuevaPregunta = questionService.savePregunta(question);
        return ResponseEntity.ok(nuevaPregunta);
    }
}
