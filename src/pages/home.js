import React from 'react'

export default function Home() {
  return (
    <>
      <header className="hero-section">
        <h1>Aku Tolonen</h1>
        <div>Web Developer with a focus on front-end and cybersecurity</div>
      </header>
      <div className="home-page">

        <section className="about-me">
          <h2>About Me</h2>
          <div>I'm a third year student at Oulu University of Applied Sciences. I'm looking to break in to the IT sector. I'm a very active person, I referee ice hockey during the weekends. I also like to go for runs and lift weights at the gym. My other passions are video games and coding.
          </div>
        </section>

        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className='introduction-to-page'>
            On this web page you can find my projects which I have created to learn something new. Also just to demonstrate my web development skills. Front-end is ReactJS. You can propably notice that design is my weakness but I'm working on it ;)
          </div>
          <h3>Suspensions page</h3>
          <div className='suspensions'>
            The suspensions page was a project to learn web scraping and how that works.
            The data on the page is scraped from Liiga.fi website. I have deployed the Python script to a cloud service and when the service is called it runs the script and updates the data to a firebase firestore database.
            <h4>What I learned:</h4>
            <ul>
              <li>Python</li>
              <li>Web scraping</li>
              <li>Firestore database</li>
            </ul>
          </div>
          <h3>Electricity page</h3>
          <div className='electricity'>
            The electricity page is a quick project that I made in couple of hours. I found a free API that can get the current (on the hour) or current or upcoming days prices. The page just calls the API there's nothing more to the page.
            <h4>What I learned:</h4>
            <ul>
              <li>API usage</li>
            </ul>
          </div>
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
    </>
  )
}
