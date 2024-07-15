// UserController.java
package upa.edu.photo_album.controller;

import upa.edu.photo_album.model.User;
import upa.edu.photo_album.service.UserService;
import upa.edu.photo_album.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        user.setCreatedAt(Instant.now());
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        userDetails.setUpdatedAt(Instant.now());
        return userService.updateUser(id, userDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        User user = userService.findByEmail(loginRequest.getEmail());
        //if (user == null || !bCryptPasswordEncoder.matches(loginRequest.getPasswordHash(), user.getPasswordHash())) {
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid email or password");
        }

        //String token = jwtUtil.generateToken(user);
        //return ResponseEntity.ok().body(token);
        return ResponseEntity.ok().body(user);
    }
}