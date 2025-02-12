export const OwnProjectsItem = ({ title, icon, subtitle, href, ...otherProps }) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noreferrer'
			{...otherProps}
			className='flex flex-row justify-start items-center p-4 m-2 hover:bg-[#141d3b] white-gradient text-white transition duration-300 md:w-9/12 max-w-screen-lg md:h-[175px] mf:h-[150px]'>
			<img src={icon} alt={`${title} icon`} className={`w-10 h-10 flex justify-center items-center`} />
			<div className='mx-5 flex flex-col flex-1'>
				<h2 className='mt-2 text-white text-lg'>{title}</h2>
				<p className='my-2 text-white text-sm'>{subtitle}</p>
			</div>
		</a>
	);
};
