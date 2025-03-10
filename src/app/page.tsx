import Image from "next/image";
import Header from "./Header";

export default function Home() {
	return (
		<>
			<Header></Header>
			<main className="flex flex-col">
				<div className="flex flex-col h-screen bg-white xl:flex-row-reverse lg:w-full lg:h-auto lg:mb-32 md:items-center lg:justify-center max-w-[82rem] mx-auto lg:mt-20">
					<div className="overflow-hidden sm:self-center">
						<Image
							src="/illustration-working.svg"
							alt="A person working in a computer illustration"
							width={733}
							height={482}
							priority
							className="w-[32rem] max-w-none ml-6 mb-8 lg:m-0 lg:w-[35rem]"
						/>
					</div>
					<div className="flex flex-col gap-6 text-center xl:text-start items-center max-w-[44rem] xl:items-start lg:gap-0">
						<h2 className="text-5xl font-bold tracking-tight text-dark_blue md:text-7xl">
							More than just shorter links
						</h2>
						<p className="text-base text-violet-grayish max-w-sm">
							Build your brand&apos;s recognition and get detailed
							insights on how your links are performing
						</p>
						<button className="bg-cyan text-white font-bold w-fit text-xl p-4 px-6 rounded-full lg:mt-6 lg:text-lg">
							Get Started
						</button>
					</div>
				</div>
				<div className="bg-[#f0f1f6]">
					<div className="bg-[url('/bg-shorten-mobile.svg')] mx-6 p-6 bg-no-repeat bg-violet-dark rounded-xl bg-right-top -translate-y-1/2 md:bg-[url('/bg-shorten-desktop.svg')] lg:bg-center lg:bg-cover lg:p-12 lg:mx-auto max-w-[80rem]">
						<form
							action=""
							className="flex flex-col gap-4 lg:grid lg:grid-flow-col lg:[grid-template-columns:75%_25%]"
						>
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

					<div className="flex flex-col items-center ">
						<div className="flex flex-col gap-4 text-center p-6 mb-16 max-w-lg">
							<h3 className="text-3xl text-dark_blue font-bold">
								Advanced Statistics
							</h3>
							<p className="text-violet-grayish ">
								Track how your links are performing across the
								web with our advanced statics dashboard
							</p>
						</div>
						<section className="flex flex-col lg:flex-row lg:pb-28 lg:mx-4">
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
										click. Generic links don&apos; mean a
										thing. Branded links help instil
										confidence in your content.
									</p>
								</div>
								<div className="Vl"></div>
							</div>
							<div className="Cmid ">
								<div className="Card lg:translate-y-12">
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
										links. Knowing when and where people
										engage with your content helps inform
										better decisions.
									</p>
								</div>
								<div className="Vl"></div>
							</div>
							<div className="Cbot ">
								<div className="Card lg:translate-y-24">
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
										discoverability through customizable
										links, supercharging audience engagement
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
			<article className="py-24 flex flex-col items-center gap-4 text-white bg-[url('/bg-boost-mobile.svg')] bg-violet-dark bg-no-repeat md:bg-[url('/bg-boost-desktop.svg')] bg-cover">
				<h2 className="font-bold text-2xl">Boost your links today</h2>
				<button className="bg-cyan  font-bold w-fit self-center text-xl p-4 px-6 rounded-full">
					Get Started
				</button>
			</article>
			<footer className="bg-violet-very_dark text-white flex flex-col items-center p-8 lg:flex-row lg:justify-around lg:items-start">
				<h1 className="text-3xl font-bold mb-10 lg:p-8">Shortly</h1>
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
