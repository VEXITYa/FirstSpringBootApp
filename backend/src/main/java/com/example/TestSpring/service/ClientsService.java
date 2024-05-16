package com.example.TestSpring.service;

import com.example.TestSpring.entity.Client;
import com.example.TestSpring.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import com.example.TestSpring.entity.Client;
import com.example.TestSpring.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ClientsService {

    private final ClientRepository clientRepository;

    public ResponseEntity<List<Client>> getClients() {

        return new ResponseEntity<>(clientRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Client> getClient(Integer id) {
        var response = clientRepository.findById(id);
        if(response.isPresent()){
            return new ResponseEntity<>(response.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Client> createClient(Client client) throws URISyntaxException {
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.created(new URI("/clients/" + savedClient.getId())).body(savedClient);
    }

    public ResponseEntity<Client> updateClient(Integer id, Client client) {
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setPhoneNumber(client.getPhoneNumber());
        currentClient.setDiscount(client.getDiscount());
        currentClient = clientRepository.save(client);

        return ResponseEntity.ok(currentClient);
    }

    public ResponseEntity<Object> deleteClient(Integer id) {
        clientRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}