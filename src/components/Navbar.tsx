import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({
	showMenuBar,
	setShowMenuBar,
}: {
	showMenuBar: boolean;
	setShowMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<header className="sticky top-0 z-20 bg-color-primary">
			<nav className="container mx-auto flex justify-between items-center">
				<motion.div
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 1.1 }}
					className="w-20 py-5 text-color-secondary font-bold text-3xl"
				>
					<a href="#">
						<span className="text-color-white">Light</span>code.
					</a>
				</motion.div>

				<div>
					<ul className="hidden lg:flex items-center space-x-6">
						<li>
							<a
								href="#home"
								className="hover:text-color-secondary ease-in duration-200"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#features"
								className="hover:text-color-secondary ease-in duration-200"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="/testimonial"
								className="hover:text-color-secondary ease-in duration-200"
							>
								Testimonial
							</a>
						</li>
						<li>
							<a
								href="/pricing"
								className="hover:text-color-secondary ease-in duration-200"
							>
								Pricing
							</a>
						</li>
						<li>
							<a
								href="/blog"
								className="hover:text-color-secondary ease-in duration-200"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="/contact"
								className="hover:text-color-secondary ease-in duration-200"
							>
								Contact
							</a>
						</li>
						<li>
							<button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
								free trial
							</button>
						</li>
					</ul>

					<div
						className="lg:hidden cursor-pointer"
						onClick={() => {
							setShowMenuBar((prev) => !prev);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="white"
							className="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</div>

					{/* {showMenuBar && (
						
					)} */}
					{showMenuBar && (
						<div className="lg:hidden bg-color-primary-dark h-[100vh] absolute inset-0 z-20 overflow-y-hidden ">
							<div
								className=" cursor-pointer absolute right-24 top-8"
								onClick={() => {
									setShowMenuBar((prev) => !prev);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="white"
									className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</div>
							<ul className="h-full grid place-items-center py-20">
								<li>
									<a
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
										className="hover:text-color-secondary ease-in duration-200"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="/features"
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
										className="hover:text-color-secondary ease-in duration-200"
									>
										Features
									</a>
								</li>
								<li>
									<a
										href="/testimonial"
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
										className="hover:text-color-secondary ease-in duration-200"
									>
										Testimonial
									</a>
								</li>
								<li>
									<a
										href="/pricing"
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
										className="hover:text-color-secondary ease-in duration-200"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="/blog"
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
										className="hover:text-color-secondary ease-in duration-200"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="/contact"
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
										className="hover:text-color-secondary ease-in duration-200"
									>
										Contact
									</a>
								</li>
								<li>
									<button
										className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200"
										onClick={() => {
											setShowMenuBar((prev) => !prev);
										}}
									>
										free trial
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
