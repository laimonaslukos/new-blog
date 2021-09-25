import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="aboutItem">
        <div className="aboutTitle">
          <h1>Contact</h1>
        </div>

        <section>
          <div class="form-submit">
            <h2 class="subtitle">Write me a letter </h2>
            <form target="_blank" action="" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="" />
              <div class="form-row">
                <input
                  name="name"
                  class="form-control"
                  placeholder="Full Name"
                  required
                  minlength="4"
                />
                <input
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  required
                  minlength="4"
                />
              </div>
              <textarea
                placeholder="Your Message"
                name="message"
                rows="10"
                required
                minlength="4"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
        <header>
          <ul>
            <a href="https://github.com/laimonaslukos">
              <li className="contact-li">GitHub</li>
            </a>
            <a href="https://www.linkedin.com/in/laimonas-luko%C5%A1evi%C4%8Dius-96716abb/">
              <li className="contact-li">LinkedIn</li>
            </a>
          </ul>
        </header>
      </div>
    </div>
  );
}