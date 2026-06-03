import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import gif from "../assets/gif.gif";

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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden text-white">

      {/* 🔥 BACKGROUND GIF */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${gif})` }}
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* 👇 ORIGINAL CONTENT (NO DATA REMOVED) */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="text-blue-400">Touch</span>
          </h2>

          <p className="text-gray-300 text-lg">
            Have a project in mind or want to work together?
            Feel free to contact me anytime.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-xl rounded-xl shadow-md hover:translate-x-2 transition duration-300">
              <Mail className="text-blue-400" size={22} />
              <a href="mailto:sonamnagar115@gmail.com" className="hover:text-blue-400">
                sonamnagar115@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-xl rounded-xl shadow-md hover:translate-x-2 transition duration-300">
              <Phone className="text-green-400" size={22} />
              <a href="tel:+917067414199" className="hover:text-green-400">
                +91 7067414199
              </a>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-xl rounded-xl shadow-md hover:translate-x-2 transition duration-300">
              <MapPin className="text-red-400" size={22} />
              <span>Indore, Madhya Pradesh, India</span>
            </div>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-6 space-y-4 border border-white/20"
        >

          <h3 className="text-2xl font-semibold text-white">
            Contact Me 🚀
          </h3>

          {/* INPUTS (UNCHANGED LOGIC) */}
          {["name", "email", "phonenumber", "subject"].map((field, i) => (
            <div key={i}>
              <input
                type="text"
                name={field}
                placeholder={`Your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black/30 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              {errors[field] && (
                <p className="text-red-400 text-sm">{errors[field]}</p>
              )}
            </div>
          ))}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-32 rounded-lg bg-black/30 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;