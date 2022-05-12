import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

globalStyle('div[data-disabled]', {
	color: '#999',
	pointerEvents: 'none',
});

export const buttonStyle = style({
	all: 'unset',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '35px',
	height: '35px',
	margin: theme.margins.xs,
	fontFamily: 'inherit',
	color: theme.colors.black,
	backgroundColor: 'white',
	borderRadius: '100%',
	boxShadow: `0 2px 10px ${theme.colors.black}`,
	outline: 'none',
	cursor: 'pointer',
	':hover': {
		backgroundColor: theme.colors.lightGray,
	}
});

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

export const labelStyle = style({
	paddingLeft: 25,
	fontSize: 12,
	lineHeight: '25px',
	color: theme.colors.darkGray,
	cursor: 'default',
});

export const separatorStyle = style({
	height: 1,
	backgroundColor: theme.colors.darkGray,
	margin: 5,
});

export const arrowStyle = style({
	fill: '#FFF'
});