package com.example.TestSpring.controller;

import com.example.TestSpring.entity.Client;
import com.example.TestSpring.service.ClientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/clients")
public class ClientController {
    private final ClientService clientService;

    @PermitAll
    @GetMapping
    public ResponseEntity<List<Client>> getClients() {

        return clientService.getClients();
    }

    @PermitAll
    @GetMapping("/{id}")
    public ResponseEntity<Client> getClient(@PathVariable Integer id) {
        return clientService.getClient(id);
    }

    @PermitAll
    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) throws URISyntaxException {
        return clientService.createClient(client);
    }

    @PermitAll
    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Integer id, @RequestBody Client client) {
        return clientService.updateClient(id, client);
    }

    @PermitAll
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteClient(@PathVariable Integer id) {
        return clientService.deleteClient(id);
    }

}
