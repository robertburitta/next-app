import React from 'react';
import { Stack } from "../components/stack/Stack";
const TestPage = () => {
	return (
		<Stack divider={"/"} direction='row' spacing={5}>

			asChild
			<div>
				tekst w divie
			</div>
			<div>
				tekst w divie
			</div>
			123
			<div>
				tekst w divie
			</div>
		</Stack>
	);
};

export default TestPage;