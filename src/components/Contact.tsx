"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import "./styles.css";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("🛑 Veuillez remplir tous les champs.");
      setSuccess("");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xwpbwgvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();

      if (result.ok || res.status === 200) {
        setSuccess("Merci ! Votre message a bien été envoyé");
        setName("");
        setEmail("");
        setMessage("");
        setError("");
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError("❌ Une erreur s'est produite. Réessaie plus tard.");
      }
    } catch (error) {
      console.error(error);
      setError("❌ Une erreur s'est produite. Vérifie ta connexion.");
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
          name="name"
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-textarea"
        />
        {error && <p className="contact-error">{error}</p>}
        <AnimatePresence>
          {success && (
            <motion.p
              key="success"
              className="contact-success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {success}
            </motion.p>
          )}
        </AnimatePresence>
        <button type="submit" className="contact-button">
          Envoyer
        </button>
      </form>
    </motion.section>
  );
}
