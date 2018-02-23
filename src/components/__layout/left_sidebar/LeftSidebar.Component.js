import React                    from 'react'
import { Link }                 from 'react-router'

const LeftSidebarComponent = () => {
	return (
		<aside id="left_sidebar">
			<div className="link">
				<Link className="link__inner" activeClassName="active" to="/posts" >
					<i className="material-icons">view_quilt</i>
					<span>View Quilt</span>
				</Link>
			</div>
			<div className="link">
				<Link className="link__inner" activeClassName="active" to="/users/1/profile" >
					<i className="material-icons">star</i>
					<span>Star Rate</span>
				</Link>
			</div>
			<div className="link">
				<Link className="link__inner" activeClassName="active" to="/1" >
					<i className="material-icons">rss_feed</i>
					<span>Rss Feed</span>
				</Link>
			</div>
			<div className="link">
				<Link className="link__inner" activeClassName="active" to="/1" >
					<i className="material-icons">group_work</i>
					<span>Group</span>
				</Link>
			</div>
			<div className="link">
				<Link className="link__inner" activeClassName="active" to="/2" >
					<i className="material-icons rotate__90">local_offer</i>
					<span>Local offer</span>
				</Link>
			</div>

			<div className="link link--account">
				<Link className="link__inner" activeClassName="active" to="/3" >
					<i className="material-icons">account_circle</i>
					<span>Account</span>
				</Link>
			</div>
			<div className="link link--setting">
				<Link className="link__inner" activeClassName="active" to="/4" >
					<i className="material-icons">settings</i>
					<span>Settings</span>
				</Link>
			</div>
		</aside>
	)
}

export default LeftSidebarComponent