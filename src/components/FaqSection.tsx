"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Where is my order?",
    a: "Go to your account > Orders to check real-time tracking updates.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Visa, Mastercard, MTN Mobile Money, Orange Money, PayPal and Crypto.",
  },
  {
    q: "How do I request a refund?",
    a: "Contact our support team with your order ID. Refunds are processed in 3–5 days.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, returns are accepted within 7 days depending on the product category.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">Frequently Asked Questions</h2>

      {faqs.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="border-b py-4 cursor-pointer"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg">{item.q}</h3>
            <span>{open === i ? "−" : "+"}</span>
          </div>

          {open === i && (
            <p className="mt-2">{item.a}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}