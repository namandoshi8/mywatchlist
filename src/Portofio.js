function Portfolio() {
  return (
    <div className="portfolio">
      <div className="about-me">
        <div className="profile-picture">
          <img src="profile-picture.jpg" alt="Jon Daniel" />
        </div>
        <div className="name">
          <h3>Im, Jon Daniel</h3>
          <p>inquiry@jondaniel.design</p>
        </div>
        <div className="my-design-portfolio">
          <img src="my-design-portfolio.png" alt="My Design Portfolio" />
        </div>
      </div>
      <div className="portfolio-stats">
        <div className="stat">
          <h3>251</h3>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h3>156</h3>
          <p>Awards</p>
        </div>
        <div className="stat">
          <h3>172</h3>
          <p>Global Design Awards</p>
        </div>
      </div>
      <div className="portfolio-content">
        <div className="item">
          <img src="flamingo.jpg" alt="Flamingo" />
        </div>
        <div className="item">
          <img src="apple.png" alt="Apple" />
          <p>Clients</p>
        </div>
        <div className="item">
          <img src="globe.jpg" alt="Globe" />
        </div>
      </div>
    </div>
  );
}
