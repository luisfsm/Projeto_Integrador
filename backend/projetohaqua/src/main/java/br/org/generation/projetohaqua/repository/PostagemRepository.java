package br.org.generation.projetohaqua.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.projetohaqua.model.Postagem;

public interface PostagemRepository extends JpaRepository <Postagem, Long>{
	public List<Postagem> findAllByTituloContainingIgnoreCase (String titulo); 
}
