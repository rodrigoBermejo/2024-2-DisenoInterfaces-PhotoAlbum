package upa.edu.photo_album.repository;

import upa.edu.photo_album.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository<Album, Long>  {
    //Add more functionality if needed
}
