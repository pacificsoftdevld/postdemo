import React                     from 'react'
import { Link }                  from 'react-router'

import AvatarProgress            from '../../__common/AvatarProgress'
import avatar                    from '../../../styles/assets/imgs/users/default.png'

export default class Followings extends React.Component {
	constructor(props) {
		super(props)

		this.dummyData = [
			{
				user_id: 1,
				avatar: avatar,
				progress: 80,
				rate: 88,
				name: "Arthur Curry",
				steem_power: 53677753,
			},
			{
				user_id: 2,
				avatar: avatar,
				progress: 33,
				rate: 88,
				name: "Hal Jordan",
				steem_power: 53677753,
			},
			{
				user_id: 3,
				avatar: avatar,
				progress: 54,
				rate: 88,
				name: "Solomon Grundy",
				steem_power: 53677753,
			},
			{
				user_id: 4,
				avatar: avatar,
				progress: 43,
				rate: 88,
				name: "Shiro Yoshida",
				steem_power: 53677753,
			},
			{
				user_id: 5,
				avatar: avatar,
				progress: 12,
				rate: 88,
				name: "Arthur Curry",
				steem_power: 53677753,
			},
		]
	}

	handleDeleteUser = () => {
		console.log("handleDeleteUser")
	}

	render() {
		return (
			<div className="usercard_container followings_container clearfix">
				{
					this.dummyData.map(user => {
						return (
							<div key={user.user_id} className="user_profile">
								<button className="user_profile__delete" onClick={this.handleDeleteUser}>×</button>
								<div className="user_profile__avatar">
									<AvatarProgress src={user.avatar} progress={user.progress} size="140px" avatar_hover={false} />
								</div>
								<span className="user_profile__rate">{user.rate}</span>
								<h3 className="user_profile__name">{user.name}</h3>
								<h4 className="user_profile__steem_power">{user.steem_power.toLocaleString()}</h4>
								<p>Steem Power</p>
								<div className="user_profile__view">
									<Link to={`/users/${user.user_id}/profile`}>View Profile</Link>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}
}