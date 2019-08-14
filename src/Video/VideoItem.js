import React from 'react';

class VideoItem extends React.Component {
  render() {
    return (
      
  <div class="item">
    <img class="ui avatar image" src={this.props.v.snippet.thumbnails.medium.url}/>
    <div class="content">
      <a class="header">{this.props.v.snippet.title}</a>      
    </div>
    </div>
  
    );
  }
}

export default VideoItem;