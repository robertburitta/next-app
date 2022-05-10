import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { themeClass } from '../styles/theme/theme.css';
import { PageWithLayout } from '../types/PageWithLayout';
import { Provider } from 'react-redux';
import store from '../store';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/theme/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	const getLayout = (Component as PageWithLayout).getLayout || ((page) => page);

	return (
		<Provider store={store}>
			<div className={themeClass}>
				{getLayout(< Component {...pageProps} />)}
				<ToastContainer autoClose={2000} />
			</div>
		</Provider>
	);
}

export default MyApp;