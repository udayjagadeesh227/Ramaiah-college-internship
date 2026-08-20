function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>

      <p>
        &copy; <span className="footer-year">{currentYear}</span> Uday J.
        All rights reserved.
      </p>

      <p>
        Built with HTML, CSS and JavaScript.
      </p>

      <nav className="footer-nav">

        <a
          href="https://github.com/udayjagadeesh227"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/uday-j-171536418?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer;