import { style } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

export const inputStyle = style({
	width: '100%',
	padding: `${theme.paddings.md} ${theme.paddings.sm}`,
	color: theme.colors.black,
	outline: 'none',
	border: `${theme.borders.xs} solid ${theme.colors.lightGray}`,
	borderRadius: theme.borderRadius.xs,
	':focus': {
		border: `${theme.borders.xs} solid ${theme.colors.blue}`
	}
});

export const labelStyle = style({
	display: 'block',
	marginBottom: theme.margins.xl
});

export const errorStyle = style({
	color: theme.colors.red
});