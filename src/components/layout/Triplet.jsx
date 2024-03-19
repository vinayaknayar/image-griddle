import React from 'react';
import Image from '../Image';
import Skeleton from '../Skeleton';

const Triplet = ({ response, isLoading }) => {
	return (
		<div className="mt-4">
			{isLoading ? (
				<Skeleton item={10} />
			) : (
				Array.from({ length: Math.ceil(response.length / 3) }, (_, index) => (
					<div key={index} className="mb-2">
						<div className="flex gap-2 justify-center mx-4">
							<div>
								{index * 3 < response.length && <Image key={index * 3} data={response[index * 3]} />}
							</div>
							<div>
								<div className="mb-2">
									{index * 3 + 1 < response.length && <Image key={index * 3 + 1} data={response[index * 3 + 1]} />}
								</div>
								<div className="image-container">
									{index * 3 + 2 < response.length && <Image key={index * 3 + 2} data={response[index * 3 + 2]} />}
								</div>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Triplet;
