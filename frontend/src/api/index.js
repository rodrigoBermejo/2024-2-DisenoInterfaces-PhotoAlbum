import { default as sampleAlbums } from './sampleAlbums';
import { default as samplePhotos } from './samplePhotos';

export async function getAlbums() {
  try {
    const response = await fetch('http://localhost:8080/albums');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.error('Failed to fetch albums:', error);
    return [];
  }
}

export async function getPhotos() {
  try {
    const response = await fetch('http://localhost:8080/photos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    return [];
  }
}