import type { AppProps } from 'next/app';
import { themeClass } from '../styles/theme/theme.css';
import { PageWithLayout } from '../types/PageWithLayout';

import '../styles/theme/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);

	return (
		<div className={themeClass}>
			{getLayout(< Component {...pageProps} />)}
		</div>
	);
}

export default MyApp;