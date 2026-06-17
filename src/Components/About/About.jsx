import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container reveal">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">
              The Future of <span className="text-red">Driving</span> is Electric
            </h2>
            <p className="about-description">
              EV-olution is your destination for discovering the world's finest electric vehicles. 
              We curate, compare and showcase the most innovative EVs on the market — helping you 
              make the switch to sustainable driving with confidence.
            </p>
            <p className="about-description-secondary">
              Experience the unmatched combination of high performance, silent operations, and 
              sustainability. Our platform gives you insights into range capacities, fast-charging 
              networks, and cutting-edge battery technology.
            </p>
            <button className="btn-learn-more">Learn More</button>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80" 
                alt="Electric Vehicle Interior" 
                className="about-image" 
              />
              <div className="image-overlay-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
