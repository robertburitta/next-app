import { style, styleVariants, createVar } from "@vanilla-extract/css";

export const spacing = createVar();

export const root = style({
	display: 'flex',
	gap: spacing
});


export const directions = styleVariants({
	row: { flexDirection: 'row' },
	column: { flexDirection: 'column' }
});

export const aligns = styleVariants({
	center: { alignItems: 'center' },
	start: { alignItems: 'flex-start' },
	end: { alignItems: 'flex-end' },
	stretch: { alignItems: 'stretch' }
});

export const justifies = styleVariants({
	center: { justifyContent: 'center' },
	start: { justifyContent: 'flex-start' },
	end: { justifyContent: 'flex-end' },
	'space-between': { justifyContent: 'space-between' }
});