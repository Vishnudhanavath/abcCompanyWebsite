package com.brynk.backend.controller;

import com.brynk.backend.model.HeadingText;
import com.brynk.backend.repository.HeadingTextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/heading")
@CrossOrigin(origins = "*") // Allow access from frontend
public class HeadingController {

    @Autowired
    private HeadingTextRepository repository;

    @GetMapping
    public HeadingText getHeading() {
        List<HeadingText> allHeadings = repository.findAll();
        return allHeadings.isEmpty()
                ? new HeadingText(0L, "Default Heading (No Data)")
                : allHeadings.get(0);
    }

    @PostMapping
    public HeadingText updateHeading(@RequestBody HeadingText newHeading) {
        repository.deleteAll(); // keep only one heading
        return repository.save(newHeading);
    }
}
