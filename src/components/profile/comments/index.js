import React                     from 'react'
import CommentCard               from '../../__common/CommentCard'

export default class Comments extends React.Component {
	constructor(props) {
		super(props)

		this.dummyData = [
			{
				id: 1,
				link: "#",
				title: "Sodales vel efficitur id feugiat in",
				content: "Aliquam gravidia, massa faucibus posuere eleifenvidia, massa faucibus posuere eleifenvidia, massa faucibus posuere eleifenvidia, massa faucibus posuere eleifend, ante justoAliquam gravidia, massa faucibus posuere eleifend, ante justo",
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
			<div className="comments_container clearfix">
				{
					this.dummyData.map(data => 
						<CommentCard
							key={data.id}
							data={data}
							handleGoAhead={this.handleGoAhead}
						/>
					)
				}
			</div>
		);
	}
}