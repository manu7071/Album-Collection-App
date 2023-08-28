import React from 'react';
import AlbumList from './AlbumList';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Album Collection App
          </a>
        </div>
      </nav>
      <div className="container mt-4">
        <AlbumList />
      </div>
    </div>
  );
}

export default App;





