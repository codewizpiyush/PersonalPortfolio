// src/sections/Resume.jsx
import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';
import './Resume.css';

const HIGHLIGHTS = [
  'MERN Stack Developer',
  'AI Integration Experience',
  'Full Stack Projects',
  'Internship Experience',
];

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container resume__inner glass">
        <motion.div
          className="resume__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">// resume</span>
          <h2 className="section-title">Want the short version?</h2>
          <p className="section-sub">
            A one-page summary of my stack, experience, and projects — ready to share with your team.
          </p>

          <ul className="resume__highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <a href="https://drive.google.com/file/d/1BRU0-7QFi7cmc_tVj7oT0qI99vbsatox/view?usp=sharing" className="btn btn--primary" download>
            Download Resume <FiDownload />
          </a>
        </motion.div>

        <motion.div
          className="resume__preview"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="resume__preview-card">
            <FiFileText size={36} className="resume__preview-icon" />
            <p className="resume__preview-name">Piyush_Gupta_Resume.pdf</p>
            <p className="resume__preview-meta">Updated June 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
