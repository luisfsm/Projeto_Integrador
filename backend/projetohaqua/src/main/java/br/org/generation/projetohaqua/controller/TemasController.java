package br.org.generation.projetohaqua.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.projetohaqua.model.Temas;
import br.org.generation.projetohaqua.repository.TemaRepository;

@RestController
@RequestMapping("/temas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TemasController {

	@Autowired
	private TemaRepository temaRepository;
	
	@GetMapping
	public ResponseEntity <List<Temas>> getAll(){
		return ResponseEntity.ok(temaRepository.findAll());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity <List<Temas>> findByDescricao(@PathVariable String nome){
		return ResponseEntity.ok(temaRepository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity <Temas> findById(@PathVariable long id){
		return temaRepository.findById(id)
				.map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity <Temas> postMethod(@RequestBody Temas temas){
		return ResponseEntity.status(HttpStatus.CREATED).body(temaRepository.save(temas));
	}
	
	@PutMapping 
	public ResponseEntity <Temas> putMethod(@RequestBody Temas temas){
		return ResponseEntity.status(HttpStatus.OK).body(temaRepository.save(temas));
	}
	
	@DeleteMapping("/{id}")
	public void deleteMethod(@PathVariable long id) {
		temaRepository.deleteById(id);
	}
	
}
