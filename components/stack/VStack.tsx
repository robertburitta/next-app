import React, { forwardRef } from 'react';
import { Stack, StackProps } from "./Stack";

type VStackProps = Omit<StackProps, 'direction'>;

export const VStack = forwardRef<HTMLDivElement, VStackProps>((props, ref) => {
	return (
		<Stack ref={ref} direction="column"{...props} />
	);
});

VStack.displayName = "VStack";
