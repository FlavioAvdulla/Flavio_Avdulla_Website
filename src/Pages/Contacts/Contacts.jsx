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
        <div className="name">
          <a href="https://www.behance.net/flavioavdulla">
            <h2>Flavio Avdulla</h2>
          </a>
        </div>
        <p>
          Hi, I'm Flavio Avdulla, a graphic designer based in Tirana, Albania.
          Graduated at Harry Fultz in 2018-2019 (Graphic Design) and currently
          studying at Holberton School Tirana. Work ethic and discipline is part
          of my daily life. I'm a generalist, which means that i make almost
          anything from: Print Designs and Graphic Motions (2D), to 3d Modeling,
          and Texturing. Softwares i use: Adobe photoshop, Adobe Illustrator,
          Adobe After effects, Adobe Premiere pro, Adobe Indesign, Autodesk
          3dsmax, Substance Painter.
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <label className="animate-label" style={{ animationDelay: "0.3s" }}>
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter you name"
          required
          style={{ animationDelay: "0.3s" }}
        />

        <label className="animate-label" style={{ animationDelay: "0.6s" }}>
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your number"
          required
          style={{ animationDelay: "0.6s" }}
        />

        <label className="animate-label" style={{ animationDelay: "0.9s" }}>
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          required
          style={{ animationDelay: "0.9s" }}
        />

        <label className="animate-label" style={{ animationDelay: "1.1s" }}>
          <p>Write your message here</p>
        </label>
        <textarea
          name="message"
          row="6"
          placeholder="Enter you message"
          required
          style={{ animationDelay: "1.1s" }}
        ></textarea>

        <button
          type="submit"
          className="submit_btn"
          style={{ animationDelay: "1.4s" }}
        >
          SUBMIT NOW
        </button>
      </form>
      <span>{result}</span>
      <img src={home_07} alt="" />
    </div>
  );
};

export default Contacts;
