// src/sections/Testimonials.jsx
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';
import { testimonials } from '../data/portfolio';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <span className="eyebrow">// testimonials</span>
        <h2 className="section-title">What people I've worked with say.</h2>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              className="testimonials__card glass"
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <p className="testimonials__feedback">&ldquo;{t.feedback}&rdquo;</p>
              <div className="testimonials__person">
                <div className="testimonials__avatar">
                  <FiUser size={18} />
                </div>
                <div>
                  <p className="testimonials__name">{t.name}</p>
                  <p className="testimonials__role">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
