// src/sections/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import './Contact.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ state: 'success', message: data.message || 'Message sent successfully.' });
        setForm(initialForm);
      } else {
        setStatus({ state: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ state: 'error', message: 'Could not reach the server. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="eyebrow">// get in touch</span>
        <h2 className="section-title">Let's build something together.</h2>
        <p className="section-sub">{profile.availability}</p>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <a href={`mailto:${profile.email}`} className="contact__info-item glass">
              <FiMail size={18} />
              <div>
                <span className="contact__info-label">Email</span>
                <span className="contact__info-value">{profile.email}</span>
              </div>
            </a>
            <a href={`tel:${profile.phone}`} className="contact__info-item glass">
              <FiPhone size={18} />
              <div>
                <span className="contact__info-label">Phone</span>
                <span className="contact__info-value">{profile.phone}</span>
              </div>
            </a>
            <div className="contact__info-item glass">
              <FiMapPin size={18} />
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-value">{profile.location}</span>
              </div>
            </div>

            <div className="contact__socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__social-btn">
                <FiGithub size={18} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-btn">
                <FiLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact__field-row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                minLength={3}
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
              />
            </div>

            <button type="submit" className="btn btn--primary" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending…' : 'Send Message'} <FiSend />
            </button>

            {status.state === 'success' && (
              <p className="contact__status contact__status--success" role="status">{status.message}</p>
            )}
            {status.state === 'error' && (
              <p className="contact__status contact__status--error" role="alert">{status.message}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
