import React                         from 'react'
import { Link }                      from 'react-router'

import TabSearchComponent            from './TabSearch.Component'

const dummyDataResult = (
	<div className="link_wrapper">
		<Link className="tab__result--link">steemiz</Link>
		<Link className="tab__result--link">lift</Link>
		<Link className="tab__result--link">photography</Link>
		<Link className="tab__result--link">money</Link>
		<Link className="tab__result--link">kr</Link>
		<Link className="tab__result--link">steemiz</Link>
		<Link className="tab__result--link">lift</Link>
		<Link className="tab__result--link">photography</Link>
		<Link className="tab__result--link">money</Link>
		<Link className="tab__result--link">kr</Link>
		<Link className="tab__result--link">steemiz</Link>
		<Link className="tab__result--link">lift</Link>
		<Link className="tab__result--link">photography</Link>
	</div>
)

export default class TabSearchTopContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tabActive: 1,
			dataSearch: dummyDataResult // store data to render
		}

		this.titleArr = [
			{
				id: 1,
				name: "Tags"
			},
			{
				id: 2,
				name: "Users"
			},
		]

		this.inputSearchRef = null

		this.textSearch = null
	}

	handleKeyUpSearch = (event) => {
		console.log(event)
		this.textSearch = this.inputSearchEl.value

		if (event.keyCode === 13) {
			this.search()
		}
	}

	search = () => {
		console.log("search for: " + this.textSearch)
	}

	handleOptions = () => {
		console.log("handleOptions")
	}

	handleShowMore = () => {
		console.log("handleShowMore")
	}

	handleChooseTab = (item) => (e) => {
		console.log("handleChooseTab")
		this.setState(state => {
			state.tabActive = item.id
			state.dataSearch = (item.id === 1) ? (
				<div className="link_wrapper">
					<Link className="tab__result--link">steemiz</Link>
					<Link className="tab__result--link">lift</Link>
					<Link className="tab__result--link">photography</Link>
					<Link className="tab__result--link">money</Link>
					<Link className="tab__result--link">kr</Link>
					<Link className="tab__result--link">steemiz</Link>
					<Link className="tab__result--link">lift</Link>
					<Link className="tab__result--link">photography</Link>
					<Link className="tab__result--link">money</Link>
					<Link className="tab__result--link">kr</Link>
					<Link className="tab__result--link">steemiz</Link>
					<Link className="tab__result--link">lift</Link>
					<Link className="tab__result--link">photography</Link>
				</div>
			) : (
				<div className="link_wrapper">
					<p>Tab 2</p>
				</div>
			)
		})
	}

	render() {
		return (
			<TabSearchComponent
				className="tab--top"
				titleArr={this.titleArr}
				titleActive={this.state.tabActive}
				handleChooseTab={this.handleChooseTab}
				handleOnClickSearch={this.search}
				placeholderSearch="people & tags"
				inputSearchRef={el => this.inputSearchEl = el}
				handleKeyUpSearch={this.handleKeyUpSearch}
				handleChangeInputSearch={this.handleChangeInputSearch}
				handleOptions={this.handleOptions}
				handleShowMore={this.handleShowMore}
			>	
				{this.state.dataSearch}
			</TabSearchComponent>
		)
	}
}