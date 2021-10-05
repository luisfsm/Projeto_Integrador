package br.org.generation.projetohaqua.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name="tb_postagem")
public class Postagem {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@NotNull (message = "Digite um título")
	@Size (max = 50, message = "máximo de 50 caracteres")
	private String titulo;
	
	@NotNull (message = "Digite um texto")
	@Size (max = 1500, message = "máximo de 1500 caracteres")
	private String texto;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date data= new java.sql.Date(System.currentTimeMillis());
	
	private String recurso_url;
	
	//@ManyToOne
	//@JsonIgnoreProperties("postagem")
	//private Temas tema_id;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getRecurso_url() {
		return recurso_url;
	}

	public void setRecurso_url(String recurso_url) {
		this.recurso_url = recurso_url;
	}
/*
	public Temas getTema_id() {
		return tema_id;
	}

	public void setTema_id(Temas tema_id) {
		this.tema_id = tema_id;
	}
	*/
}
