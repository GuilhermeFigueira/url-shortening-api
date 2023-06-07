import Image from "next/image";

export default function Home() {
	return (
		<>
			<header className="w-screen py-8 px-6 flex flex-row justify-between ">
				<h1 className="font-bold text-4xl text-dark_blue">Shortly</h1>
				{/* nav */}
			</header>
			<main className="flex flex-col ">
				<div className="flex flex-col gap-6 h-screen bg-white overflow-hidden">
					<Image
						src="/illustration-working.svg"
						alt="A person working in a computer illustration"
						width={733}
						height={482}
						priority
						className="w-[32rem] max-w-none ml-6 mb-8 "
					/>
					<h2 className="text-5xl font-bold tracking-tight text-dark_blue text-center">
						More than just shorter links
					</h2>
					<p className="text-center text-base text-violet-grayish">
						Build your brand&apos;s recognition and get detailed
						insights on how your links are performing
					</p>
					<button className="bg-cyan text-white font-bold w-fit self-center text-xl p-4 px-6 rounded-full">
						Get Started
					</button>
				</div>
				<div className="bg-[#f0f1f6]">
					<div className="bg-[url('/bg-shorten-mobile.svg')] mx-6 p-6 bg-no-repeat bg-violet-dark rounded-xl bg-right-top -translate-y-1/2">
						<form action="" className="flex flex-col gap-4 ">
							<input
								type="text"
								placeholder="Shorten a link here..."
								className="p-3 rounded-lg"
							/>
							<button className="p-3 rounded-lg bg-cyan text-lg text-white font-bold">
								Shorten It!
							</button>
						</form>
					</div>

					<div>
						<div className="flex flex-col gap-4 text-center p-6 mb-16">
							<h3 className="text-3xl text-dark_blue font-bold">
								Advanced Statistics
							</h3>
							<p className="text-violet-grayish ">
								Track how your links are performing across the
								web with our advanced statics dashboard
							</p>
						</div>

						<div className="Ctop">
							<div className="Card">
								<div className="ImgBg">
									<Image
										src="/icon-brand-recognition.svg"
										alt="A graphic chart going up icon"
										height={40}
										width={40}
									/>
								</div>
								<h4>Brand Recognition</h4>
								<p>
									Boost your brand recognition with each
									click. Generic links don&apos; mean a thing.
									Branded links help instil confidence in your
									content.
								</p>
							</div>
							<div className="Vl"></div>
						</div>
						<div className="Cmid">
							<div className="Card">
								<div className="ImgBg">
									<Image
										src="/icon-detailed-records.svg"
										alt="A velocimeter with the pointer on the middle icon"
										height={40}
										width={40}
									/>
								</div>
								<h4>Detailed Records</h4>
								<p>
									Gain insights into who is clicking your
									links. Knowing when and where people engage
									with your content helps inform better
									decisions.
								</p>
							</div>
							<div className="Vl"></div>
						</div>
						<div className="Cbot">
							<div className="Card">
								<div className="ImgBg">
									<Image
										src="/icon-fully-customizable.svg"
										alt="Painting utensils icon"
										height={48}
										width={48}
									/>
								</div>
								<h4>Fully Customizable </h4>
								<p>
									Improve brand awareness and content
									discoverability through customizable links,
									supercharging audience engagement
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<article className="py-24 flex flex-col items-center gap-4 text-white bg-[url('/bg-boost-mobile.svg')] bg-violet-dark bg-no-repeat">
				<h2 className="font-bold text-2xl">Boost your links today</h2>
				<button className="bg-cyan  font-bold w-fit self-center text-xl p-4 px-6 rounded-full">
					Get Started
				</button>
			</article>
			<footer className="bg-violet-very_dark text-white flex flex-col items-center p-8">
				<h1 className="text-3xl font-bold mb-10">Shortly</h1>
				<div className="FooterP">
					<h4>Features</h4>
					<span>Link Shortening</span>
					<span>Branded Links</span>
					<span>Analytics</span>
				</div>
				<div className="FooterP">
					<h4>Resources</h4>
					<span>Blog</span>
					<span>Developers</span>
					<span>Support</span>
				</div>
				<div className="FooterP">
					<h4>Company</h4>
					<span>About</span>
					<span>Our Team</span>
					<span>Careers</span>
					<span>Contact</span>
				</div>
				<div className="flex flex-row gap-8 p-8">
					<Image
						width={24}
						height={24}
						src="/icon-facebook.svg"
						alt="Facebook icon"
					/>
					<Image
						width={24}
						height={20}
						src="/icon-twitter.svg"
						alt="Twitter icon"
					/>
					<Image
						width={24}
						height={24}
						src="/icon-pinterest.svg"
						alt="Pinterest icon"
					/>
					<Image
						width={24}
						height={24}
						src="/icon-instagram.svg"
						alt="Instagram icon"
					/>
				</div>
			</footer>
		</>
	);
}
