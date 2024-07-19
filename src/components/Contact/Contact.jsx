import React from "react"; 
import { Snackbar } from "@mui/material";
import styles from "./Contact.module.css";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      setOpen(true);
      form.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.Container} id="contact">
      <div className={styles.Wrapper}>
        <div className={styles.Title}>Contact Me</div>
        <div className={styles.Desc}>
          
        </div>
        <form
          className={styles.ContactForm}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xrbzbnrb"
          method="POST"
        >
          <div className={styles.ContactTitle}>Lets connect through mail!</div>
          <input
            className={styles.ContactInput}
            placeholder="Your Email"
            name="email"
            required
          />
          <input
            className={styles.ContactInput}
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className={styles.ContactInput}
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            className={styles.ContactInputMessage}
            placeholder="Message"
            rows="4"
            name="message"
            required
          />
          <input className={styles.ContactButton} type="submit" value="Send" />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
        {error && <Snackbar message={error} severity="error" />}
      </div>
    </div>
  );
};

export default Contact;
