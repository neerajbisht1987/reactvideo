import React from 'react';
import VideoItem from './VideoItem'

class VideoList extends React.Component {
  render() {
    const renderList =     
      this.props.video.map((video)=>{        
        return <VideoItem key = {video.id.channelId}v={video}/>    
      });
    return <div> {renderList}</div>
  }
}

export default VideoList;