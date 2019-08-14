import React from 'react';

class VideoItem extends React.Component {
  render() {
    return (
      <div >
        <img src={this.props.v.snippet.thumbnails.medium.url}></img>
        {this.props.v.snippet.title}
    </div>
    );
  }
}

export default VideoItem;