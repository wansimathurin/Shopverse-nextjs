"use client";
import React, { useRef } from 'react';
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ContactForm() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [loading, setLoading] = useState(false);

 const form = useRef<HTMLFormElement>(null);

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Prefill user data when Clerk becomes ready
  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setPayload((prev) => ({
        ...prev,
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
      }));
    }
  }, [isLoaded, isSignedIn, user]);

  const submitForm = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!form.current) {
    toast.error("Form not found!");
    setLoading(false);
    return;
  }
    const emailjs = (await import('@emailjs/browser')).default;
    console.log("Form submitted:", payload);
     emailjs
      .sendForm('service_7nhrxaa', 'template_whsap2f', form.current, {
        publicKey: 'qJUA8oq9BoDPnbB9Z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to send message. Please try again.");
        },
      );

    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <motion.form
      onSubmit={submitForm}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      ref={form}
      className="ring ring-gray-200 shadow p-8 rounded-xl mb-20"
    >
      <ToastContainer position="top-center" />
      <h2 className="text-2xl font-bold mb-6">Contact our Support Team</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            value={payload.name}
            onChange={(e) => setPayload({ ...payload, name: e.target.value })}
            className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-black/30"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={payload.email}
            onChange={(e) => setPayload({ ...payload, email: e.target.value })}
            required
            className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-black/30"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block mb-1 font-medium">Subject</label>
        <input
          type="text"
          name="subject"
          value={payload.subject}
          onChange={(e) => setPayload({ ...payload, subject: e.target.value })}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-black/30"
        />
      </div>

      <div className="mt-6">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          rows={5}
          name="message"
          value={payload.message}
          onChange={(e) => setPayload({ ...payload, message: e.target.value })}
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-black/30"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-gray-900 transition font-semibold"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}