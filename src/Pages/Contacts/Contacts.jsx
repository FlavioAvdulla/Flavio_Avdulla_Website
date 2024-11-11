import React from "react";
import "./Contacts.css";
import home_07 from "../../assets/images/home/home_07.jpg";

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
      <form>
        <label><p>Your Name</p></label>
        <input type="text" name="name" placeholder="Enter you name" required />

        <label><p>Phone Number</p></label>
        <input type="text" name="name" placeholder="Enter you name" required />

        <label><p>Write your message here</p></label>
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
