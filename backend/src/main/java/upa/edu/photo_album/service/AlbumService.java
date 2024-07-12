package upa.edu.photo_album.service;

import upa.edu.photo_album.model.Album;

import java.util.List;
import java.util.Optional;

public interface AlbumService {
    Album saveAlbum(Album album);
    Optional<Album> getAlbumById(Long id);
    List<Album> getAllAlbums();
    Album updateAlbum(Album album);
    void deleteAlbum(Long id);
}