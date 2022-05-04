import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

const base = style({
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	height: '50px',
	padding: '0 20px',
	fontSize: '20px',
	lineHeight: '18px'
});

export const variants = styleVariants({
	primary: [base, {
		background: theme.colors.lightGray,
		color: theme.colors.black
	}],
	secondary: [base, {
		background: theme.colors.darkGray,
		color: theme.colors.white
	}]
});

export type ButtonVariant = keyof typeof variants;