package upa.edu.photo_album.repository;

import upa.edu.photo_album.model.AlbumPhoto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumPhotoRepository extends JpaRepository<AlbumPhoto, Long> {
    //Add more functionality if needed
}
