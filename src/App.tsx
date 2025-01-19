import React from "react";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import About from "./components/About";
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
