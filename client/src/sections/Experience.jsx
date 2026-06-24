// src/sections/Experience.jsx
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="eyebrow">// experience</span>
        <h2 className="section-title">Where I've put the stack to work.</h2>

        <div className="experience__list">
          {experience.map((job, i) => (
            <motion.div
              className="experience__card glass"
              key={job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="experience__icon">
                <FiBriefcase size={20} />
              </div>
              <div className="experience__body">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__role">{job.role}</h3>
                    <p className="experience__company">{job.company}</p>
                  </div>
                  <span className="experience__duration">{job.duration}</span>
                </div>
                <ul className="experience__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
