import { globalStyle, style } from '@vanilla-extract/css';
import { theme } from "../../styles/theme/theme.css";

globalStyle('button.roomCreate[data-state="closed"]', {
	borderRadius: theme.borderRadius.md,
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

export const trigger = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1,
	width: '100%',
	height: '45px',
	padding: '0 20px',
	backgroundColor: theme.colors.white,
	border: 'none',
	borderBottom: `1px solid ${theme.colors.lightGray}`,
	borderRadius: '12px 12px 0 0',
	cursor: 'pointer',
});

export const content = style({
	flexGrow: 1,
	padding: theme.paddings.xl
});