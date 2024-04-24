import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="about">
      <img className="aboutme" src="/Icons/side contact.png" alt="" />
      <section className="whoiam">
        <aside className="whoiam1">
          Want to Collab?
          <br />
          Contact Me
        </aside>
        <aside className="myself">
          Let's join forces to elevate your project to new heights. Together, we
          can innovate and create something truly remarkable.
        </aside>
      </section>
      <form
        className="form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="8b4acf9f-bcfa-457f-9686-173820314678"
        />
        <article className="con1">Get in Touch</article>
        <textarea
          type="text"
          name="message"
          placeholder="Type a message"
          className="con2"
        ></textarea>
        <textarea
          type="text"
          name="message"
          className="con3"
          placeholder="Subject"
          required
        ></textarea>
        <article className="con4">
          <textarea
            type="text"
            name="name"
            placeholder="Enter name"
            className="con11"
            required
          ></textarea>
          <textarea
            name="Sender_email"
            type="email"
            placeholder="Enter email"
            className="con11"
            required
          ></textarea>
        </article>
        <button type="submit" className="con5">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Contact;
