import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "01102005", // Service ID dari EmailJS
        "zaldi01102005", // Template ID dari EmailJS
        e.target,
        "dDW9BK89ucjjBcyG-" // Public Key (User ID) dari EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
    e.target.reset(); // Mengosongkan form setelah pengiriman
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white p-10"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Me</h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-4">
        <ul>
          <li>Email: zaldizaldizaldi032@gmail.com</li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/zaldi-83084b289/"
              className="underline"
            >
              Zaldi-
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/zaldibaik" className="underline">
              zaldibaik
            </a>
          </li>
          <li>
            Instagram:{" "}
            <a href="https://instagram.com/zalllldi" className="underline">
              zalllldi
            </a>
          </li>
        </ul>
        <div
          className="bg-white dark:bg-gray-900"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Ada yang Bisa saya bantu?
            </p>
            <form onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="to_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="to_name"
                  name="to_name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="from_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_name"
                  name="from_name"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
