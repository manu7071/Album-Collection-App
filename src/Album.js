import React, { useState } from 'react';

function Album({ album, handleUpdate, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(album.title);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    handleUpdate({ ...album, title });
    setIsEditing(false);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn btn-success mr-2" onClick={saveEdit}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={toggleEdit}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <h3 className="card-title">{album.title}</h3>
            <p className="card-text">Artist: {album.artist}</p>
            <button className="btn btn-primary mr-2" onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(album.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Album;






