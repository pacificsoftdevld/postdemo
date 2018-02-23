import React                     from 'react'
import { Link }                  from 'react-router'
import AvatarProgress            from '../__common/AvatarProgress'

import avatar                    from '../../styles/assets/imgs/users/default.png'
import background_url            from '../../styles/assets/imgs/bg.jpg'
import Blog                      from './blog'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.dummyUserData = {
			name: "Jonathan Winters",
			rate: 75,
			position: "@azorahai",
			steem_power: 3554647,
			posts: 256,
			followers: 6656,
			following: 64,
			avatar: avatar,
			progress: 66,
			background_url: background_url,
		}

		this.userId = 1

		console.log(this.props)
	}

	handleMessage = () => {
		console.log("handleMessage")
	}

	handleFollow = () => {
		console.log("handleFollow")
	}

	render() {
		return (
			<div className="profile_container clearfix">
				<div className="user" style={{background: `url(${this.dummyUserData.background_url}) transparent no-repeat center center/cover`}} >
					<div className="user__overlay"></div>
					<div className="user__wrapper">
						<div className="user__containner">
							<AvatarProgress 
								className="user__avatar" 
								size="150px" 
								progress={this.dummyUserData.progress} 
								src={this.dummyUserData.avatar} 
								avatar_hover={false}
							/>
						</div>
						<div className="user__info">
							<h2 className="user__info__name">{this.dummyUserData.name} <span>{this.dummyUserData.rate.toLocaleString()}</span></h2>
							<p className="user__info__position">{this.dummyUserData.position}</p>
							<div className="user__info__statistics">
								<div className="statistic statistic--steem_power">
									<h3>{this.dummyUserData.steem_power.toLocaleString()}</h3>
									<p>Steem Power</p>
								</div>
								<div className="statistic statistic--posts">
									<h3>{this.dummyUserData.posts.toLocaleString()}</h3>
									<p>Posts</p>
								</div>
								<div className="statistic statistic--followers">
									<h3>{this.dummyUserData.followers.toLocaleString()}</h3>
									<p>Followers</p>
								</div>
								<div className="statistic statistic--following">
									<h3>{this.dummyUserData.following.toLocaleString()}</h3>
									<p>Following</p>
								</div>
								<div className="statistic statistic--buttons">
									<button className="statistic--buttons__message" onClick={this.handleMessage}><i className="material-icons">sms</i></button>
									<button className="btn_default" onClick={this.handleFollow}>Follow</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="content__links">
						<Link activeClassName="active" to={`/users/${this.userId}/profile/blog`}>Blog</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/comments`}>Comments</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/replies`}>Replies</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/votes`}>Votes</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/followers`}>Followers</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/followings`}>Followings</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/rewards`}>Rewards</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/transactions`}>Transactions</Link>
						<Link activeClassName="active" to={`/users/${this.userId}/profile/wallet`}>Wallet</Link>
					</div>
					<div className="content__details">
						{this.props.children ? this.props.children : <Blog />}
					</div>
				</div>
			</div>
		);
	}
}