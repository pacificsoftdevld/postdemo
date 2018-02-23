import React                  from 'react'
import HeaderComponent        from './Header.Component'

import avatar                 from '../../../styles/assets/imgs/users/chris.png'

export default class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			filter: {
				post: 1,
				category: 1,
				country: "1",
			},
			user : {
				name: " David Copper",
				progress: 57,
				avatar: avatar
			},
			dropdownMenu: {
				open: false,
			},
			collapseOpen: false,
		}
	}

	handleSelectPost = (event, index, value) => {
		this.setState(state => { state.filter.post = value })
	}

	handleSelectCategory = (event, index, value) => {
		this.setState(state => { state.filter.category = value })
	}

	handleSelectCountry = (event, index, value) => {
		this.setState(state => { state.filter.country = value })
	}

	handleShowDropdownMenu = (event) => {
		// This prevents ghost click.
		event.preventDefault()

		this.setState({
			dropdownMenu: {
				open: true,
				anchorEl: event.currentTarget,
			}
		})
	}

	handleCloseDropdownMenu = () => {
		this.setState( state => { state.dropdownMenu.open = false })
	}

	handleControlCollapse = () => {
		this.setState( state => { state.collapseOpen = !state.collapseOpen })
	}

	render() {
		return (
			<HeaderComponent
				dataFilter={this.state.filter}
				handleSelectPost={this.handleSelectPost}
				handleSelectCategory={this.handleSelectCategory}
				handleSelectCountry={this.handleSelectCountry}
				handleCreatePost={this.handleCreatePost}
				dataUser={this.state.user}
				stateDropdownMenu={this.state.dropdownMenu}
				handleShowDropdownMenu={this.handleShowDropdownMenu}
				handleCloseDropdownMenu={this.handleCloseDropdownMenu}
				collapseOpen={this.state.collapseOpen}
				handleControlCollapse={this.handleControlCollapse}
			/>
		)
	}
}