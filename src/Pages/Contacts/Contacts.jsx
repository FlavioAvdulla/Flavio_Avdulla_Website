import React from "react";
import "./Contacts.css";
import home_07 from "../../assets/images/contacts/contact_background.jpg";
import flavio from "../../assets/images/home/flavio.jpg";

const Contacts = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "6051b6b5-751e-4800-8de9-89c9c0bb27e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contacts">
      <div className="flavio_info">
        <img
          ahref="https://www.behance.net/flavioavdulla"
          src="src/assets/images/home/flavio.jpg"
          alt="flavio-image"
        />
        <div className="name">
          <a href="https://www.behance.net/flavioavdulla">
            <h2>Flavio Avdulla</h2>
          </a>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>

      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter you name" required />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your number"
          required
        />

        <label>Email</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your email"
          required
        />

        <label>
          <p>Write your message here</p>
        </label>
        <textarea
          name="message"
          row="6"
          placeholder="Enter you message"
          required
        ></textarea>

        <button type="submit" className="submit_btn">
          SUBMIT NOW
        </button>
      </form>
      <span>{result}</span>
      <img src={home_07} alt="" />
    </div>
  );
};

export default Contacts;
