package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Client;
import com.example.TestSpring.repository.ClientRepository;
import com.example.TestSpring.service.ClientsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/clients")
public class ClientsController {

    private final ClientRepository clientRepository;
    private final ClientsService clientsService;

    @GetMapping
    public ResponseEntity<List<Client>> getClients() {

        return clientsService.getClients();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(@PathVariable Integer id) {
        return clientsService.getClient(id);
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) throws URISyntaxException {
        return clientsService.createClient(client);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Integer id, @RequestBody Client client) {
        return clientsService.updateClient(id, client);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteClient(@PathVariable Integer id) {
        return clientsService.deleteClient(id);
    }

}
