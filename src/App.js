import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addSong = this.addSong.bind(this)
    this.updateSong = this.updateSong.bind(this)
    this.state = {
      songs: { },
      authenticated: false
    };
  }
  render() {
    return (
      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
        <BrowserRouter>
          <div>
            <Header authenticated={this.state.authenticated} />
            <div className="main-content" style={{padding: "1em"}}>
              <div className="workspace">
                <Route exact path="/login" component={Login}/>
                <Route exact path="/songs" render={(props) => {
                  return (
                    <SongList songs={this.state.songs} />
                  )
                }} />
                <Route path="/songs/:songId" render={(props) => {
                  const song = this.state.songs[props.match.params.songId];
                  return (
                    song ? <ChordEditor song={song} updateSong={this.updateSong} /> : <h1>Song not found</h1>
                  )
                }} />
              </div>
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
