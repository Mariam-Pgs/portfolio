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
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await res.json();

      if (result.ok || res.status === 200) {
        setSuccess("✅ Merci ! Ton message a bien été envoyé ✉️");
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
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>Contact</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <input
          name="name"
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
        />
        {error && (
          <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
        )}
        <AnimatePresence>
          {success && (
            <motion.p
              key="success"
              style={{ color: "green", fontSize: "0.9rem", fontWeight: 500 }}
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
          style={{
            backgroundColor: "#9333ea",
            color: "white",
            padding: "0.8rem",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Envoyer
        </button>
      </form>
    </motion.section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.8rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem",
  fontFamily: "inherit",
};
