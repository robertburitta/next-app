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

export const sendMessage = style({
	display: 'flex',
	alignItems: 'flex-start'
});

export const input = style({
	marginBottom: 0
});

export const button = style({
	width: '44px',
	height: 'auto',
	marginLeft: theme.margins.md,
	marginBottom: theme.margins.xl,
	padding: '10px',
	color: theme.colors.black,
	backgroundColor: 'lightblue',
	borderRadius: theme.borderRadius.lg,
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#6db4cb',
	}
});