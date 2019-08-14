import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import VideoDetail from './Video/VideoDetail'
import VideoList from './Video/VideoList'
class App extends React.Component {
  render() {
    return (
      <div >
        <SearchBar/>
        <VideoDetail/>
        <VideoList/>
    </div>
    );
  }
}

export default App;
