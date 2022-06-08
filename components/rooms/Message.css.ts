import { style } from '@vanilla-extract/css';
import { theme } from "../../styles/theme/theme.css";

export const contentStyle = style({
	minWidth: 220,
	backgroundColor: 'white',
	borderRadius: 6,
	padding: 5,
	boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
});

export const itemStyle = style({
	all: 'unset',
	fontSize: 13,
	lineHeight: 1,
	color: theme.colors.blue,
	borderRadius: 3,
	display: 'flex',
	alignItems: 'center',
	height: 25,
	padding: '0 5px',
	position: 'relative',
	paddingLeft: 25,
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#1D4F83',
		color: '#FFF'
	},
});

export const arrowStyle = style({
	fill: '#FFF'
});