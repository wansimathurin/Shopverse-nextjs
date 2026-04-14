"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Order & Delivery",
    desc: "Track orders, delivery time, missing packages.",
    icon: "📦",
  },
  {
    title: "Payment Issues",
    desc: "Failed transactions, double charges, refunds.",
    icon: "💳",
  },
  {
    title: "Account Support",
    desc: "Login issues, password reset, security.",
    icon: "👤",
  },
  {
    title: "Product Support",
    desc: "Product details, warranty, quality issues.",
    icon: "🛍️",
  },
];

export default function SupportCategories() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-16">
      {categories.map((cat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="p-6  rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <div className="text-4xl">{cat.icon}</div>
          <h3 className="mt-4 text-xl font-semibold">{cat.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-white">{cat.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}