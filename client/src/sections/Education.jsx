// src/sections/Education.jsx
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="eyebrow">// education</span>
        <h2 className="section-title">Academic foundation.</h2>

        <div className="education__timeline">
          {education.map((item, i) => (
            <motion.div
              className="education__item"
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="education__marker">
                <span className="education__dot" />
                {i !== education.length - 1 && <span className="education__line" />}
              </div>
              <div className="education__card glass">
                <div className="education__card-top">
                  <h3 className="education__degree">{item.degree}</h3>
                  <span className="education__metric">{item.metric}</span>
                </div>
                <p className="education__field">{item.field}</p>
                <p className="education__institution">{item.institution}</p>
                <span className="education__duration">{item.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
