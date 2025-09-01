"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	const [text, setText] = useState("");

	const createTree = () => {
		router.push(`/generate?handle=${text}`);
	};

	return (
		<main>
			{/* Hero Section */}
			<section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
				<div className="flex justify-center flex-col ml-[10vw] gap-3">
					<p className="text-yellow-300 font-bold text-7xl">Everything you </p>
					<p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
					<p className="text-yellow-300 font-bold text-7xl">
						simple link in bio.
					</p>
					<p className="text-yellow-300 text-xl my-4">
						Join 50M+ people using Linktree for their link in bio. One link to
						help you share everything you create, curate and sell from your
						Instagram, TikTok, Twitter, YouTube and other social media profiles.
					</p>
					<div className="input flex gap-2">
						<input
							value={text}
							onChange={(e) => setText(e.target.value)}
							className="text-gray-600 px-2 py-2 focus:outline-green-800 rounded-md bg-white"
							type="text"
							placeholder="Enter your Handle"
						/>
						<button
							onClick={() => createTree()}
							className="bg-pink-300 rounded-full px-4 py-4 font-semibold text-black"
						>
							Claim your Bittree
						</button>
					</div>
				</div>
				<div className="flex items-center justify-center flex-col mr-[10vw]">
					<img src="/home.png" alt="homepage image" />
				</div>
			</section>

			{/* Features Section */}
			{/* Features Section */}
			<section className="bg-[#c9ada7] py-45">
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6">
					{/* <!-- Phone Mockup --> */}
					<img width={900} src="/free.png" alt="phone mockup" />
					{/* <!-- Text Content --> */}
					<div className="max-w-lg text-center md:text-left">
						<h2 className="text-6xl font-bold text-[#22223b] leading-snug mb-6">
							Create and customize your LinkNest in minutes
						</h2>
						<p className="text-[#4a4e69] mb-6 font-semibold">
							Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more.
							It all comes together in a link in bio landing page designed to convert.
						</p>
						<button className="mt-8 bg-[#898489] text-[#111] font-bold px-6 py-3 rounded-full hover:bg-white transition"
					onClick={() => createTree()}>
						Get started for free
					</button>
					</div>
				</div>
			</section>


			{/* Third section */}

			<section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-90 py-75 bg-[#7d0b21] text-white">
				{/* Left Content */}
				<div className="max-w-xl">
					<h1 className="text-4xl md:text-5xl font-extrabold text-[#d3a6d8] leading-tight">
						Share your Linktree <br />
						from your Instagram, <br />
						TikTok, Twitter and <br />
						other bios
					</h1>

					<p className="mt-6 text-lg text-gray-200">
						Add your unique Linktree URL to all the platforms and places you find your
						audience. Then use your QR code to drive your offline traffic online.
					</p>

					<button className="mt-8 bg-[#f6aef6] text-[#111] font-bold px-6 py-3 rounded-full hover:bg-white transition"
					onClick={() => createTree()}>
						Get started for free
					</button>
				</div>

				{/* Right Content (Cards) */}
				<img src="/third.png" alt="third-section" />
			</section>

			{/* fourth section */}

			<section className="bg-[#eef5db] px-8 md:px-90 py-60 flex flex-col md:flex-row items-center justify-between">
				{/* Left side cards */}
				<img width={500} src="/fourth.avif" alt="audience-tracking" />

				{/* Right side content */}
				<div className="mt-12 md:mt-0 md:ml-16 max-w-xl">
					<h2 className="text-4xl md:text-5xl font-extrabold text-[#111] leading-tight">
						Analyze your <br /> audience and keep <br /> your followers <br /> engaged
					</h2>
					<p className="mt-6 text-lg text-[#111]">
						Track your engagement over time, monitor revenue and learn what’s
						converting your audience. Make informed updates on the fly to keep them
						coming back.
					</p>
					<button className="mt-8 bg-[#f6aef6] text-[#111] font-bold px-6 py-3 rounded-full hover:bg-white transition"
					onClick={() => createTree()}>
						Get started for free
					</button>
				</div>
			</section>


			{/* Fifth section */}

			<section className="bg-[#7d0b21] pt-20 pb-40 px-6 flex flex-col items-center">
				<h2 className="text-3xl md:text-7xl font-extrabold text-pink-200 mb-15">
					Got questions?
				</h2>

				<div className="w-full max-w-6xl space-y-6">
					{[
						{
							q: "Why do I need a link in bio tool?",
							a: "A link in bio tool helps you share multiple links from a single URL, making it easier for your audience to find all your content.",
						},
						{
							q: "Is Linktree the original link in bio tool?",
							a: "Yes! Linktree was the first link in bio tool, trusted by millions of users worldwide.",
						},
						{
							q: "Can you get paid and sell things from a Linktree?",
							a: "Absolutely! Linktree lets you add payment and store links to sell directly from your page.",
						},
						{
							q: "Is Linktree safe to use on all of my social media profiles?",
							a: "Yes, Linktree is safe and widely accepted across platforms like Instagram, TikTok, Twitter, and more.",
						},
						{
							q: "What makes Linktree better than the other link in bio options?",
							a: "Linktree offers powerful customization, analytics, and integrations that make it stand out.",
						},
						{
							q: "How can I drive more traffic to and through my Linktree?",
							a: "Share your Linktree across all your platforms and use QR codes to bring offline audiences online.",
						},
						{
							q: "How many links should I have on my Linktree?",
							a: "That depends on your goals — but usually, 5–7 key links work best.",
						},
						{
							q: "Do I need a website to use Linktree?",
							a: "No, Linktree acts as your mini-website, so you can get started without one.",
						},
						{
							q: "Where can I download the app?",
							a: "You can download the Linktree app from the App Store or Google Play.",
						},
					].map((item, i) => (
						<details
							key={i}
							className="group bg-[#5c0a18] rounded-xl px-6 py-4 text-white"
						>
							<summary className="cursor-pointer flex items-center justify-between font-medium list-none text-xl">
								{item.q}
								<svg
									className="w-5 h-5 text-pink-200 transition-transform duration-300 group-open:rotate-180"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							</summary>
							<p className="mt-2 text-sm text-gray-200">{item.a}</p>
						</details>
					))}
				</div>
			</section>


			{/* Footer section */}
			<section>
				<div className="bg-purple-800 text-white flex flex-col items-center justify-center px-6 pt-40 pb-50">
					{/* Heading + Input */}
					<div className="text-center mb-16">
						<h1 className="text-6xl font-bold text-purple-200 mb-10">
							Jumpstart your corner of the <br /> internet today
						</h1>
						<div className="flex justify-center gap-5">
							<input
								type="text"
								placeholder="linknest/"
								className="bg-white px-4 py-2 rounded-2xl border-none outline-none text-black w-64"
							/>
							<button
							onClick={() => createTree()}
							className="bg-pink-300 rounded-full px-4 py-4 font-semibold text-black"
						>
							Claim your Bittree
						</button>
						</div>
					</div>

					{/* Footer Links */}
					<div className="bg-white text-black w-full max-w-6xl rounded-xl shadow-lg p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
						{/* Company */}
						<div>
							<h3 className="font-bold mb-4">Company</h3>
							<ul className="space-y-2 text-sm">
								<li>The Linktree Blog</li>
								<li>Engineering Blog</li>
								<li>Marketplace</li>
								<li>What’s New</li>
								<li>About</li>
								<li>Press</li>
								<li>Careers</li>
								<li>Link in Bio</li>
								<li>Social Good</li>
								<li>Contact</li>
							</ul>
						</div>

						{/* Community */}
						<div>
							<h3 className="font-bold mb-4">Community</h3>
							<ul className="space-y-2 text-sm">
								<li>Linktree for Enterprise</li>
								<li>2023 Creator Report</li>
								<li>2022 Creator Report</li>
								<li>Charities</li>
								<li>What’s Trending</li>
								<li>Creator Profile Directory</li>
								<li>Explore Templates</li>
							</ul>
						</div>

						{/* Support */}
						<div>
							<h3 className="font-bold mb-4">Support</h3>
							<ul className="space-y-2 text-sm">
								<li>Help Topics</li>
								<li>Getting Started</li>
								<li>Linktree Pro</li>
								<li>Features & How-Tos</li>
								<li>FAQs</li>
								<li>Report a Violation</li>
							</ul>
						</div>

						{/* Trust & Legal */}
						<div>
							<h3 className="font-bold mb-4">Trust & Legal</h3>
							<ul className="space-y-2 text-sm">
								<li>Terms & Conditions</li>
								<li>Privacy Notice</li>
								<li>Cookie Notice</li>
								<li>Trust Center</li>
								<li>Cookie Preferences</li>
								<li>Transparency Report</li>
								<li>Law Enforcement Access Policy</li>
							</ul>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex space-x-4 mt-15">
						<button className="px-5 py-2 bg-white text-black rounded-lg">Log in</button>
						<button className="px-5 py-2 bg-lime-400 text-black rounded-lg">
							Get started for free
						</button>
					</div>

					{/* App Store + Social Icons */}
					<div className="flex flex-col items-center mt-6 space-y-4">
						<div className="flex space-x-4 text-xl">
							<i className="fab fa-instagram"></i>
							<i className="fab fa-youtube"></i>
							<i className="fab fa-tiktok"></i>
							<i className="fab fa-twitter"></i>
						</div>
					</div>

					{/* Footer Note */}
					<div className="text-center text-xs text-purple-200 mt-6 max-w-4xl">
						We acknowledge the Traditional Custodians of the land on which our office stands,
						The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging.
						Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066
					</div>
				</div>
			</section>




		</main>
	);
}
