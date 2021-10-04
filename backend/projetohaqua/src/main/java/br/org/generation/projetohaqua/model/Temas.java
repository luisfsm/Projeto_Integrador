package br.org.generation.projetohaqua.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table (name = "tb_temas")
public class Temas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;

	@NotNull
	@Size(max = 50, message = "O nome deve ter no máximo 50 caracteres!")
	public String nome;
	
	@NotNull
	@Size(max = 200, message = "A descrição deve ter no máximo 200 caracteres!")
	public String descricao;
	
	@Temporal(TemporalType.TIMESTAMP)
	public Date data_insercao = new java.sql.Date(System.currentTimeMillis());

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Date getData_insercao() {
		return data_insercao;
	}

	public void setData_insercao(Date data_insercao) {
		this.data_insercao = data_insercao;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
}
