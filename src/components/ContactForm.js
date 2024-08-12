import React from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const templateParams = {
      to_name: formData.get("name"),
      subject:
        "New message from your website arbiFunding from " +
        formData.get("name"),
      message: formData.get("message") + " from " + formData.get("email"),
      from_name: "arbiFunding",
      reply_to: formData.get("email"),
    };

    emailjs
      .send(
        "service_ur52gfn",
        "template_xks9xsp",
        templateParams,
        "0nDd8UpcZnJ6z1LWJ"
      )
      .then(
        (response) => {
          alert("Thank you for your message. We will get back to you soon.");
          window.location.reload();
        },
        (error) => {
          alert("error trying to handle your message " + error.text);
        }
      );
  };
  return (
    <div className="gradient">
      <p
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          paddingTop: "20px",
          fontWeight: "lighter",
        }}
      >
        Contact us
      </p>
      <h1
        style={{
          textAlign: "center",
          fontSize: "4em",
          fontWeight: "bold",
          lineHeight: ".9em",
        }}
      >
        Get in <span className="blueWord">touch</span> with our team
      </h1>
      <p
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontWeight: "lighter",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        Leveraging cutting-edge AI technology, our proprietary algorithmic model
        delivers consistently positive and steady returns for our clients
      </p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "50px 0",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{
              padding: "10px",
              margin: "10px",
              width: "500px",
              borderRadius: "5px",
              border: "none",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            style={{
              padding: "10px",
              margin: "10px",
              width: "500px",
              borderRadius: "5px",
              border: "none",
            }}
          />
          <textarea
            name="message"
            placeholder="Message"
            style={{
              padding: "10px",
              margin: "10px",
              width: "500px",
              borderRadius: "5px",
              border: "none",
              height: "150px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#2d66f8",
              color: "white",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
