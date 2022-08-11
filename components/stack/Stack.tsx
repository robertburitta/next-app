import React, { forwardRef } from 'react';
import * as styles from './Stack.css';
import { getValidChildren } from "../../utils/getValidChildren";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { space } from "../../styles/theme/space";
export interface StackProps {
	divider?: React.ReactNode;
	align?: keyof typeof styles.aligns;
	justify?: keyof typeof styles.justifies;
	direction?: keyof typeof styles.directions;
	spacing?: number;
}


export const Stack = forwardRef<HTMLDivElement, React.PropsWithChildren<StackProps>>(
	({ divider, children, align = 'stretch', justify = 'start', direction, spacing = 0 }, ref) => {
		const hasDivader = !!divider;
		const validChildrens = getValidChildren(children);

		const clones = hasDivader ? validChildrens.map((child, idx) => {
			const isLast = idx + 1 === validChildrens.length;
			const _divider = isLast ? null : divider;

			return (<React.Fragment key={idx}>
				{child}{_divider}
			</React.Fragment>);

		}) : validChildrens;

		return (
			<div ref={ref}
				className={`${styles.root} ${styles.aligns[align]} ${direction ? styles.directions[direction] : ''} ${styles.justifies[justify]}`}
				style={assignInlineVars({ [styles.spacing]: space(spacing) })}
			>
				{clones}
			</div>
		);
	});

Stack.displayName = "Stack";