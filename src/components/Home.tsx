import picture from "./../assets/pngtree-money-clipart-cartoon-paper-money-burlap-bag-clipart-elements-png-image_2410176.jpg";
const Home = () => {
	return (
		<section
			id="home"
			className="relative"
		>
			<div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-3xl opacity-30 overflow-hidden rounded-full">
				{" "}
			</div>
			<div className="w-80 h-80 bg-color-secondary absolute bottom-0 right-0 overflow-hidden -z-10 blur-3xl opacity-30 rounded-full"></div>
			<div className="container py-20 mx-auto">
				<div className="flex flex-col items-center z-20 md:flex-row ">
					<div className="text-center mb-12 md:text-left p-4 md:w-1/2 md:pr-10">
						<h1 className="text-3xl md:text-4xl font-bold leading-snug">Awesome App for Your Financial.</h1>
						<p className="leading-relaxed mb-10">
							This should be used to tell a story and let your users know a little more about app and it's use,
							How can benefit them.
						</p>
						<button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
							Download app
						</button>
					</div>
					<div className="flex justify-center md:w-1/2">
						<img
							className="background-transparent object-cover border -z-1"
							src={picture}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
