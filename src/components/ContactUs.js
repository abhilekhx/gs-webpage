import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const serviceId = "service_ID";
  const templateId = "template_l655cfr";
  const publicAPIKEY = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY;

  console.log("API Key:", publicAPIKEY);

  const onSubmit = (data, r) => {
    sendEmail(serviceId, templateId, form.current, publicAPIKEY);
    // r.target.reset();
  };
  const sendEmail = (serviceId, templateId, variables, publicAPIKEY) => {
    emailjs
      .sendForm(serviceId, templateId, variables, {
        publicKey: publicAPIKEY,
      })
      .then((result) => {
        setSuccessMessage("Message sent successfully");
        console.log("SUCCESS!", result.text);
      })
      .catch((err) => console.log("Something went wrong", err));
  };

  return (
    <div className="contact-us">
      <h1 className="py-5">Contact Us</h1>
      <div className="container">
        <p className="my-5">
          If you wish to get in touch, please fill out the form and we will get
          back to you as soon as possible.
        </p>
        <span className="success-message "> {successMessage} </span>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-form my-3">
            <div className="contact-1">
              {/* NAME INPUT */}
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                {...register("name", { required: "Please enter your name" })}
              />
              <div className="line"></div>
              <br />
              <span className="error-message">
                {errors?.name && errors?.name?.message}
              </span>
              {/* PHONE INPUT */}
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                {...register("phone", {
                  required: "Please add your phone number",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i,
                    message: "Please provide a valid phone number",
                  },
                })}
              />
              <div className="line"></div>
              <br />
              <span className="error-message">
                {errors?.phone && errors?.phone?.message}
              </span>
              {/* EMAIL INPUT */}
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Please provide your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please provide your valid email",
                  },
                })}
              />
              <div className="line"></div>
              <br />
              <span className="error-message">
                {errors?.email && errors?.email?.message}
              </span>
              {/* SUBJECT INPUT */}
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                {...register("subject", {
                  required: "Please add a subject for your message",
                })}
              />
              <div className="line"></div>
              <br />
              <span className="error-message">
                {errors?.subject && errors?.subject?.message}
              </span>
            </div>
            <div className="line"></div>
            <div className="contact-2">
              {/* DESCRIPTION INPUT */}
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
                {...register("description", {
                  required: "Please provide a short description",
                })}
              />
              <div className="line"></div>
              <br />
              <span className="error-message">
                {errors?.description && errors?.description?.message}
              </span>
            </div>
          </div>
          <button className="btn-main-offer my-3 contact-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
