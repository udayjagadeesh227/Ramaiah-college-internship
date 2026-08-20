function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message submitted!");
  };

  return (
    <section className="contact-section" id="contact">

      <h2>Contact Me</h2>

      <form
        action=""
        id="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
          />

        </div>


        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            required
          />

        </div>


        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            rows="5"
            required
          ></textarea>

        </div>


        <button
          type="submit"
          id="submit"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;