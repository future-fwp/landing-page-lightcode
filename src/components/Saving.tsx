import React from "react";

const Saving = () => {
	return (
		<section id="saving-money">
			<div className="container py-20 relative mx-auto">
				<div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-3xl opacity-30 overflow-hidden rounded-full"></div>
				<div className="w-80 h-80 bg-color-secondary absolute bottom-0 -right-5 overflow-hidden -z-10 blur-3xl opacity-30 rounded-full"></div>
				<div className="flex flex-col items-center justify-between md:flex-row">
					<div className="mb-12 md:w-1/2 ">
						<img
							src="https://images.unsplash.com/photo-1716393763723-64e389f248fc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
							width={400}
							height={400}
						/>
					</div>
					<div className="text-center">
						<h4 className="font-bold text-color-secondary mb-4 ">Saving more</h4>
						<h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
							Best Financing App To Save Your Money
						</h1>
						<p className="leading-relaxed mb-10">
							Best financing app ever in the world. Easy to use and very user friendly for mobile banking. You
							can control your card easily and send money some one just one click.
						</p>
						<button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
							Read More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Saving;
