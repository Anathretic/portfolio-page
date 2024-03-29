import { ExtraItem } from '../components/ExtraItem';
import { extraData } from '../data/extraData';

const Extras = () => {
	return (
		<div className='flex flex-col w-full justify-center items-center'>
			<div className='flex flex-col items-center justify-between md:p-20 py-12 px-4'>
				<div className='flex-1 flex flex-col justify-start items-start'>
					<h2 className='text-white text-3xl sm:text-5xl py-2 text-gradient text-center'>
						You can also see <br /> some of my own <br />
						projects..
					</h2>
				</div>
			</div>
			<div className='flex-1 flex flex-col justify-start items-center'>
				{extraData.map(data => (
					<ExtraItem
						key={data.id + data.title}
						icon={data.icon}
						title={data.title}
						subtitle={data.subtitle}
						href={data.href}
					/>
				))}
			</div>
		</div>
	);
};

export default Extras;
