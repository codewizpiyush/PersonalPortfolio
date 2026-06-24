// src/sections/About.jsx
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { about } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">// about me</span>
          <h2 className="section-title">A developer who ships, not just designs.</h2>
          <p className="section-sub">{about.intro}</p>

          <div className="about__bio">
            {about.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about__highlights"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="about__card glass">
            <h3 className="about__card-title">Highlights</h3>
            <ul className="about__highlight-list">
              {about.highlights.map((item) => (
                <li key={item}>
                  <FiCheckCircle className="about__check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
