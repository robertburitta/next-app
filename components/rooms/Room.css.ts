import { style } from '@vanilla-extract/css';
import { theme } from "../../styles/theme/theme.css";

export const list = style({
	padding: 0,
	listStyle: 'none'
});

export const author = style({
	color: theme.colors.darkGray
});