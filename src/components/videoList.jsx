import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
	const VideoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect} 
				key={video.etag}
				video={video}
			/>
		);
	});

	return (
		<ul className="col-ma-4 list-group" >
			{VideoItems}
		</ul>
	);
};

export default VideoList;
