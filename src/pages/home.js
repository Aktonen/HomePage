import React from 'react'

export default function Home() {
	return (
		<div className="home-page">
			<header className="hero-section">
				<h1>Aku Tolonen</h1>
				<p>Web Developer with a focus on front-end and cybersecurity</p>
			</header>

			<section className="about-me">
				<h2>About Me</h2>
				{/* Your Intro Here */}
			</section>

			<section className="featured-projects">
				<h2>Featured Projects</h2>
				{/* Display 2-3 projects with image, title, short description, link */}
			</section>

			<footer>
				<a
					href='https://github.com/Aktonen'
					target='_blank'
					rel='noreferrer'
				>
					Github
				</a>
				<a
					href='https://www.linkedin.com/in/aku-tolonen-1ba4a3261/'
					target='_blank'
					rel='noreferrer'
				>
					LinkedIn
				</a>
			</footer>
		</div>
	)
}
