import React                         from 'react'
import PropTypes                     from 'prop-types'
import { Link }                      from 'react-router'

import SelectField                   from 'material-ui/SelectField'
import MenuItem                      from 'material-ui/MenuItem'
import Badge                         from 'material-ui/Badge'
import IconButton                    from 'material-ui/IconButton'
import NotificationsIcon             from 'material-ui/svg-icons/social/notifications'
import Popover                       from 'material-ui/Popover'
import Menu                          from 'material-ui/Menu'

import HeaderSearch                  from './HeaderSearch.Container'
import CreatePost                    from '../../__common/CreatePost'
import AvatarProgress                from '../../__common/AvatarProgress'

import { COUNTRIES }                 from '../../../constants/constants'
import { getClassName }              from '../../__utilities'

import logo                          from '../../../styles/assets/imgs/logos/logo.png'

const countriesItems = []
for(var index in COUNTRIES) { 
	countriesItems.push(
		<MenuItem
			className={`icon_flag icon_flag_${COUNTRIES[index].flag}`}
			value={index} 
			key={index} 
			primaryText={COUNTRIES[index].name} 
			label={<span className={`selected_flag icon_flag_${COUNTRIES[index].flag}`}>{COUNTRIES[index].name}</span>} 
		/>
	)
}

const HeaderComponent = ({
	dataFilter, 
	handleSelectPost, 
	handleSelectCategory, 
	handleSelectCountry, 
	handleCreatePost, 
	dataUser, 
	stateDropdownMenu, 
	handleShowDropdownMenu, 
	handleCloseDropdownMenu,
	collapseOpen,
	handleControlCollapse
}) => {
	return (
		<header className="header clearfix">
			<div className="header__group header__group--search float_left">
				<Link to="/" id="logo">
					<img src={logo} alt="logo"/>
				</Link>

				<HeaderSearch />
			</div>

			<div className="header__collapse__control">
				<IconButton onTouchTap={handleControlCollapse}><i className="material-icons">{collapseOpen ? "close" : "menu"}</i></IconButton>
			</div>

			<div className={getClassName({in: collapseOpen}, "header__collapse collapse clearfix float_right")}>
				<div className="header__group header__group--function float_right">
					<CreatePost />

					<Badge
						badgeContent={10}
						secondary={true}
						style={{padding: '2px', margin: '0 0rem 0 1rem'}}
						badgeStyle={{top: 30, right: 28, background: '#e26a73', width: "20px", height: "20px", "fontSize": "11px" }}
					>
						<IconButton>
							<NotificationsIcon className="notifications" />
						</IconButton>
					</Badge>
					<button className="header__group__username" onTouchTap={handleShowDropdownMenu}>
						{ dataUser.name }
					</button>
					<AvatarProgress src={dataUser.avatar} progress={dataUser.progress} size="48px" />
					<Popover
						className="header__group__dropdownmenu"
						open={stateDropdownMenu.open}
						anchorEl={stateDropdownMenu.anchorEl}
						anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
						targetOrigin={{horizontal: 'left', vertical: 'top'}}
						onRequestClose={handleCloseDropdownMenu}
					>
						<Menu>
							<MenuItem><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">notifications</i>Notifications</Link></MenuItem>
							<MenuItem><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">sms</i>Blog</Link></MenuItem>
							<MenuItem><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">account_circle</i>My Profile</Link></MenuItem>
							<MenuItem><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">mail_outline</i>Transactions</Link></MenuItem>
							<MenuItem className="divider"><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">settings</i>Settings</Link></MenuItem>
							<MenuItem><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">question_answer</i>Support</Link></MenuItem>
							<MenuItem className="divider"><Link onClick={handleCloseDropdownMenu} to="#"><i className="material-icons">power_settings_new</i>Sign Out <span>Switch User</span></Link></MenuItem>
						</Menu>
					</Popover>
				</div>

				<div className="header__group header__group--filter float_right">
					<div className="select_wrapper">
						<SelectField
							value={dataFilter.post}
							onChange={handleSelectPost}
							className="select_filter"
							maxHeight={400}
							fullWidth={true}
							autoWidth={true}
						>
							<MenuItem value={1} key={1} primaryText="all posts" />
							<MenuItem value={2} key={2} primaryText="my posts" />
						</SelectField>
					</div>
					<div className="select_wrapper">
						<SelectField
							value={dataFilter.category}
							onChange={handleSelectCategory}
							className="select_filter"
							maxHeight={400}
							fullWidth={true}
							autoWidth={true}
						>
							<MenuItem value={1} key={1} primaryText="videos only" />
							<MenuItem value={2} key={2} primaryText="articles only" />
						</SelectField>
					</div>
					<div className="select_wrapper select_wrapper--country">
						<SelectField
							value={dataFilter.country}
							onChange={handleSelectCountry}
							className="select_filter"
							fullWidth={true}
							autoWidth={true}
						>
							{countriesItems}
						</SelectField>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderComponent
 
HeaderComponent.propTypes = {
	dataFilter: PropTypes.object, // object save data filter
	handleSelectPost: PropTypes.func, // handle filter after select Category
	handleSelectCategory: PropTypes.func, // handle filter after select Category
	handleSelectCountry: PropTypes.func, // handle filter after select Country
	handleCreatePost: PropTypes.func, // handle create post
	dataUser: PropTypes.object, 
	stateDropdownMenu: PropTypes.object, // save all state of Dropdown Menu
	handleShowDropdownMenu: PropTypes.func, 
	handleCloseDropdownMenu: PropTypes.func,
	collapseOpen: PropTypes.bool, // control open or close menu on mobile
	handleControlCollapse: PropTypes.func, // toggle menu on mobile
}