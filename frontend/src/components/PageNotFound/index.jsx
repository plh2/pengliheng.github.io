import React from 'react'
import './index.less'
import NotFoundSvg from '@/ASSETS/404_img.svg'

export default () => (
	<div className="PageNotFound">
		<img alt="not_found" src={NotFoundSvg} />
	</div>
)
