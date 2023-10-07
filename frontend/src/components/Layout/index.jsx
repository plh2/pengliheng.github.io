import React from 'react'
import './index.less'

// import Header from '../Header';
import Side from '@/components/Side'
import Footer from '@/components/Footer'

export default ({ children }) => (
	<div className="Layout__container">
		{/* <Header /> */}
		<div className="Layout__content">
			<Side />
			<div className="Layout__body">{children}</div>
		</div>
		<Footer />
	</div>
)
