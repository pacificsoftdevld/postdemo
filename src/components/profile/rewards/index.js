import React                         from 'react'
import { Link }                      from 'react-router'
import { getClassName }              from '../../__utilities'
import SelectField                   from 'material-ui/SelectField'
import MenuItem                      from 'material-ui/MenuItem'

export default class Rewards extends React.Component {
	constructor(props) {
		super(props)

		this.titleArr = [
			{
				id: 1,
				name: "Curation"
			},
			{
				id: 2,
				name: "Author"
			},
		]

		this.dummyData = {
			steem_power: 1553643,
			history: [
				{
					id: 1,
					timestamp: "12 minutes ago",
					quantity: 0.049,
					link: "#",
					link_name: "itsme/Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-Molestias-laudantium-nam-omnis-dolorem-distinctio-rerum",
				},
				{
					id: 2,
					timestamp: "32 minutes ago",
					quantity: 0.014,
					link: "#",
					link_name: "itsme/Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-Molestias-laudantium-nam-omnis-dolorem-distinctio-rerum",
				},
				{
					id: 3,
					timestamp: "1 hour ago",
					quantity: 0.049,
					link: "#",
					link_name: "itsme/Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-Molestias-laudantium-nam-omnis-dolorem-distinctio-rerum",
				},
				{
					id: 4,
					timestamp: "12 minutes ago",
					quantity: 0.049,
					link: "#",
					link_name: "itsme/Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-Molestias-laudantium-nam-omnis-dolorem-distinctio-rerum",
				},
				{
					id: 5,
					timestamp: "12 minutes ago",
					quantity: 0.049,
					link: "#",
					link_name: "itsme/Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-Molestias-laudantium-nam-omnis-dolorem-distinctio-rerum",
				},
				{
					id: 6,
					timestamp: "12 minutes ago",
					quantity: 0.049,
					link: "#",
					link_name: "itsme/Lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-Molestias-laudantium-nam-omnis-dolorem-distinctio-rerum",
				},
			]
		}

		this.state = {
			tabActive: 1,
			filter: {
				time: 1
			},
			resultFilter: this.renderListHistory(this.dummyData.history)
		}
	}

	renderListHistory = (data) => {
		return data.map(item => {
			return (
				<div key={item.id} className="history">
					<div className="timestamp">{item.timestamp}</div>
					<Link className="history__text" to={item.link}><span>{item.quantity} STEEM POWER for</span>{item.link_name}</Link>
				</div>
			)
		})
	}

	handleChooseTab = (item) => (e) => {
		this.setState(state => {
			state.tabActive = item.id

			state.resultFilter = (item.id === 1) ? (
				this.renderListHistory(this.dummyData.history)
			) : (
				<div>Tab 2</div>
			)
		})
	}

	handleSelectTime = (event, index, value) => {
		this.setState({filter: {time: value}})
	}

	render() {
		return (
			<div className="rewards_container clearfix">
				<div className="tab">
					<div className="tab__title">
						{
							this.titleArr.map(title => {
								return (
									<p 
										className={getClassName({active: this.state.tabActive === title.id}, 'tab__key')} 
										key={title.id}
										onClick={this.handleChooseTab(title)}
									>
										{ title.name }
									</p>
								)
							})
						}
						<div className="tab__title__statistic">
							<p className="text">
								Estimated curation rewards last week
							</p>
							<div className="number">
								<h3>{(this.dummyData.steem_power).toLocaleString()}</h3>
								<p>Steem Power</p>
							</div>
						</div>
					</div>
					<div className="tab__filter">
						<h3 className="tab__filter__text">
							Curation Rewards History
						</h3>
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
								<MenuItem value={1} key={1} primaryText="newest" />
								<MenuItem value={2} key={2} primaryText="latest" />
							</SelectField>
						</div>
					</div>
					<div className="tab__result">
						{this.state.resultFilter}
					</div>
				</div>

			</div>
		)
	}
}