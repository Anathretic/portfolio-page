export const scrollToTop = () => {
	const body = document.querySelector('#root');
	body.scrollIntoView({
		behavior: 'auto',
	});
};
