import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import youtube from './apis/youtube'
import VideoDetail from './Video/VideoDetail'
import VideoList from './Video/VideoList'

class App extends React.Component {

  state  = {
    videos:[]
  };
  HandleSearchText = async (searchTextData) => {
   const response = await youtube.get('/search', {
      params: {
        q: searchTextData
      }
    }
    )
    this.setState({videos:response.data.items});
    console.log(this.state.videos);
  }

  render() {
    return (
      <div >
        <SearchBar searchTextHandler={this.HandleSearchText} />
        I have {this.state.videos.length} videos.
        <VideoDetail />
        <VideoList video={this.state.videos} />
      </div>
    );
  }
}

export default App;
