import React from 'react';
import Image from '../Image';
import Skeleton from '../Skeleton';

const Normal = ({ response, isLoading }) => {
	return (
		<div className="masonry-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
			{isLoading ? (
				<Skeleton item={10} />
			) : (
				response.map((data, key) => (
					<div key={key}>
						<Image data={data} />
					</div>
				))
			)}
		</div>
	);
};

export default Normal;
