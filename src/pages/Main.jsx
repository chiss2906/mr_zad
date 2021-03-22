import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HOUSES} from '../constants'

const Window = styled.div`
	width: 50%;
	height: 50%;
	background: url('https://picsum.photos/1024') no-repeat center;
`

const Box = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	color: white;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2em;
	width: 100%;
	height: 100%;
`

const Main = () => (
	<Box>
		<Window>
			<Content>
				<h2>Lorem ipsum</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<Link to={HOUSES}>Zobacz więcej</Link>
			</Content>
		</Window>
		<Window>
			<Box>
				<Window></Window>
				<Window></Window>
				<Window></Window>
				<Window></Window>
			</Box>
		</Window>
		<Window></Window>
		<Window>
			<Content>
				<h2>Lorem ipsum</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<Link to={HOUSES}>Zobacz więcej</Link>
			</Content>
		</Window>
	</Box>
)
export default Main
