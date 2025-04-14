"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("🛑 Veuillez remplir tous les champs.");
      setSuccess("");
    } else {
      setError("");
      setSuccess("✅ Merci ! Ton message a bien été envoyé ✉️");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="p-10 bg-gray-100 dark:bg-gray-800 text-center text-gray-900 dark:text-white scroll-mt-24"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto items-center">
        <input
          type="text"
          placeholder="Nom"
          className="border rounded p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          className="border rounded p-2 h-32 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <AnimatePresence>
          {success && (
            <motion.p
              key="success"
              className="text-green-600 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>
        <button
          type="submit"
          className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 w-full"
        >
          Envoyer
        </button>
      </form>
    </motion.section>
  );
}