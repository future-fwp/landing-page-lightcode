import React from "react";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

const App = () => {
	const [showMenuBar, setShowMenuBar] = React.useState<boolean>(false);
	document.body.style.overflow = showMenuBar ? "hidden" : "auto";

	return (
		<div>
			<Navbar
				showMenuBar={showMenuBar}
				setShowMenuBar={setShowMenuBar}
			/>
			<Hero />
			{/* <About />

			<Experience />
			<Hero /> */}
		</div>
	);
};

export default App;
