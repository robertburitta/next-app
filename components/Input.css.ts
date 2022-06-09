import { style } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

export const inputStyle = style({
	width: '100%',
	padding: theme.paddings.md,
	color: theme.colors.black,
	outline: 'none',
	border: `${theme.borders.xs} solid ${theme.colors.lightGray}`,
	borderRadius: theme.borderRadius.xs,
	':focus': {
		border: `${theme.borders.xs} solid ${theme.colors.blue}`
	}
});

export const roundedInputStyle = style({
	borderRadius: theme.borderRadius.lg
});

export const labelStyle = style({
	display: 'block',
	width: '100%',
	marginBottom: theme.margins.xl
});

export const errorStyle = style({
	display: 'block',
	fontSize: '14px',
	textAlign: 'center',
	color: theme.colors.red
});