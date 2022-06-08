import { style } from '@vanilla-extract/css';
import { theme } from "../../styles/theme/theme.css";

export const list = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: 0,
	listStyle: 'none'
});

export const author = style({
	color: theme.colors.darkGray
});

export const message = style({
	display: 'inline-block',
	margin: '2px 0',
	padding: '4px 10px 5px',
	backgroundColor: 'lightblue',
	borderRadius: theme.borderRadius.lg,
	cursor: 'pointer'
});