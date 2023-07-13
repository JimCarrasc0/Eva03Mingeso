package cl.mingeso.questionservice.repository;

import cl.mingeso.questionservice.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
    /*
    @Query("select e from ProveedorEntity e where e.nombre =:nombre")
    ProveedorEntity findByNameCustomQuery(@Param("nombre") String nombre);
     */

    @Query("SELECT e from Question e where e.dificultad =:dificultad")
    List<Question> findByDificultad(@Param("dificultad") String dificultad);

    @Query("SELECT e from Question e where e.id =:id")
    Question findQuestionById(@Param("id") Integer id);
}
