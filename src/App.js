import React, { useState } from 'react';
import './styles/app.scss';

//components
import Player from './components/Player';
import Song from './components/Song';

//util
import data from './utils';

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
