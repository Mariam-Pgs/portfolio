"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import './Contact.css';

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
      className="contact-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="contact-title">Contact</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className="form-error">{error}</p>}
        <AnimatePresence>
          {success && (
            <motion.p
              key="success"
              className="form-success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>
        <button type="submit">Envoyer</button>
      </form>
    </motion.section>
  );
}
