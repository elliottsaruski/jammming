import style from './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Tracklist from './Tracklist';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App" style={style}>
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <body className="App-body">
        <div className="SearchBar">
          <SearchBar />
        </div>
        <div className="Tracklist">
          <h2>Results</h2>
          <SearchResults />
        </div>
        <div className="Playlist">
          <h2>Your Playlist </h2>
          <Tracklist /> 
        </div>
      </body>
    </div>
  );
}

export default App;

//Must include "Save to Spotify" button and "Search Button"
