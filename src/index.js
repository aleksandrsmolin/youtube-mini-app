import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyD4VDp4zELzYM7yoHKQbc-UFtwPgdI6_VI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
		};
		
		this.videoSearch('news');
	}

		videoSearch(term) {
				YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0],
				
			});
		});
	}


	render(){
		return (
    <div>
			<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
				videos={this.state.videos}
				onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
			/>
		</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
