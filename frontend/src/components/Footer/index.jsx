import React, { Component } from 'react'
import './index.less'

export default class Footer extends Component {
	render() {
		// console.log(styles);
		return (
			<div className="Footer-container">
				©<span>Copyright</span>
				<span>2017-2019</span>
				<span>
					<b>pipk.top</b>
				</span>
			</div>
		)
	}
}
