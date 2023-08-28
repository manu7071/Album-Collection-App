import React, { useState, useEffect } from 'react';
import Album from './Album';

function AlbumList({ updateAlbum, deleteAlbum }) {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState('');
  const [newAlbumArtist, setNewAlbumArtist] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error('Error fetching albums:', error));
  }, []);

  const handleUpdate = (updatedAlbum) => {
    const updatedAlbums = albums.map((album) =>
      album.id === updatedAlbum.id ? updatedAlbum : album
    );
    setAlbums(updatedAlbums);
  };

  const handleDelete = (albumId) => {
    const updatedAlbums = albums.filter((album) => album.id !== albumId);
    setAlbums(updatedAlbums);
  };

  const handleAddAlbum = async (e) => {
    e.preventDefault();
    const newAlbum = {
      title: newAlbumTitle,
      artist: newAlbumArtist,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAlbum),
      });

      if (response.ok) {
        const addedAlbum = await response.json();
        setAlbums([...albums, addedAlbum]);
        setNewAlbumTitle('');
        setNewAlbumArtist('');
      }
    } catch (error) {
      console.error('Error adding album:', error);
    }
  };

  return (
    <div>
      {/* <h2>Albums</h2> */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <form onSubmit={handleAddAlbum}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={newAlbumTitle}
                onChange={(e) => setNewAlbumTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Artist</label>
              <input
                type="text"
                className="form-control"
                value={newAlbumArtist}
                onChange={(e) => setNewAlbumArtist(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Album
            </button>
          </form>
        </div>
        {albums.map((album) => (
          <div key={album.id} className="col-md-4 mb-3">
            <Album
              album={album}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumList;





