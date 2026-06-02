import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Enter valid 10 digit number";
    }

    if (!formData.subject || formData.subject.length < 2) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", formData);

    setIsSubmitting(false);

    setFormData({
      name: "",
      email: "",
      phonenumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center px-6 py-12">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6 animate-[fadeInLeft_1s_ease-in-out]">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Have a project in mind or want to work together?
            Feel free to contact me anytime.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">

            <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:translate-x-2 transition duration-300">
              <Mail className="text-blue-500" size={22} />
              <a
                href="mailto:sonamnagar115@gmail.com"
                className="hover:text-blue-500 hover:underline"
              >
                sonamnagar115@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:translate-x-2 transition duration-300">
              <Phone className="text-green-500" size={22} />
              <a
                href="tel:+917067414199"
                className="hover:text-green-500"
              >
                +91 7067414199
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:translate-x-2 transition duration-300">
              <MapPin className="text-red-500" size={22} />
              <span>Indore, Madhya Pradesh, India</span>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 space-y-4 border border-gray-200 dark:border-gray-700 animate-[fadeInRight_1s_ease-in-out]"
        >

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Me 🚀
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="tel"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phonenumber && (
            <p className="text-red-500 text-sm">{errors.phonenumber}</p>
          )}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;