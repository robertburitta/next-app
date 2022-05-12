export const Routes = {
	HOME: '/',
	ABOUT: '/about',
	POST: (id: number) => '/post/' + id
};



Routes.POST(2);