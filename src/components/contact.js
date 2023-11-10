import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = process.env.REACT_APP_CONTACT_API_URL + "/api/contact-us";
      const response = await axios.post(apiUrl, formData);
      if (response.status === 200) {
        setResponseMessage(response.data.message);
      } else {
        setResponseMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="pt-8 pb-20 bg-black" id="contact">
      <div className="container mx-auto text-center text-yellow-900">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-yellow-600">
          Free Evaluation
        </h1>

        <p className="text-lg mb-4">
          Initiate the process of reclaiming what is rightfully yours by
          reaching out to Legacy Rising LLC today. Our experienced professionals
          will lead you through the process with meticulous attention and
          unwavering commitment.
        </p>
        <p className="text-lg">
          If you've been in contact with one of our team members, kindly inform
          us, and we will fast-track your request. For all other inquiries, we
          will respond within 24 hours.
        </p>
      </div>

      <div className="container mx-auto p-4 lg:w-1/2">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <label htmlFor="firstName" className="block text-yellow-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 border rounded w-full"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <label htmlFor="lastName" className="block text-yellow-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 border rounded w-full"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <label htmlFor="state" className="block text-yellow-600">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="mt-1 p-2 border rounded w-full"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <label htmlFor="country" className="block text-yellow-600">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 p-2 border rounded w-full"
                onChange={handleInputChange}
              />
            </div> 
          </div>

          <div className="mb-4 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <label htmlFor="phone" className="block text-yellow-600">
                Phone
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 border rounded w-full"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <label htmlFor="email" className="block text-yellow-600">
                Email
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="mt-1 p-2 border rounded w-full"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-yellow-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border rounded w-full"
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full p-2 bg-yellow-600 text-white font-bold rounded hover-bg-yellow-900"
            >
              Submit
            </button>
          </div>
        </form>
        {responseMessage && (
          <div className="mt-4 text-yellow-600">{responseMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
