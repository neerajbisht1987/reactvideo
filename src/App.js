import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import VideoDetail from './Video/VideoDetail'
import VideoList from './Video/VideoList'
class App extends React.Component {
  state = {
    searchText :''
  }
  HandleSearchText = (searchTextData) =>{
    this.setState({searchText:searchTextData})
    console.log(searchTextData);
  }

  render() {
    return (
      <div >
        <SearchBar searchTextHandler={this.HandleSearchText}/>
        <VideoDetail/>
        <VideoList/>
    </div>
    );
  }
}

export default App;
