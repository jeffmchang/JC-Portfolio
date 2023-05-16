import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const form = useRef();

  const notify = () => {
    toast.success("Thanks for reaching out! I'll get back to you soon.", {
      position: "bottom-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g6s0duf",
        "template_hk7ppwz",
        form.current,
        "frHBsMpetbtcalPYi"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="w-full h-[760px] pt-[130px] shadow-inner">
        <div className="max-w-[650px] w-full h-[580px] mx-auto px-16 pt-16 rounded-md bg-black/30">
          <div className="max-w-[450px]">
            <h5 className="">Let us work together</h5>
            <h1 className="text-white mb-4">Contact me.</h1>
            <p className="mb-6">
              Have a question or want to work together? Leave your details and
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <div>
                  <input
                    required
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="border-2 border-black text-black w-full p-3 mb-5 rounded-md
                "
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="border-2 border-black text-black w-full p-3 mb-5 rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message..."
                    className="border-2 border-black text-black w-full p-3 mb-5 rounded-md"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Send"
                className=" text-white font-bold rounded px-5 py-2 bg-[#1e7774] hover:bg-[#175c5a] hover:text-[#8d8d8d] shadow-3xl"
              />
            </form>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </div>
      </div>
    </>
  );
};
