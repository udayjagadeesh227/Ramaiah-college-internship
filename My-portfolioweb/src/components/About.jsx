function About() {

  return (
    <section className="about-section" id="about">

      <h2>About Me</h2>

      <div className="about-content">

        <figure className="profile-picture">

          <img
            src="/Profile pic.jpeg"
            alt="profile picture"
          />

          <figcaption>
            Uday J - web developer
          </figcaption>

        </figure>

        <div className="about-text">

          <p>
            I am a passionate web developer pursuing B-Tech in
            Information Science and Engineering from M S Ramaiah
            University. I enjoy learning new technologies, building
            projects, and exploring areas like AI, software development,
            and data-driven solutions.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;