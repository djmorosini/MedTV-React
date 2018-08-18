import React from 'react';
import VideoPlayer from './VideoPlayer';
import TrendingVideos from './TrendingVideos';
import VideoList from './VideoList';


class VideoStore extends React.Component {
    constructor(props) {
        super(props)
        this.route = props
        this.state = {
            videos: [],
            activeVideo: null,
            error: null
        }
    }

    componentDidMount() {
        let videos = this.state.videos
        if (videos.length === 0 && !localStorage.getItem('videos')) {
            console.log("Im fetching!")
            this.allVideos().then((allVideos) => {
                this.setState({ videos: allVideos })
                localStorage.setItem('videos', JSON.stringify(allVideos))
            })
        }
    }

    allVideos = () => {
        console.log("Called all videos")
        return fetch('https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos')
            .then((response) => { return response.json() })
            .then((data) => {
                this.setState({
                    videos: data
                })
                return data;
            },
                error => {
                    this.setState({
                        error: error
                    });
                });
    }
    updateActiveVideo = (video) => {
        localStorage.setItem('activeVideo', `${JSON.stringify(video)}`)
        this.setState({ activeVideo: video })
    }

    render() {
        let videos = JSON.parse(localStorage.getItem('videos')) || this.state.videos
        let activeVideo = this.state.activeVideo
        let firstVideo = videos[0]
        if (localStorage.getItem('activeVideo')) {
            // localStorage.clear()
            activeVideo = JSON.parse(`${localStorage.getItem('activeVideo')}`)
        } else {
            
        }

        if (!videos) {
            return <div>Loading...</div>
        } else if (this.route.props.match.path === "/") {
            
            return <TrendingVideos videos={videos} updater={this.updateActiveVideo} />
            

        } else if (this.route.props.match.path === '/videos') {
            return <VideoList videos={videos} updater={this.updateActiveVideo}/>
        } else {
            return (
                <React.Fragment>
                    <VideoPlayer video={activeVideo || firstVideo} />
                    <TrendingVideos videos={videos} updater={this.updateActiveVideo} />
                </React.Fragment>
            )
        }
    }
}

export default VideoStore;
