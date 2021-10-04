package br.org.generation.projetohaqua.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.projetohaqua.model.Temas;

@Repository
public interface TemaRepository extends JpaRepository <Temas, Long>{

	public List<Temas> findAllByNomeContainingIgnoreCase (String nome);
	
}
