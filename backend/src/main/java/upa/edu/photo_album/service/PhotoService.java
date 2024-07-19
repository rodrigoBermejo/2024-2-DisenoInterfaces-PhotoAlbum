package upa.edu.photo_album.service;

import upa.edu.photo_album.model.Photo;
import upa.edu.photo_album.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepository;

    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    public Photo getPhotoById(Long id) {
        return photoRepository.findById(id).orElse(null);
    }

    public Photo createPhoto(Photo photo) {
        return photoRepository.save(photo);
    }

    public Photo updatePhoto(Long id, Photo photoDetails) {
        Photo photo = photoRepository.findById(id).orElse(null);
        if (photo != null){
            photo.setTitle(photoDetails.getTitle());
            photo.setDescription(photoDetails.getDescription());
            photo.setUrl(photoDetails.getUrl());
            photo.setUpdatedAt(LocalDateTime.now());
            return photoRepository.save(photo);
        }
        return null;
    }

    public void deletePhoto(Long id) {
        photoRepository.deleteById(id);
    }
}
