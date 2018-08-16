import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import {withRouter} from 'react-router-dom';

class VideoDetails extends React.Component {
	constructor(props) {
		super(props);
		this.routeParam = props.match.params.id;
		this.state = {
			error: null,
			isLoaded: false,
			video: null
		};
	}

	componentDidMount() {
		fetch(`https://n1mr20dqxh.execute-api.us-east-2.amazonaws.com/qa/videos/${this.routeParam}`)
			.then((res) => res.json())
			.then(
				(result) => {
					
					this.setState({
						isLoaded: true,
						video: result
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error: error
					});
				}
			);
	}

	render() {
		let video = this.state.video;
		if (!video) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="d-flex flex-wrap col-lg-4 col-sm-4">
					<Card className="h-100 col-lg-12 col-md-12 col-sm-12" tag="div" key={video.id}>
						<CardBody>
							<CardTitle id='vidDetailTitle'><span>{video.title}</span></CardTitle>
							<CardText>{video.description}</CardText>
							<CardText><span className='strong'>Author:</span>  {video.author}</CardText>
							<CardText><span className='strong'>Gender</span>: {video.patient.gender}</CardText>
                            <CardText><span className='strong'>Age</span>: {video.patient.age}</CardText>
                            <CardText><span className='strong'>Location:</span> {video.vid_location.title}</CardText>
                            <CardText><span className='strong'>Country:</span> {video.vid_location.country}</CardText>
							<CardText><span className='strong'>Device:</span> {video.device}</CardText>
							<CardText><span className='strong'>Duration:</span> {video.vid_duration} seconds</CardText>
							{/* <CardText>{video.tags}</CardText> */}
						</CardBody>
					</Card>
				</div>
			);
		}
	}
}

export default withRouter(VideoDetails);