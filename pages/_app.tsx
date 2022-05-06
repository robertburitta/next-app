import type { AppProps } from 'next/app';
import { themeClass } from '../styles/theme/theme.css';
import { PageWithLayout } from '../types/PageWithLayout';
import { Provider } from 'react-redux';
import store from '../store';

import '../styles/theme/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);

	return (
		<Provider store={store}>
			<div className={themeClass}>
				{getLayout(< Component {...pageProps} />)}
			</div>
		</Provider>
	);
}

export default MyApp;