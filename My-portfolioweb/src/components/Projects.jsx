function Projects() {

  return (
    <section className="project-section" id="projects">

      <h2>My Projects</h2>

      <div className="project-grid">

        <article className="project-card">

          <img
            src="/images weather.png"
            alt="weather image"
          />

          <h3>Weather App</h3>

          <p>
            real time weather dashboard
          </p>

          <div className="project-tags">

            <span className="tag">React</span>

            <span className="tag">API</span>

          </div>

          <a href="#" className="button">
            Live demo
          </a>

          <a href="#" className="button">
            Github
          </a>

        </article>


        <article className="project-card">

          <img
            src="/logo kisan setu.jpeg"
            alt="kisan image"
          />

          <h3>Kisan Setu App</h3>

          <p>
            Smart agricultural supply chain management
          </p>

          <div className="project-tags">

            <span className="tag">React</span>

            <span className="tag">API</span>

          </div>

          <a href="#" className="button">
            Live demo
          </a>

          <a href="#" className="button">
            Github
          </a>

        </article>


        <article className="project-card">

          <img
            src="/Calculator.jpg"
            alt="calculator image"
          />

          <h3>Calculator App</h3>

          <p>
            Simple calculator application
          </p>

          <div className="project-tags">

            <span className="tag">React</span>

            <span className="tag">API</span>

          </div>

          <a href="#" className="button">
            Live demo
          </a>

          <a href="#" className="button">
            Github
          </a>

        </article>

      </div>

    </section>
  );
}

export default Projects;