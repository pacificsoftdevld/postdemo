import './custom.css'
import './constants/global.constants'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './configureStore'

import App from './components'
import Posts from './components/posts'
import SinglePost from './components/single-post'

import Profile from './components/profile'
import Blog from './components/profile/blog'
import Comments from './components/profile/comments'
import Followers from './components/profile/followers'
import Followings from './components/profile/followings'
import Replies from './components/profile/replies'
import Rewards from './components/profile/rewards'
import Transactions from './components/profile/transactions'
import Votes from './components/profile/votes'
import Wallet from './components/profile/wallet'


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router 
      history={history} 
    >
      <Route path="/" component={ App } >
        <Route path="posts" component={ Posts }/>
        <Route path="posts/:postId" component={ SinglePost }/>
        <Route path="users/:userId/profile" component={ Profile }>
          <Route path="blog" component={ Blog }/>
          <Route path="comments" component={ Comments }/>
          <Route path="followers" component={ Followers }/>
          <Route path="followings" component={ Followings }/>
          <Route path="replies" component={ Replies }/>
          <Route path="rewards" component={ Rewards }/>
          <Route path="transactions" component={ Transactions }/>
          <Route path="votes" component={ Votes }/>
          <Route path="wallet" component={ Wallet }/>
        </Route>
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'))
