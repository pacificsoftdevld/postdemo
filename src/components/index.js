import React                    from 'react'
import PropTypes                from 'prop-types'
import { connect }              from 'react-redux'
import MuiThemeProvider         from 'material-ui/styles/MuiThemeProvider'

import { Header }               from './__layout/header'
import { LeftSidebar }          from './__layout/left_sidebar'
import { RightSidebar }         from './__layout/right_sidebar'

const AppComponent = ({children}) => {
	return (
		<MuiThemeProvider>
			<div id="app_container">
				<Header />
				<LeftSidebar />
				<RightSidebar />
				<div id="app_content">
					<div className="content__inner">
						{children}
					</div>
				</div>
			</div>
		</MuiThemeProvider>
	)
}

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			collapseIn: false
		}
	}

	handleControlNav = () => {
		this.setState((state) => {
			state.collapseIn = !this.state.collapseIn
		})
	}

	render() {
		return (
			<AppComponent children={this.props.children} />
		)
	}
}

App.propTypes = {
	children: PropTypes.node,
}

export default connect()(App)