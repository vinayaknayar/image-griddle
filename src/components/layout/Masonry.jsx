import React from 'react';
import Image from '../Image';
import Skeleton from '../Skeleton';

const Masonry = ({ response, isLoading }) => {
	const getRandomSize = () => {
		const sizes = ["small", "medium", "large"];
		const randomIndex = Math.floor(Math.random() * sizes.length);
		return sizes[randomIndex];
	};

	return (
		<div className="masonry-container mx-4">
			{isLoading ? (
				<Skeleton item={10} />
			) : (
				response.map((data, key) => (
					<div key={key} className={`masonry-item ${getRandomSize()}`}>
						<Image data={data} />
					</div>
				))
			)}
		</div>
	);
};

export default Masonry;
