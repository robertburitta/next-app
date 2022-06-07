import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from "../../styles/theme/theme.css";

globalStyle('.selectedTab', {
	backgroundColor: `${theme.colors.lightGray} !important`
});

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'center',
	width: '400px',
	margin: '30px 0',
	borderRadius: theme.borderRadius.md,
	boxShadow: `0 0 10px ${theme.colors.darkGray}`
});

export const list = style({
	display: 'flex',
	flexShrink: 0,
	borderBottom: `1px solid ${theme.colors.lightGray}`
});

export const trigger = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1,
	height: '45px',
	padding: '0 20px',
	backgroundColor: theme.colors.white,
	cursor: 'pointer',
	border: 'none',
	':hover': {
		backgroundColor: theme.colors.lightGray
	},
	':first-child': {
		borderTopLeftRadius: theme.borderRadius.md
	},
	':last-child': {
		borderTopRightRadius: theme.borderRadius.md
	}
});


export const content = style({
	flexGrow: 1,
	padding: theme.paddings.xl
});