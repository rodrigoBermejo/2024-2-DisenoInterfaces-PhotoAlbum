package upa.edu.photo_album.repository;

import upa.edu.photo_album.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
    //Add more functionality if needed
}