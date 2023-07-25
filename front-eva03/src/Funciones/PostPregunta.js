import axios from "axios";

class PostPregunta {
    
    PostPregunta(pregunta){
        return axios.post(`http://localhost:8080/question/nueva-pregunta`, pregunta);
    }
}
