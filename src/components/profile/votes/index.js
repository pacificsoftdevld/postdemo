import React                     from 'react'
import { Link }                  from 'react-router'
import SelectField               from 'material-ui/SelectField'
import MenuItem                  from 'material-ui/MenuItem'

export default class Votes extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filter: {
				time: 1
			}
		}

		this.dummyData = {
			received_upvotes: {
				quatity: 23256,
				data: [
					{
						id: 1,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
					{
						id: 2,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
					{
						id: 3,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
					{
						id: 4,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
				]
			},
			given_upvotes: {
				quatity: 47536,
				data: [
					{
						id: 1,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
					{
						id: 2,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
					{
						id: 3,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
					{
						id: 4,
						timestamp: "4 minutes ago",
						author: "aquaman",
						source: "itsme/science-brief-early-work-on-the-company-USA",
						link_source: "#"
					},
				]
			},
		}
	}

	handleSelectTime = (event, index, value) => {
		this.setState(state => { state.filter.time = value })
	}

	render() {
		return (
			<div className="votes_container clearfix">
				<div className="votes__head">
					<h3>Upvote Frequency</h3>
					<div className="custom_select">
						<SelectField
							value={this.state.filter.time}
							onChange={this.handleSelectTime}
							className="select"
							maxHeight={400}
							fullWidth={true}
							autoWidth={true}
							labelStyle={{color: "#a2a2a3"}}
						>
							<MenuItem value={1} key={1} primaryText="this month" />
							<MenuItem value={2} key={2} primaryText="next month" />
						</SelectField>
					</div>
				</div>
				<div className="votes__body">
					<div className="votes__result votes__result--received">
						<div className="votes__result__number">
							<h2>{this.dummyData.received_upvotes.quatity.toLocaleString()}</h2>
							<p>Received Upvotes</p>
						</div>
						<ul className="votes__result__list">
							{
								this.dummyData.received_upvotes.data.map(data => {
									return (
										<li key={data.id}>
											<div className="timestamp">{ data.timestamp }</div>
											<div className="author">{ data.author }</div>
											<div className="source"><Link to={ data.link_source }>{ data.source }</Link></div>
										</li>
									)
								})	
							}
						</ul>
					</div>

					<div className="votes__result votes__result--given">
						<div className="votes__result__number">
							<h2>{this.dummyData.given_upvotes.quatity.toLocaleString()}</h2>
							<p>Givens Upvotes</p>
						</div>
						<ul className="votes__result__list">
							{
								this.dummyData.given_upvotes.data.map(data => {
									return (
										<li key={data.id}>
											<div className="timestamp">{ data.timestamp }</div>
											<div className="author">{ data.author }</div>
											<div className="source"><Link to={ data.link_source }>{ data.source }</Link></div>
										</li>
									)
								})	
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}