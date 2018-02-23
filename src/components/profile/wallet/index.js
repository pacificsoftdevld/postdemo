import React                     from 'react'

export default class Wallet extends React.Component {
	constructor(props) {
		super(props)

		this.dummyData = {
			balances: 45685325,
			data: [
				{
					id: 1,
					title: "steem",
					description: "Tradeable tokens that may be transferred anyway at anytime. Steem can be converted to STEEM POWER in a progress called powering up.",
					steem: 4152.554
				},
				{
					id: 2,
					title: "steem power",
					description: "Tradeable tokens that may be transferred anyway at anytime. Steem can be converted to STEEM POWER in a progress called powering up.",
					steem: 25474.042
				},
				{
					id: 3,
					title: "steem",
					description: "Tradeable tokens that may be transferred anyway at anytime. Steem can be converted to STEEM POWER in a progress called powering up.",
					steem: 4152.554
				},
				{
					id: 4,
					title: "steem power",
					description: "Tradeable tokens that may be transferred anyway at anytime. Steem can be converted to STEEM POWER in a progress called powering up.",
					steem: 32142123
				},
				{
					id: 5,
					title: "steem",
					description: "Tradeable tokens that may be transferred anyway at anytime. Steem can be converted to STEEM POWER in a progress called powering up.",
					steem: 43542231
				},
			]
		}
	}

	render() {
		return (
			<div className="wallet_container clearfix">
				<div className="wallet">
					<div className="wallet__head">
						<h3>Balances</h3>
						<div className="wallet__head__total">
							<p className="text">The estimated value is based on an average value of Steem in US dollars.</p>
							<div className="number">
								<h4 className="total">${(this.dummyData.balances).toLocaleString()}</h4>
							</div>
						</div>
					</div>
					<div className="wallet__body">
						{
							this.dummyData.data.map(data => {
								return (
									<div className="wallet__body__row" key={data.id}>
										<div className="text">
											<h3>{data.title}</h3>
											<p>{data.description}</p>
										</div>
										<div className="number">
											<h3>${(data.steem).toLocaleString()}</h3>
											<p>Steem</p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		);
	}
}