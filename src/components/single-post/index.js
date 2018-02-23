import React                           from 'react'
import PostDetail                      from '../__common/PostDetail'

import chris                           from '../../styles/assets/imgs/users/chris.png'
import avatar_default                  from '../../styles/assets/imgs/users/default.png'

export default class SinglePost extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			replyRootPost: false,
			sortOrder: 1
		}

		this.dataPost = {
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

	handleChangeSortOrder =  (event, index, value) => {
		console.log("handleChangeSortOrder")
		this.setState(state => {state.sortOrder = value})
	}

	render() {
		return (
			<div className="single_post_container clearfix">
				<PostDetail 
					data={this.dataPost}
					routerHash={this.props.location ? this.props.location.hash : ""} // click on comments link on post card to scoll to comments
					sortOrder={this.state.sortOrder}
					onChangeSortOrder={this.handleChangeSortOrder}
				/>
			</div>
		);
	}
}