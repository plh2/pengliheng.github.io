import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// local
import App from '@/App'
import '@/common/index.less'
import '@/common/markdown.css'
import '@/ASSETS/font-icons/fonts.less'
import store from '@/redux-relate/store'
// import 'github-markdown-css'
// lazy(import('github-markdown-css'))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
