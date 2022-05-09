import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

export const list = style({
	margin: theme.margins.sm,
	listStyleType: 'decimal'
});

export const listItem = style({
	margin: theme.margins.sm
});

export const paragraph = style({
	display: 'inline-block',
	margin: 0
});