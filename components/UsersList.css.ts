import { style } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

export const tableStyle = style({
	textAlign: 'left',
	borderCollapse: 'collapse'
});

export const tableRow = style({
	':hover': {
		backgroundColor: theme.colors.lightGray
	}
});

export const tableCol = style({
	padding: theme.paddings.xs
});