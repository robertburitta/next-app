import { style } from '@vanilla-extract/css';
import { theme } from "../styles/theme/theme.css";

import { styleVariants } from '@vanilla-extract/css';

const base = style({ padding: 12 });

export const colors = styleVariants({
	base: {},
	white: { color: theme.colors.white }
});

export const variants = styleVariants({
	primary: [base, { background: 'blue' }],
	secondary: [base, { background: 'aqua' }]
});


export type ButtonVariant = keyof typeof variants;
export type ColorType = keyof typeof colors;