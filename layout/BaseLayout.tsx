import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
interface BaseLayoutProps { children: React.ReactNode; }

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return <div><nav>nav</nav>{children}<ToastContainer /></div>;
};


export const getBaseLayout = (page: React.ReactNode) => <BaseLayout>{page}</BaseLayout>;