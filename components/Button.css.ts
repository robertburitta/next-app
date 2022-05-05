import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

const base = style({
	width: '100%',
	height: '40px',
	marginBottom: theme.margins.xs,
	color: theme.colors.white,
	outline: 'none',
	border: `${theme.borders.xs} solid ${theme.colors.lightGray}`,
	borderRadius: theme.borderRadius.xs,
	cursor: 'pointer',
});

export const variants = styleVariants({
	green: [base, {
		background: theme.colors.green,
		':hover': {
			background: theme.colors.greenHover
		}
	}],
	blue: [base, {
		background: theme.colors.blue,
		':hover': {
			background: theme.colors.blueHover
		}
	}]
});

export type ButtonVariant = keyof typeof variants;