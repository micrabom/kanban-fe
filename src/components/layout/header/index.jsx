import React from 'react'
import { HeaderWrapper } from './style'
import { Navbar } from '../../navbar'
import ResponsiveAppBar from '../../appbar'

export const Header = () => {
	return (
		<HeaderWrapper>
			<Navbar/>
			{/* <ResponsiveAppBar /> */}
		</HeaderWrapper>
	)
}
