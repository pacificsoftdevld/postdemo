import React                           from 'react'
import PostCard                        from '../__common/PostCard'
import PostDetail                      from '../__common/PostDetail'

import post1                           from '../../styles/assets/imgs/posts/post1.png'
import post2                           from '../../styles/assets/imgs/posts/post2.png'
import post3                           from '../../styles/assets/imgs/posts/post3.png'
import post4                           from '../../styles/assets/imgs/posts/post4.png'
import post5                           from '../../styles/assets/imgs/posts/post5.png'
import chris                           from '../../styles/assets/imgs/users/chris.png'
import avatar_default                  from '../../styles/assets/imgs/users/default.png'

import { RadioButton, RadioButtonGroup, Dialog } from 'material-ui'



export default class Posts extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			styleShowColumn: true,
			typeShowPostCard: "row",
			openPopup: false,
			sortOrder: 1,
		}

		this.dummyDataPostList = [
			{
				id: 1,
				link: "#",
				img: post1,
				title: "Crowdbotics",
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
				id: 2,
				link: "#",
				img: post2,
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
				img: post3,
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
				img: post4,
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
				img: post5,
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
				img: post2,
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
				img: post4,
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
				img: post3,
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

		this.dummyDataPostArticle = {
			id: 1,
			content: "<p>They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!</p><p>They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!</p><p>They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!</p>",
			author: {
				name: "rebeccaryan",
				reputation: 67,
				slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
				avatar: chris,
			},
			voting: {
				money: 12.44,
				time: "2 days",
				vote_list: [
					{
						id: 1,
						name: "chris",
					},
					{
						id: 2,
						name: "andrew",
					},
					{
						id: 3,
						name: "David Luiz",
					},
				]
			},
			tags: [
				{
					id: 1,
					link: "steemiz",
					name: "steemiz",
				},
				{
					id: 2,
					link: "lift",
					name: "lift",
				},
				{
					id: 3,
					link: "photography",
					name: "photography",
				},
				{
					id: 4,
					link: "money",
					name: "money",
				},
				{
					id: 5,
					link: "kr",
					name: "kr",
				},
			],
			comments: [
				{
					id: 2,
					parentId: null,
					postId: 33,
					data: {
						author: {
							name: "rebeccaryan",
							reputation: 67,
							slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
							avatar: avatar_default,
						},
						time: "2 days ago",
						content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!",
						voting: {
							money: 12.44,
							time: "2 days",
							vote_list: [
								{
									id: 1,
									name: "chris",
								},
								{
									id: 2,
									name: "andrew",
								},
								{
									id: 3,
									name: "David Luiz",
								},
							]
						}
					},
					child_comments: [
						{
							id: 22,
							parentId: 2,
							postId: 33,
							data: {
								author: {
									name: "rebeccaryan",
									reputation: 67,
									slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
									avatar: chris,
								},
								time: "2 days ago",
								content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!\nThey described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles.",
								voting: {
									money: 12.44,
									time: "2 days",
									vote_list: [
										{
											id: 1,
											name: "chris",
										},
										{
											id: 2,
											name: "andrew",
										},
										{
											id: 3,
											name: "David Luiz",
										},
									]
								}
							},
						},
						{
							id: 222,
							parentId: 2,
							postId: 44,
							data: {
								author: {
									name: "rebeccaryan",
									reputation: 67,
									slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
									avatar: chris,
								},
								time: "2 days ago",
								content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such st\r\n- 1 Lorem\r\n- 2 Lorem",
								voting: {
									money: 12.44,
									time: "2 days",
									vote_list: [
										{
											id: 1,
											name: "chris",
										},
										{
											id: 2,
											name: "andrew",
										},
										{
											id: 3,
											name: "David Luiz",
										},
									]
								}
							},
						},
						{
							id: 223,
							parentId: 2,
							postId: 44,
							data: {
								author: {
									name: "rebeccaryan",
									reputation: 67,
									slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
									avatar: chris,
								},
								time: "2 days ago",
								content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such st\n![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)",
								voting: {
									money: 12.44,
									time: "2 days",
									vote_list: [
										{
											id: 1,
											name: "chris",
										},
										{
											id: 2,
											name: "andrew",
										},
										{
											id: 3,
											name: "David Luiz",
										},
									]
								}
							},
						},
						{
							id: 224,
							parentId: 2,
							postId: 44,
							data: {
								author: {
									name: "rebeccaryan",
									reputation: 67,
									slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
									avatar: chris,
								},
								time: "2 days ago",
								content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such st",
								voting: {
									money: 12.44,
									time: "2 days",
									vote_list: [
										{
											id: 1,
											name: "chris",
										},
										{
											id: 2,
											name: "andrew",
										},
										{
											id: 3,
											name: "David Luiz",
										},
									]
								}
							},
						},
						{
							id: 225,
							parentId: 2,
							postId: 44,
							data: {
								author: {
									name: "rebeccaryan",
									reputation: 67,
									slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
									avatar: chris,
								},
								time: "2 days ago",
								content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such st\r\n- 1 Lorem\r\n- 2 Lorem",
								voting: {
									money: 12.44,
									time: "2 days",
									vote_list: [
										{
											id: 1,
											name: "chris",
										},
										{
											id: 2,
											name: "andrew",
										},
										{
											id: 3,
											name: "David Luiz",
										},
									]
								}
							},
						},
					]
				},
				{
					id: 1,
					parentId: null,
					postId: 22,
					data: {
						author: {
							name: "rebeccaryan",
							reputation: 67,
							slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
							avatar: chris,
						},
						time: "2 days ago",
								content: "_They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!_\n\nThey described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles.",
						voting: {
							money: 12.44,
							time: "2 days",
							vote_list: [
								{
									id: 1,
									name: "chris",
								},
								{
									id: 2,
									name: "andrew",
								},
								{
									id: 3,
									name: "David Luiz",
								},
							]
						}
					},
					child_comments: [
						{
							id: 111,
							parentId: 1,
							postId: 22,
							data: {
								author: {
									name: "rebeccaryan",
									reputation: 67,
									slogan: "I'm interested in Cryptocurrency, News, music Production, Science, Live life Limitless",
									avatar: avatar_default,
								},
								time: "2 days ago",
								content: "They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko!\nThey described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles. Can’t wait for another similar wacko! They described it well. A refreshing drink for summer heat. Tropical notes that complement chilling in the shade.I really enjoy discovering and experimenting with such styles.",
								voting: {
									money: 12.44,
									time: "2 days",
									vote_list: [
										{
											id: 1,
											name: "chris",
										},
										{
											id: 2,
											name: "andrew",
										},
										{
											id: 3,
											name: "David Luiz",
										},
									]
								}
							},
						},
					]
				},
			]
		}
	}

	handleGoAhead = () => {
		console.log("handleGoAhead")
	}
	
	handleChangeTypeShow = (event, value) => {
		this.setState(state => {state.typeShowPostCard = value})
	}

	handleChangeSortOrder =  (event, index, value) => {
		console.log("handleChangeSortOrder")
		this.setState(state => {state.sortOrder = value})
	}

	handleProcessLink = postId => e => {
		console.log("handleProcessLink")
		e.preventDefault()

		// change URL without reload page
		window.history.pushState('/posts', '', '/posts/' + postId);

    	this.setState(state => {state.openPopup = true})
	}

	handleClosePopup = () => {
		console.log("handleClosePopup")

		// change URL without reload page
		window.history.pushState('/posts', '', '/posts');

    	this.setState(state => {state.openPopup = false})
	}

	render() {
		return (
			<div className="post_container clearfix">
				<div>
					<RadioButtonGroup 
						name="typeShow" 
						defaultSelected={this.state.typeShowPostCard}
						onChange={this.handleChangeTypeShow}
						className="clearfix"
						style={{margin: "0 0 1.5rem 0"}}
					>
						<RadioButton
							value="column"
							label="Type Column"
							style={{float: "left", width: "auto", "minWidth": "12rem"}}
							labelStyle={{color: "#999"}}
						/>
						<RadioButton
							value="row"
							label="Type Row"
							style={{float: "left", width: "auto", "minWidth": "10rem"}}
							labelStyle={{color: "#999"}}
						/>
						<RadioButton
							value=""
							label="Type Default"
							style={{float: "left", width: "auto", "minWidth": "12rem"}}
							labelStyle={{color: "#999"}}
						/>
					</RadioButtonGroup>
				</div>

				{
					this.dummyDataPostList.map(data => 
						<PostCard
							key={data.id}
							data={data}
							styleShow={this.state.typeShowPostCard}
							handleGoAhead={this.handleGoAhead}
							handleProcessLink={this.handleProcessLink}
						/>
					)
				}

				<Dialog
					modal={false}
					open={this.state.openPopup}
					onRequestClose={this.handleClosePopup}
					contentStyle={{width: "80%", maxWidth: "1600px"}}
					bodyStyle={{padding: "0", maxHeight: "auto", "overflowY": "auto"}}
					style={{overflowY: "auto"}}
					bodyClassName="PostDetail_popup"
				>
					<PostDetail
						mode="popup"
						data={this.dummyDataPostArticle}
						sortOrder={this.state.sortOrder}
						onChangeSortOrder={this.handleChangeSortOrder}
					/>
				</Dialog>
			</div>
		);
	}
}