import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Contact = () => {


  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },   // 👈 yaha se errors lena hai
  } = useForm();

 async function onSubmit(data){
  await new Promise((resolve=>setTimeout(resolve,5000)))
console.log('submitting form',data)
 }

  return (
    <>
      <section className="contact-container">
        <div className="contact-leftbox">
          <h3>Get In Touch</h3>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:sonamnagar115@gmail.com">sonamnagar115@gmail.com</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+917067414199">+91 7067414199</a>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Indore, Madhya Pradesh, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Contact Me</h3>
          <input type="text" name="name" placeholder="Your Name" {...register('name',{required:'Name is required',minLength:{value:3,message:'min length atleast 3'}})} />
          {errors.name&&<p>{errors.name.message}</p>}
          <input type="email" name="email" placeholder="Your Email" {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })} />
        {errors.email && <p>{errors.email.message}</p>}
          <input type="tel" name="phone" placeholder="Your Phone Number" {...register("phonenumber", {
  required: "Phone number is required",
  pattern: {
    value: /^[0-9]{10}$/,
    message: "Enter valid 10 digit number",
  },
})}/>
          {errors.phonenumber && <p>{errors.phonenumber.message}</p>}
          <input type="text" name="subject" placeholder="Subject" {...register('subject',{required:'enter valid subject name',minLength:{value:2,message:'atleast 6 letter'}})} />
          {errors.subject && <p>{errors.subject.message}</p>}
          <textarea name="message" placeholder="Your Message" {...register('message',{required:'message is required'})}></textarea>
          {errors.message && <p>{errors.message.message}</p>}
          <button type="submit" disabled={isSubmitting}>{isSubmitting?'isSubmitting':'submit'}</button>
        </form>
      </section>
      <footer class="footer">
  <div class="footer-content">
    <h2 class="footer-name">Sonam Nagar</h2>

       <p class="footer-role">
      Frontend & WordPress Developer focused on building clean and responsive web interfaces.
    </p>

    <ul class="footer-links">
       <li><a href="#asideo">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#project">project</a></li>
            <li><a href="#Skills">Skills</a></li>
          
    </ul>

    <p class="footer-copy">
      © 2026 Sonam Nagar — Crafted for modern web experiences.
    </p>
  </div>
</footer>
    </>
  );
};

export default Contact;
