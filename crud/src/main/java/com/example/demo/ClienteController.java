package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

// pegar todos os clientes
	@GetMapping("/clientes")
	public List<Cliente> getAllClientes() {
		return clienteRepository.findAll();
	}

// crear clientes a api
	@PostMapping("/clientes")
	public Cliente createCliente(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}

// pegar clientes pelo Id
	@GetMapping("/clientes/{id}")
	public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
		Cliente cliente = clienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não existe com esse Id :" + id));
		return ResponseEntity.ok(cliente);
	}

// atualizar clientes por Id

	@PutMapping("/clientes/{id}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente clienteDetails) {
		Cliente cliente = clienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não existe com esse Id :" + id));

		cliente.setNome(clienteDetails.getNome());
		cliente.setCpf(clienteDetails.getCpf());
		cliente.setNascimento(clienteDetails.getNascimento());
		cliente.setSexo(clienteDetails.getSexo());
		cliente.setTel1(clienteDetails.getTel1());
		cliente.setTel2(clienteDetails.getTel2());
		cliente.setEmail(clienteDetails.getEmail());
		cliente.setCep(clienteDetails.getCep());
		cliente.setRua(clienteDetails.getRua());
		cliente.setNumero(clienteDetails.getNumero());
		cliente.setBairro(clienteDetails.getBairro());
		cliente.setCidade(clienteDetails.getCidade());

		Cliente updatedCliente = clienteRepository.save(cliente);
		return ResponseEntity.ok(updatedCliente);
	}

// exluir clientes por Id
	@DeleteMapping("/clientes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCliente(@PathVariable Long id) {
		Cliente cliente = clienteRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não existe com esse Id :" + id));

		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("excluido", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}