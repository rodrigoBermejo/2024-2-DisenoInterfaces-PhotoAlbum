package upa.edu.photo_album.controller;

import upa.edu.photo_album.model.Photo;
import upa.edu.photo_album.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/photos")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping
    public List<Photo> getAllPhotos() {
        return photoService.getAllPhotos();
    }

    @GetMapping("/{id}")
    public Photo getPhotoById(@PathVariable Long id) {
        return photoService.getPhotoById(id);
    }

    @PostMapping
    public Photo createPhoto(@RequestBody Photo photo) {
        photo.setCreatedAt(LocalDateTime.now());
        return photoService.createPhoto(photo);
    }

    @PutMapping("/{id}")
    public Photo updatePhoto(@PathVariable Long id, @RequestBody Photo photoDetails) {
        photoDetails.setUpdatedAt(LocalDateTime.now());
        return photoService.updatePhoto(id, photoDetails);
    }

    @DeleteMapping("/{id}")
    public void deletePhoto(@PathVariable Long id) {
        photoService.deletePhoto(id);
    }
}
