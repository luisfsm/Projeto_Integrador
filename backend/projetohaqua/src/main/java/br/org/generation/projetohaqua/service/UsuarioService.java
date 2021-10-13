package br.org.generation.projetohaqua.service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.org.generation.projetohaqua.model.Usuario;
import br.org.generation.projetohaqua.model.UsuarioLogin;
import br.org.generation.projetohaqua.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public List<Usuario> listarUsuarios(){
		return usuarioRepository.findAll();
	}

	public Optional<Usuario> CadastrarUsuario(Usuario usuario) {
		if(usuarioRepository.findByUsuario(usuario.getUsuario()).isPresent())
			return Optional.empty();
				
				BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		String senhaEncoder = encoder.encode(usuario.getSenha());
		usuario.setSenha(senhaEncoder);

		return Optional.of(usuarioRepository.save(usuario));
	}

	public Optional<UsuarioLogin> Logar(Optional<UsuarioLogin> userLogin) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = usuarioRepository.findByUsuario(userLogin.get().getUsuario());

		if (usuario.isPresent()) {
			if (encoder.matches(usuario.get().getSenha(), usuario.get().getSenha())) {

				String auth = usuario.get().getUsuario() + ":" + usuario.get().getSenha();
				byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodeAuth);

				userLogin.get().setId(usuario.get().getId());
				userLogin.get().setToken(authHeader);
				userLogin.get().setSenha(usuario.get().getSenha());
				userLogin.get().setNome(usuario.get().getNome());

				return userLogin;
			}
		}

		return Optional.empty();
	}
}
