import React                     from 'react'
import PostCard                  from '../../__common/PostCard'

import post1                     from '../../../styles/assets/imgs/posts/post1.png'

export default class Blog extends React.Component {
	constructor(props) {
		super(props)

		this.dummyData = [
			{
				id: 1,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa ssa faucibus posuerem gravidia, massa faucibus posuerem gravidia, massa faucibus posuerem gravidia, massa faucibus posuerem gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 2,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 3,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 4,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 5,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 6,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 7,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 8,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
			{
				id: 9,
				link: "#",
				img: post1,
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
				author: {
					name: "Elie Rotschild",
					rate: 56,
				},
				created_at: "5 days ago",
				tagLink: "#",
				tag: "technology",
				price: 731.11,
				like: 123,
				comment: 21,
			},
		]
	}

	handleGoAhead = () => {
		console.log("handleGoAhead")
	}

	render() {
		return (
			<div className="blog_container clearfix">
				{
					this.dummyData.map(data => 
						<PostCard
							key={data.id}
							data={data}
							styleShowColumn={true}
							handleGoAhead={this.handleGoAhead}
						/>
					)
				}
			</div>
		);
	}
}