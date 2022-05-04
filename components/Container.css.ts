import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

const base = style({
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	margin: '0 auto'
});

export const variants = styleVariants({
	normal: [base],
	center: [base, {
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center'
	}]
});

export const sizes = styleVariants({
	sm: [base, {
		width: '800px'
	}],
	md: [base, {
		width: '1200px'
	}],
	lg: [base, {
		width: '1600px'
	}],
});

export type ContainerVariant = keyof typeof variants;
export type ContainerSizes = keyof typeof sizes;